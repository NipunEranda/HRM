<template>
  <div>

    <!-- Options -->
    <div class="row m-0 pb-3">
      <div class="col col-9 p-0 m-0"><input class="form-control form-control-sm" type="text" name="search" id="search"
          v-model="searchStaff" placeholder=" &#x1F50E; search..." /></div>
      <div class="col col-3 p-0 m-0 ps-2">
        <div class="row p-0 m-0">
          <div class="col col-6 p-0 m-0">
            <div class="btn btn-sm btn-primary float-end w-100" @click="openCreateModal">
              <span class="d-none d-lg-block">Add</span>
              <span class="d-block d-lg-none text-center"><font-awesome-icon icon="fa-plus" /></span>
            </div>
          </div>
          <div class="col col-6 p-0 m-0 ps-2">
            <div class="btn btn-sm float-end w-100" @click="loadStaff"
              :class="{ 'btn-secondary': user.theme == 'dark-theme', 'btn-dark': user.theme == 'light-theme' }">
              <span class="d-none d-lg-block">Refresh</span>
              <span class="d-block d-lg-none text-center"><font-awesome-icon icon="fa-refresh" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Staff Form -->
    <StaffForm v-if="staffMode == 'add' || staffMode == 'edit'" />

    <!-- Staff View -->
    <StaffList :filteredStaff="filteredStaff" :openEditModal="openEditModal" :user="user" />

  </div>
</template>

<script>
import { useStore } from "vuex";
import store from "@/store";
import StaffForm from '@/components/Forms/Staff.vue';
import StaffList from '@/components/Views/StaffList.vue';
export default {
  setup: () => { },
  data() {
    return {
      store: useStore(),
      user: store.getters.getCurrentUser,
      activeTab: this.$route.path,
      staff: store.getters.getStaff,
      filteredStaff: store.getters.getStaff,
      searchStaff: "",
      staffMode: null,
    };
  },
  watch: {
    searchStaff: function () {
      if (this.searchStaff.trim() != '') {
        this.filteredStaff = this.staff.filter(emp => emp.personal.info.fullName.toLowerCase().includes(this.searchStaff.toLowerCase()));
      } else
        this.filteredStaff = this.staff;
    },
  },
  methods: {
    loadStaff: async function () {
      $(".container-loader").removeClass("hidden").addClass("show");
      await store.dispatch("loadStaff");
      this.staff = await store.getters.getStaff;
      this.filteredStaff = $.extend(true, [], this.staff);
      this.staff = this.staff.sort((a, b) => a.personal.info.fullName.localeCompare(b.personal.info.fullName));
      this.filteredStaff = this.filteredStaff.sort((a, b) => a.personal.info.fullName.localeCompare(b.personal.info.fullName));
      $(".container-loader").removeClass("show").addClass("hidden");
    },
    openCreateModal: function () {
      this.staffMode = 'add';
    },
    openEditModal: function () {
      this.staffMode = 'edit';
    },
    create: function () {

    },
    update: function () {

    },
    delete: function () {

    },
    staffModalClick: async function () {
    }
  },
  mounted: async function () {
    if (this.staff.length == 0)
      await this.loadStaff();
  },
  components: {
    StaffForm,
    StaffList
  }
}
</script>