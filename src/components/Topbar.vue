<template>
  <div class="topBar row p-0 m-0">
    <div class="col col-4">
      <!-- <span
        ><img class="left-logo" src="../assets/img/banner.svg" width="190"
      /></span> -->
      <span class="appTitle pointer" @click="$router.push('/dashboard')"
        >GENERAL <span class="color">HR</span></span
      >
    </div>
    <div class="col col-4 center">
      <img
        class="left-logo"
        src="../assets/img/customer_banner.png"
        width="190"
      />
    </div>
    <div class="col col-4">
      <span @click="this.$store.dispatch('logout')">
        <img
          class="userImage float-end pointer ms-4"
          src="../assets/img/user.png"
          alt=""
          width="35"
      /></span>
      <span
        ><font-awesome-icon
          class="icon float-end topBarIcons pointer ms-4"
          icon="fa-bell"
      /></span>
      <span
        ><font-awesome-icon
          class="icon float-end topBarIcons pointer ms-4"
          icon="fa-circle-question"
      /></span>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import store from "../store";
export default {
  setup: () => {},
  data() {
    return {
      store: useStore(),
      user: store.getters.getCurrentUser,
    };
  },
  methods: {},
  mounted: function () {
    // console.log(this.user);
    // this.user = { name: 'Nipun Amarasekara',  }
  },
};
</script>

<style scoped>
.topBar {
  height: 60px;
  border: 1px solid #ddd;
  /* background-color: #ededed; */
}
.appTitle {
  font-size: 37px;
  font-weight: 700;
  /* letter-spacing: 2px; */
}

.appTitle .color {
  color: #ff3c00f1;
}

.userImage {
  padding-top: 10.5px;
}

.topBarIcons {
  padding-top: 20px;
  font-size: 20px;
  color: #a0aab6;
}

.topBarIcons:hover {
  color: black;
}
</style>
