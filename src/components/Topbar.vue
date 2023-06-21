<template>
  <div class="topBar row p-0 m-0">
    <div class="col col-4">
      <!-- <span
        ><img class="left-logo" src="../assets/img/banner.svg" width="190"
      /></span> -->
      <span class="appTitle desktop pointer" @click="$router.push('/dashboard')"><span class="main">GENERAL</span> <span
          class="sub">HRM</span></span>
      <span id="sideBarToggle" class="ps-2 pe-2 pointer" @click="toggleSideBar()"><font-awesome-icon class="icon"
          icon="fa-bars" /></span>
    </div>
    <div class="col col-4 center p-0 m-0">
      <span class="appTitle mobile pointer" @click="$router.push('/dashboard')"><span class="main">GENERAL</span> <span
          class="sub">HRM</span></span>
    </div>
    <div class="col col-4">
      <div class="topBarmobileViewOptions ps-2 pe-2">
        <span>
          <font-awesome-icon class="icon" icon="fa-home" @click="$router.push('/dashboard')" /></span>
          <span><font-awesome-icon class="icon me-3"
            :icon="userTheme == 'light-theme' ? 'fa-moon' : 'fa-sun'" @click="setTheme" /></span>
      </div>
      <div class="topBarDesktopOptions">
        <div class="dropdown float-end">
          <img type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
            class="userImage float-end pointer ms-4" :src="user.avatar == undefined ? userImage : user.avatar" alt=""
            width="35" referrerpolicy="no-referrer"/>
          <ul class="dropdown-menu" :class="{ 'dropdown-menu-dark' : user.theme == 'dark-theme', 'dropdown-menu-light': user.theme == 'light-theme' }" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#"><font-awesome-icon class="icon me-2"
                  icon="fa-gear" />Preferences</a></li>
            <li><a class="dropdown-item" href="#"><font-awesome-icon class="icon me-2"
                  icon="fa-lock" /> Security</a></li>
            <li><a class="dropdown-item" href="#"
                @click="this.$store.dispatch('logout')"><font-awesome-icon class="icon me-2" icon="fa-power-off" />
                Logout</a></li>
          </ul>
        </div>
        <!-- <span>
          <img
            class="userImage float-end pointer ms-4"
            :src="user.avatar == undefined ? userImage : user.avatar"
            alt=""
            width="35"
        /></span> -->
        <span><font-awesome-icon class="icon float-end topBarIcons pointer ms-4" icon="fa-bell" /></span>
        <span><font-awesome-icon class="icon float-end topBarIcons pointer ms-4"
            :icon="userTheme == 'light-theme' ? 'fa-moon' : 'fa-sun'" @click="setTheme" /></span>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import store from "../store";
import userImage from '../assets/img/user.png';
export default {
  setup: () => { },
  data() {
    return {
      store: useStore(),
      user: store.getters.getCurrentUser,
      userImage: userImage,
      userTheme: 'light-theme',
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
    setTheme() {
      if (this.userTheme == 'light-theme')
        this.userTheme = 'dark-theme';
      else
        this.userTheme = 'light-theme';
      store.dispatch("setUserTheme", this.userTheme);
      document.documentElement.className = this.userTheme;
    }
  },
  mounted: function () {
    this.userTheme = store.getters.getCurrentUser.theme;
    document.documentElement.className = this.userTheme;
  },
};
</script>