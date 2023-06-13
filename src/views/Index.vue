<template>
  <div class="login-form">
    <div class="mt-4 mb-5 center">
      <img src="../assets/img/typefi_login.svg" class="logo" />
    </div>
    <div class="center">
      <button class="btn btn-dark w-25" @click="redirectToLogin()">
        Sign In
      </button>
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

.center {
  display: flex;
  justify-content: center;
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
        "https://login.microsoftonline.com/28b2e5d6-155a-48d7-b25d-c8af3a89ecdd/oauth2/v2.0/authorize?client_id=fc7ec7b0-98c4-4b6c-aaf8-a25482d825e9&response_type=code&redirect_uri=http://localhost:8888&response_mode=query&scope=user.read Files.Read.All offline_access&state=12345&sso_reload=true";
    },
  },
  async mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const codeString = urlParams.get("code");
    if (codeString) {
      axios
        .post(`/.netlify/functions/auth/login`, { code: codeString })
        .then((res) => {
          if (!res.data.error) {
            store.dispatch("updateCurrentUser", {
              id: res.data.data.user._id,
              email: res.data.data.user.email,
              name: res.data.data.user.name,
              token: res.data.data.token,
              loggedIn: new Date(),
            });
            router.push("/home");
          }
        });
    }
  },
};
</script>
