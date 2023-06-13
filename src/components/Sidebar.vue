<template>
  <div class="w-100 sideBarBackground full-height">
    <div class="sideBarButtonTop">
      <div class="btn btn-dark w-100 p-3 sideBarTitle" @click="$router.push('/home')">
        <span><img src="../assets/img/favicon.svg" width="35" /></span>
        <span class="ms-2">TYPEFI LEAVE</span>
      </div>
    </div>
    <div
      class="btn btn-dark w-100 p-3 sideBarButtonBottom"
      @click="this.$store.dispatch('logout')"
    >
      Sign Out
    </div>
  </div>
</template>

<style scoped>
.sideBarBackground {
  background-color: #212529;
  position: relative;
}

.sideBarTitle {
  font-size: 1.3rem;
  font-weight: 500;
}

.sideBarButtonBottom {
  position: absolute;
  bottom: 0;
}

.sideBarButtonTop {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
