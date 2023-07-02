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

    <!-- Staff Modal -->
    <staffModal :modal="modal" :staffModalOperation="staffModalOperation" :inputData="selectedEmployee" />

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
      selectedEmployee: null,
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
      this.selectedEmployee = this.generateNewEmployee();
      this.modal = { modalTitle: 'Add Employee', buttonProcessName: 'Save', message: null, mode: 'add' };
      $('#staffModal').modal("show");
    },
    openEditModal: function (employee) {
      this.selectedEmployee = employee;
      this.modal = { modalTitle: 'Edit Employee', buttonProcessName: 'Update', message: null, mode: 'edit' };
      $('#staffModal').modal("show");
    },
    openActionModal: function (employee) {
      this.modal.modalTitle = "Remove Employee";
      this.modal = { modalTitle: 'Remove Employee', buttonProcessName: 'Remove', message: `Do you want to remove ${employee.personal.info.firstName} ${employee.personal.info.lastName} from the system.`, mode: 'delete', data: employee };
      $('#actionModal').modal("show");
    },
    generateNewEmployee: function () {
      return {
        personal: {
          info: {
            initials: "",
            firstName: "",
            middleName: "",
            lastName: "",
            fullName: "",
            email: "",
            dob: "",
            maritalStatus: "",
            gender: "",
            title: "",
            bloodGroup: "",
            placeOfBirth: ""
          },
          identification: {
            nic: "",
            passportNumber: "",
            passportExpiry: "",
            drivingLicenseNumber: "",
            expatriate: ""
          },
          ethnicity: {
            religion: "",
            nationality: "",
            race: ""
          },
          family: {
            father: {
              name: "",
              dob: "",
              occupation: "",
              employerName: "",
              alive: true,
              entitledToMedicalScheme: false,
              nic_passport: "",
              contactNumber: "",
              address: ""
            },
            mother: {
              name: "",
              dob: "",
              occupation: "",
              employerName: "",
              alive: true,
              entitledToMedicalScheme: false,
              nic_passport: "",
              contactNumber: "",
              address: ""
            }
          },
          livingSituation: {
            livingWith: "",
            monthlyIncome: 0,
            numberOfDependants: 0,
            numberOfChildren: 0
          }
        },
        work: {
          employeeNumbers: {
            number: 0,
            epfNumber: 0,
            etfNumber: 0,
            attendanceIdNumber: 0,
            previousEpfNumber: 0
          },
          organization: {
            company: {
              name1: "",
              name2: "",
              department: ""
            }
          },
          general: {
            designation: "",
            joinedDesignation: "",
            reportingPerson: "",
            reportingDesignation: "",
            location: "",
            jobDescription: "",
            costCenterCode: "",
            functionalReportingPersons: ""
          },
          "employementDetails": {
            info: {
              basicSalary: 0,
              housingAmount: 0,
              budgetaryReliefAllowance: 0,
              methodJoined: "",
              pensionScheme: "",
              participatedToInducation: "",
              shift: ""
            },
            appointment: {
              status: false,
              doa: "",
              employmentType: "",
              priorNoticePeriod: "",
              confirmationDueOn: "",
              orvertime: false,
              dor: ""
            }
          }
        },
        contact: {
          address: {
            building: "",
            street: "",
            city: "",
            postalCode: "",
            district: "",
            country: ""
          },
          contactInfo: {
            officePhone: "",
            extensionNumber: "",
            officeEmail: "",
            personalMobile: "",
            personalEmail: ""
          },
          location: {
            province: "",
            district: "",
            electorate: "",
            pollingDivision: "",
            distanceToWorkPlace: "",
            travelMode: ""
          },
          emergencyContact: [
            {
              name: "",
              relationship: "",
              mobileNumber: "",
              address: {
                building: "",
                street: "",
                city: "",
                postalCode: "",
                district: "",
                country: "",
                telephone: ""
              }
            },
            {
              name: "",
              relationship: "",
              mobileNumber: "",
              address: {
                building: "",
                street: "",
                city: "",
                postalCode: "",
                district: "",
                country: "",
                telephone: ""
              }
            }
          ]
        }
      }
    },
    create: function () {

    },
    update: function () {

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