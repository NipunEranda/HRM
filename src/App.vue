<template>
  <!-- Sidebar -->
  <div class="p-0" :class="{ 'm-0': showSideBar }">
    <div class="row p-0 m-0">
      <Topbar v-if="showSideBar" />
      <div v-if="showSideBar" id="sideBar" class="p-0 m-0 sideBar">
        <Sidebar />
      </div>
      <div id="appView" class="p-0 m-0" :class="{ 'col col-12': !showSideBar, 'col col-0': showSideBar }">
        <div class="container-loader">
          <div class="loader"></div>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar.vue";
export default {
  setup: () => { },
  data() {
    return {
      showSideBar: false,
    };
  },
  watch: {
    $route: function (to, from) {
      if (to.path == "/") this.showSideBar = false;
      else this.showSideBar = true;
    },
  },
  mounted: function () { },
  components: {
    Sidebar,
    Topbar,
  },
};
</script>

<style scoped>
.sideBar {
  width: 210px;
}
</style>