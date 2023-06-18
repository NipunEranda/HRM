<template>
  <div id="containerView">
    <div class="row m-0 pb-3">
      <div class="col col-10 p-0 m-0"><input class="form-control form-control-sm" type="text" name="search" id="search"
          v-model="searchStaff" placeholder=" &#x1F50E; search..." /></div>
      <div class="col col-2 p-0 m-0 ps-2">
        <div class="btn btn-sm btn-primary float-end w-100">
          <span class="d-none d-lg-block">Add Employee</span>
          <span class="d-block d-lg-none text-center"><font-awesome-icon icon="fa-plus" /></span>
        </div>
      </div>
    </div>
    <div class="row m-0">
      <!-- {{ filteredStaff }} -->
      <div class="table-responsive p-0">
        <table class="table table-hover table-bordered table-sm table-responsive">
          <thead class="table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Country</th>
              <th scope="col">Location</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in filteredStaff">
              <td v-text="employee.personal.info.fullName"></td>
              <td v-text="employee.personal.info.email"></td>
              <td v-text="employee.contact.address.country"></td>
              <!-- <td v-text="((employee.contact.address.city == '') ? '' : (employee.contact.address.city + ', ')) + ((employee.contact.address.country == '') ? '' : employee.contact.address.country)"></td> -->
              <td
                v-text="((employee.contact.address.city == '') ? '' : (employee.contact.address.city + ', ')) + ((employee.contact.address.country == '') ? '' : employee.contact.address.country)">
              </td>
              <td v-text="employee.work.organization.company.department"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import store from "../../store";
export default {
  setup: () => { },
  data() {
    return {
      store: useStore(),
      user: store.getters.getCurrentUser,
      activeTab: this.$route.path,
      staff: [],
      filteredStaff: [],
      searchStaff: "",
    };
  },
  watch: {
    searchStaff: function () {
      if (this.searchStaff.trim() != '') {
        this.filteredStaff = this.staff.filter(emp => emp.personal.info.firstName.toLowerCase().includes(this.searchStaff.toLowerCase()));
      }
    },
  },
  methods: {
    loadStaff: async function () {
      await store.dispatch("loadStaff");
      this.staff = await store.getters.getStaff;
      this.filteredStaff = $.extend(true, [], this.staff);
    }
  },
  mounted: async function () {
    await this.loadStaff();
  }
}
</script>

<style>
#containerView .table-responsive {
  height: var(--table-view-height);
}

/* #containerView {
  height: var(--view-container-height);
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

#containerView::-webkit-scrollbar {
  display: none;
} */
</style>