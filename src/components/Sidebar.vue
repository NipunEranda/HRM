<template>
  <div class="w-100 sideBarBackground">
    <div class="sideBarButtonTop">
      <!-- Dashboard -->
      <div v-if="menues['/dashboard']" class="sideBarBtn sideBarBtn_dark w-100 row m-0 p-3 sideBarTitle text-start"
        :class="{ sideBarBtn_dark_nav_active: activeTab == '/dashboard' }" @click="navigateTo('/dashboard')">
        <div class="col col-1 col-md-2 p-0">
          <font-awesome-icon class="icon float" icon="fa-home" />
        </div>
        <div class="col col-11 col-md-10 p-0">
          <span>Dashboard</span>
        </div>
      </div>

      <!-- Leaves -->
      <div v-if="menues['/leaves']" class="sideBarBtn sideBarBtn_dark w-100 row m-0 p-3 sideBarTitle text-start"
        :class="{ sideBarBtn_dark_nav_active: activeTab == '/leaves' }" @click="navigateTo('/leaves')">
        <div class="col col-1 col-md-2 p-0">
          <font-awesome-icon class="icon float" icon="fa-calendar-check" />
        </div>
        <div class="col col-11 col-md-10 p-0">
          <span>Leaves</span>
        </div>
      </div>

      <!-- Time Tracking -->
      <div v-if="menues['/timeTracking']" class="sideBarBtn sideBarBtn_dark w-100 row m-0 p-3 sideBarTitle text-start"
        @click="navigateTo('/timeTracking')" :class="{ sideBarBtn_dark_nav_active: activeTab == '/timeTracking' }">
        <div class="col col-1 col-md-2 p-0">
          <font-awesome-icon class="icon float" icon="fa-clock" />
        </div>
        <div class="col col-11 col-md-10 p-0">
          <span>Time</span>
        </div>
      </div>

      <!-- Staff -->
      <div v-if="menues['/staff']" class="sideBarBtn sideBarBtn_dark w-100 row m-0 p-3 sideBarTitle text-start"
        @click="navigateTo('/staff')" :class="{ sideBarBtn_dark_nav_active: activeTab == '/staff' }">
        <div class="col col-1 col-md-2 p-0">
          <font-awesome-icon class="icon float" icon="fa-user-group" />
        </div>
        <div class="col col-11 col-md-10 p-0">
          <span>Staff</span>
        </div>
      </div>

      <!-- Users -->
      <div v-if="menues['/users']" class="sideBarBtn sideBarBtn_dark w-100 row m-0 p-3 sideBarTitle text-start"
        @click="navigateTo('/users')" :class="{ sideBarBtn_dark_nav_active: activeTab == '/users' }">
        <div class="col col-1 col-md-2 p-0">
          <font-awesome-icon class="icon float" icon="fa-users-gear" />
        </div>
        <div class="col col-11 col-md-10 p-0">
          <span>Users</span>
        </div>
      </div>

      <!-- User Options -->
      <div class="w-100 row m-0 sideBarTitle sideBarTitle_small text-start">
        <div class="sideBarBtn sideBarBtn_dark row p-0 m-0 p-3 col col-6"
          :class="{ sideBarBtn_dark_nav_active: activeTab == '/profile' }" @click="navigateTo('/profile')">
          <div class="col col-2 col-md-2 p-0">
            <font-awesome-icon class="icon float me-2" icon="fa-user" />
          </div>
          <div class="col col-10 col-md-10 p-0">
            <span>Profile</span>
          </div>
        </div>
        <div class="sideBarBtn sideBarBtn_dark row p-0 m-0 p-3 col col-6" @click="this.$store.dispatch('logout')">
          <div class="col col-2 p-0">
            <font-awesome-icon class="icon float me-2" icon="fa-power-off" />
          </div>
          <div class="col col-10 p-0">
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="sideBarsideBarBtnBottom">
      <div
        class="sideBarBtn sideBarBtn_dark w-100 p-3 sideBarTitle text-start"
        @click="this.$store.dispatch('logout')"
      >
        <font-awesome-icon class="icon" icon="fa-power-off" /><span class="ms-4"
          >Logout</span
        >
      </div>
    </div> -->
  </div>
</template>

<script>
import { useStore } from "vuex";
import store from "../store";
import routes from "@/router/routes";
export default {
  setup: () => { },
  data() {
    return {
      store: useStore(),
      user: store.getters.getCurrentUser,
      activeTab: this.$route.path,
      menues: {
        "/dashboard": false,
        "/leaves": false,
        "/timeTracking": false,
        "/staff": false,
        "/users": false
      }
    };
  },
  watch: {
    $route: function (prev, now) {
      this.activeTab = this.$route.path;
    },
  },
  methods: {
    navigateTo: function (path) {
      this.$router.push(path);
      $("#sideBar").css("display", "");
    },
    showMenu: async function (path) {
      const show = await store.dispatch("hasAccess", { routes: routes, to: path });
      this.menues[path] = show;
    }
  },
  mounted: async function () {
    Object.keys(this.menues).forEach(async menu => {
      await this.showMenu(menu);
    });
  }
};
</script>