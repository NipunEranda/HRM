<template>
  <div class="login-form">
    <div class="mt-4 mb-5 center">
      <img src="../assets/img/logo.png" class="logo" />
    </div>
    <div class="center">
      <button class="btn btn-primary w-25" @click="redirectToLogin()">
        Continue With Microsoft
      </button>
    </div>
    <div class="center mt-3">
      <div class="center">
        <div id="googleBtn" style="margin: auto"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-form {
  margin-top: 10%;
}

.logo {
  width: 200px;
}
</style>

<script>
import router from "../router";
import { useStore } from "vuex";
import store from "../store";
export default {
  setup: () => {},
  data() {
    return {};
  },
  methods: {
    redirectToLogin() {
      location.href =
        "https://login.microsoftonline.com/28b2e5d6-155a-48d7-b25d-c8af3a89ecdd/oauth2/v2.0/authorize?client_id=fc7ec7b0-98c4-4b6c-aaf8-a25482d825e9&response_type=code&redirect_uri=" + process.env.VUE_APP_URL + "&response_mode=query&scope=user.read Files.Read.All offline_access&state=12345&sso_reload=true";
    },
  },
  async mounted() {
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
          console.log(response);
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
                  loggedIn: new Date(),
                });
                router.push("/dashboard");
              }
            });
        });
    }

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
              loggedIn: new Date(),
            });
            router.push("/dashboard");
          }
        });
    }
  },
};
</script>
