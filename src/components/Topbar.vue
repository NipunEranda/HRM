<template>
  <div class="topBar row p-0 m-0">
    <div class="col col-4">
      <!-- <span
        ><img class="left-logo" src="../assets/img/banner.svg" width="190"
      /></span> -->
      <span class="appTitle desktop pointer" @click="$router.push('/dashboard')"
        >GENERAL <span class="color">HRM</span></span
      >
      <span
        id="sideBarToggle"
        class="ps-2 pe-2 pointer"
        @click="toggleSideBar()"
        ><font-awesome-icon class="icon" icon="fa-bars"
      /></span>
    </div>
    <div class="col col-4 center p-0 m-0">
      <span class="appTitle mobile pointer" @click="$router.push('/dashboard')"
        >GENERAL <span class="color">HRM</span></span
      >
    </div>
    <div class="col col-4">
      <div class="topBarmobileViewOptions ps-2 pe-2">
        <font-awesome-icon
          class="icon float"
          icon="fa-home"
          @click="$router.push('/dashboard')"
        />
      </div>
      <div class="topBarDesktopOptions">
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
  methods: {
    toggleSideBar: function () {
      if ($("#sideBar").css("display") == "none") {
        $("#sideBar").css("display", "block");
      } else {
        $("#sideBar").css("display", "");
      }
    },
  },
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
