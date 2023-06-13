<template>
  <!-- Sidebar -->
  <div class="p-0" :class="{ 'm-0' : showSideBar }">
    <div class="row p-0 m-0">
      <div v-if="showSideBar" class="col col-2 p-0 m-0 full-height">
        <Sidebar />
      </div>
      <div class="p-0 m-0" :class="{ 'col col-12' : !showSideBar, 'col col-0' : showSideBar }">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
export default {
  setup: () => {},
  data() {
    return {
      showSideBar: false
    };
  },
  watch: {
    $route: function (to, from) {
      if (to.path == "/") this.showSideBar = false;
      else this.showSideBar = true;
    },
  },
  mounted: function(){
    
  },
  components: {
    Sidebar
  }
}
</script>

<style lang="scss"></style>
