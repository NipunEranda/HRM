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
    <div class="row m-0 pb-3" v-if="staffMode == 'add' || staffMode == 'edit'">
      <div class="staff-form p-3">
        staff
      </div>
    </div>

    <!-- Staff View -->
    <div class="row m-0">
      <div class="table-responsive p-0">
        <table class="table table-hover table-bordered table-sm table-responsive mb-0"
          :class="{ 'table-dark': user.theme == 'dark-theme', 'table-light': user.theme == 'light-theme' }">
          <thead class="table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Country</th>
              <th scope="col">Location</th>
              <th scope="col">Department</th>
              <th scope="col" class="table-row-delete-col"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="pointer" v-for="employee in filteredStaff">
              <td v-text="employee.personal.info.fullName" @click="openEditModal"></td>
              <td v-text="employee.personal.info.email" @click="openEditModal"></td>
              <td v-text="employee.contact.address.country" @click="openEditModal"></td>
              <td
                v-text="((employee.contact.address.city == '') ? '' : (employee.contact.address.city + ', ')) + ((employee.contact.address.country == '') ? '' : employee.contact.address.country)"
                @click="openEditModal">
              </td>
              <td v-text="employee.work.organization.company.department" @click="openEditModal"></td>
              <td class="table-row-delete-col"><font-awesome-icon icon="fa-trash" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import { useStore } from "vuex";
import store from "@/store";
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
  }
}
</script>