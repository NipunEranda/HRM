<template>
  <div class="w-100 sideBarBackground full-height">
    <div class="sideBarButtonTop">
      <!-- Dashboard -->
      <div
        class="button button_dark w-100 row m-0 p-3 sideBarTitle text-start"
        :class="{ button_dark_nav_active: activeTab == '/dashboard' }"
        @click="$router.push('/dashboard')"
      >
        <div class="col col-1 col-md-2 p-0">
          <font-awesome-icon class="icon float" icon="fa-home" />
        </div>
        <div class="col col-11 col-md-10 p-0">
          <span>Dashboard</span>
        </div>
      </div>

      <!-- Leaves -->
      <div
        class="button button_dark w-100 row m-0 p-3 sideBarTitle text-start"
        :class="{ button_dark_nav_active: activeTab == '/leaves' }"
        @click="$router.push('/leaves')"
      >
        <div class="col col-1 col-md-2 p-0">
          <font-awesome-icon class="icon float" icon="fa-calendar-check" />
        </div>
        <div class="col col-11 col-md-10 p-0">
          <span>Leaves</span>
        </div>
      </div>

      <!-- Time Tracking -->
      <div
        class="button button_dark w-100 row m-0 p-3 sideBarTitle text-start"
        @click="$router.push('/timeTracking')"
        :class="{ button_dark_nav_active: activeTab == '/timeTracking' }"
      >
        <div class="col col-1 col-md-2 p-0">
          <font-awesome-icon class="icon float" icon="fa-clock" />
        </div>
        <div class="col col-11 col-md-10 p-0">
          <span>Time</span>
        </div>
      </div>

      <!-- Staff -->
      <div
        class="button button_dark w-100 row m-0 p-3 sideBarTitle text-start"
        @click="$router.push('/staff')"
        :class="{ button_dark_nav_active: activeTab == '/staff' }"
      >
        <div class="col col-1 col-md-2 p-0">
          <font-awesome-icon class="icon float" icon="fa-user-group" />
        </div>
        <div class="col col-11 col-md-10 p-0">
          <span>Staff</span>
        </div>
      </div>
    </div>
    <!-- <div class="sideBarButtonBottom">
      <div
        class="button button_dark w-100 p-3 sideBarTitle text-start"
        @click="this.$store.dispatch('logout')"
      >
        <font-awesome-icon class="icon" icon="fa-gear" /><span class="ms-4"
          >Settings</span
        >
      </div>
    </div> -->
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
      activeTab: this.$route.path,
    };
  },
  watch: {
    $route: function (prev, now) {
      this.activeTab = this.$route.path;
    },
  },
  methods: {},
};
</script>

<style scoped>
.sideBarBackground {
  background-color: #000;
  position: relative;
}

.sideBarTitle {
  font-size: 0.8rem;
}

.sideBarTitle .icon {
  font-size: 1.2rem;
}

.sideBarButtonBottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.sideBarButtonTop {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
