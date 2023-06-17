<template>
  <div class="topBar row p-0 m-0">
    <div class="col col-4">
      <!-- <span
        ><img class="left-logo" src="../assets/img/banner.svg" width="190"
      /></span> -->
      <span class="appTitle desktop pointer" @click="$router.push('/dashboard')">GENERAL <span
          class="color">HRM</span></span>
      <span id="sideBarToggle" class="ps-2 pe-2 pointer" @click="toggleSideBar()"><font-awesome-icon class="icon"
          icon="fa-bars" /></span>
    </div>
    <div class="col col-4 center p-0 m-0">
      <span class="appTitle mobile pointer" @click="$router.push('/dashboard')">GENERAL <span
          class="color">HRM</span></span>
    </div>
    <div class="col col-4">
      <div class="topBarmobileViewOptions ps-2 pe-2">
        <font-awesome-icon class="icon float" icon="fa-home" @click="$router.push('/dashboard')" />
      </div>
      <div class="topBarDesktopOptions">
        <div class="dropdown float-end">
          <img type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
            class="userImage float-end pointer ms-4" :src="user.avatar == undefined ? userImage : user.avatar" alt=""
            width="35" />
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item profile-dropdown-item" href="#"><font-awesome-icon class="icon me-2" icon="fa-gear" />Preferences</a></li>
            <li><a class="dropdown-item profile-dropdown-item" href="#"><font-awesome-icon class="icon me-2" icon="fa-lock" /> Security</a></li>
            <li><a class="dropdown-item profile-dropdown-item" href="#"><font-awesome-icon class="icon me-2" icon="fa-power-off" /> Logout</a></li>
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
        <span><font-awesome-icon class="icon float-end topBarIcons pointer ms-4" icon="fa-circle-question" /></span>
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
      userImage: userImage
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
    console.log(this.user);
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
  margin-top: 10.5px;
  border-radius: 100px;
}

.topBarIcons {
  padding-top: 20px;
  font-size: 20px;
  color: #a0aab6;
}

.topBarIcons:hover {
  color: black;
}

.profile-dropdown{

}

.profile-dropdown-item{
  font-size: 0.9rem;
}
</style>
