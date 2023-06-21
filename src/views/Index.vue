<template>
  <div class="row p-0 m-0 login-form">
    <div class="ps-3 pe-3 login-options">
      <div class="mt-4 mb-4 center">
        <span>
          <span><img src="../assets/img/logo.png" class="logo" /></span><span class="h1 ms-2 login-title-main">GENERAL
          </span><span class="login-title-sub h1">HRM</span>
        </span>
      </div>
      <div class="center">
        <button class="login-btn w-100" @click="redirectToLogin()">
          <span><span><img src="../assets/img/microsoft.png" width="25"></span><span class="ms-3">Microsoft</span></span>
        </button>
      </div>
      <div class="center">
        <div class="login-btn w-100 mt-3" @click="clickSignInButton()"><span><span><img src="../assets/img/google.png"
                width="25"></span><span class="ms-3">Google</span></span></div>
        <div id="googleBtn" class="hidden" style="margin: auto"></div>
      </div>
    </div>
    <div class="desktop login-cover"></div>
  </div>
</template>

<style scoped></style>

<script>
import router from "../router";
import { useStore } from "vuex";
import store from "../store";
export default {
  setup: () => { },
  data() {
    return {};
  },
  methods: {
    redirectToLogin() {
      location.href =
        "https://login.microsoftonline.com/" + process.env.VUE_APP_AZURE_TENENT + "/oauth2/v2.0/authorize?client_id=" + process.env.VUE_APP_AZURE_CLIENT_ID + "&response_type=code&redirect_uri=" +
        process.env.VUE_APP_AZURE_REDIRECT_URI +
        "&response_mode=query&scope=user.read mail.read offline_access&state=12345&sso_reload=true";
    },
    clickSignInButton() {
      const googleButtonWrapper = this.createFakeGoogleWrapper();
      googleButtonWrapper.click();
    },
    createFakeGoogleWrapper() {
      const googleLoginWrapper = document.createElement("div");
      // Or you can simple hide it in CSS rule for custom-google-button
      googleLoginWrapper.style.display = "none";
      googleLoginWrapper.classList.add("custom-google-button");

      // Add the wrapper to body
      document.body.appendChild(googleLoginWrapper);

      // Use GSI javascript api to render the button inside our wrapper
      // You can ignore the properties because this button will not appear
      window.google.accounts.id.renderButton(googleLoginWrapper, {
        type: "icon",
        width: "200",
      });

      const googleLoginWrapperButton =
        googleLoginWrapper.querySelector("div[role=button]");

      return {
        click: () => {
          googleLoginWrapperButton.click();
        },
      };
    }
  },
  async mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const codeString = urlParams.get("code");
    if (codeString) {
      axios
        .post(`/.netlify/functions/auth/login`, {
          code: codeString,
          type: "microsoft",
        })
        .then((res) => {
          if (!res.data.error) {
            store.dispatch("updateCurrentUser", {
              id: res.data.data.user._id,
              email: res.data.data.user.email,
              name: res.data.data.user.name,
              token: res.data.data.token,
              avatar: res.data.data.avatar,
              loggedIn: new Date(),
            });
            router.push("/dashboard");
          }
        });
    } else {
      let googleAuthNotAvailable = false;
      try {
        google.accounts.id.initialize({
          client_id: process.env.VUE_APP_GOOGLE_ID,
          callback: onSignIn,
        });
        google.accounts.id.prompt();
        google.accounts.id.renderButton(document.getElementById("googleBtn"), {
          theme: "outline",
          size: "large",
          text: "signin_with",
          type: "standard",
          logo_alignment: "left",
        });
        function onSignIn(googleUser) {
          axios
            .get(
              `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${googleUser.credential}`
            )
            .then((response) => {
              axios
                .post(`/.netlify/functions/auth/login`, {
                  user: response.data,
                  type: "google",
                })
                .then((res) => {
                  if (!res.data.error) {
                    store.dispatch("updateCurrentUser", {
                      id: res.data.data.user._id,
                      email: res.data.data.user.email,
                      name: res.data.data.user.name,
                      token: res.data.data.token,
                      avatar: res.data.data.user.avatar,
                      theme: res.data.data.user.theme,
                      loggedIn: new Date(),
                    });
                    router.push("/dashboard");
                  }
                });
            });
        }
      } catch (e) {
        console.log(e);
        googleAuthNotAvailable = true;
        location.reload();
      }
    }
  },
};
</script>
