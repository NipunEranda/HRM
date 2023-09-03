<template>
  <div>

    <!-- Options -->
    <div class="row m-0 pb-3">
      <div class="col col-9 p-0 m-0" :class="{ 'col-10': user.role == 'user' }"><input
          class="form-control form-control-sm" type="text" name="search" id="search" v-model="searchStaff"
          placeholder=" &#x1F50E; search..." />
      </div>
      <div class="col p-0 m-0 ps-2" :class="{ 'col-2': user.role == 'user', 'col-3': user.role == 'admin' || user.role == 'hr' }">
        <div class="row p-0 m-0">
          <div class="col col-6 p-0 m-0" v-if="user.role == 'admin' || user.role == 'hr'">
            <div class="btn btn-sm btn-primary float-end w-100" @click="openCreateModal">
              <span class="d-none d-lg-block">Add</span>
              <span class="d-block d-lg-none text-center"><font-awesome-icon icon="fa-plus" /></span>
            </div>
          </div>
          <div class="col p-0 m-0 ps-2" :class="{ 'col-12': user.role == 'user', 'col-6': user.role == 'admin' || user.role == 'hr' }">
            <div class="btn btn-sm float-end w-100" @click="loadStaff"
              :class="{ 'btn-secondary': user.theme == 'dark-theme', 'btn-dark': user.theme == 'light-theme' }">
              <span class="d-none d-lg-block">Refresh</span>
              <span class="d-block d-lg-none text-center"><font-awesome-icon icon="fa-refresh" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Staff Modal -->
    <staffModal :modal="modal" :staffModalOperation="staffModalOperation" :staff="selectedEmployee" />

    <!-- Staff View -->
    <staffList :filteredStaff="filteredStaff" :openEditModal="openEditModal" :openActionModal="openActionModal"
      :user="user" />

    <!-- Action Modal -->
    <ActionModal :modal="modal" :action="removeEmployee" />

  </div>
</template>

<script>
import { useStore } from "vuex";
import store from "@/store";
import staffList from '@/components/Views/Tables/StaffList.vue';
import staffModal from '@/components/Modals/StaffModal.vue';
import ActionModal from '@/components/Modals/Common/ActionModal.vue';
import utils from '@/utils';
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
      modal: { modalTitle: '', buttonProcessName: '', message: null, mode: '', data: null },
      selectedEmployee: utils.generateEmployee(),
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
      if (this.user.role == 'admin' || this.user.role == 'hr') {
        this.selectedEmployee = utils.generateEmployee();
        this.modal = { modalTitle: 'Add Employee', buttonProcessName: 'Save', message: null, mode: 'add' };
        $('#staffModal').modal("show");
      }
    },
    openEditModal: function (employee) {
      if (this.user.role == 'admin' || this.user.role == 'hr') {
        this.selectedEmployee = employee;
        this.modal = { modalTitle: 'Edit Employee', buttonProcessName: 'Update', message: null, mode: 'edit' };
        $('#staffModal').modal("show");
      }
    },
    openActionModal: function (employee) {
      if (this.user.role == 'admin' || this.user.role == 'hr') {
        this.modal.modalTitle = "Remove Employee";
        this.modal = { modalTitle: 'Remove Employee', buttonProcessName: 'Remove', message: `Do you want to remove ${employee.personal.info.firstName} ${employee.personal.info.lastName} from the system.`, mode: 'delete', data: employee };
        $('#actionModal').modal("show");
      }
    },
    removeEmployee: function (data) {
      //Remove Employee
      $(".container-loader").removeClass("hidden").addClass("show");
      store.dispatch("deleteStaff", data).then((result) => {
        this.staff = result.data;
        this.$router.go(0);
      });
      $(".container-loader").removeClass("show").addClass("hidden");
    },
    staffModalOperation: function (mode, employee) {
      //Create or Update process call
      if (mode == 'add') {
        // console.log(employee);
        store.dispatch("addStaff", employee).then((result) => {
          // console.log(result);
          this.staff = result.data;
          this.$router.go(0);
        });
      } else if (mode == 'edit') {
        store.dispatch("updateStaff", employee).then((result) => {
          this.staff = result.data;
          this.$router.go(0);
        });
      }
    },
  },
  mounted: async function () {
    if (this.staff.length == 0)
      await this.loadStaff();
  },
  components: {
    staffList,
    staffModal,
    ActionModal
  }
}
</script>