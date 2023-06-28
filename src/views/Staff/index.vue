<template>
  <div>

    <!-- Options -->
    <div class="row m-0 pb-3">
      <div class="col col-9 p-0 m-0"><input class="form-control form-control-sm" type="text" name="search" id="search"
          v-model="searchStaff" placeholder=" &#x1F50E; search..." /></div>
      <div class="col col-3 p-0 m-0 ps-2">
        <div class="row p-0 m-0">
          <div class="col col-6 p-0 m-0">
            <div class="btn btn-sm btn-primary shadow-none float-end w-100" @click="openCreateModal">
              <span class="d-none d-lg-block">Add</span>
              <span class="d-block d-lg-none text-center"><font-awesome-icon icon="fa-plus" /></span>
            </div>
          </div>
          <div class="col col-6 p-0 m-0 ps-2">
            <div class="btn btn-sm shadow-none float-end w-100" @click="loadStaff"
              :class="{ 'btn-secondary': user.theme == 'dark-theme', 'btn-dark': user.theme == 'light-theme' }">
              <span class="d-none d-lg-block">Refresh</span>
              <span class="d-block d-lg-none text-center"><font-awesome-icon icon="fa-refresh" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Staff Modal -->
    <div class="modal fade" id="staffModal" tabindex="-1" role="dialog" aria-labelledby="staffModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-95" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staffModalLabel">{{ modal.modalTitle }}</h5>
            <button class="btn btn-sm ps-2 pe-2 shadow-none" @click="closeModal"><font-awesome-icon icon="fa-close" class="ms-1 me-1" />
            </button>
          </div>
          <div id="modal-body" class="staffModalBody">
            <div class="navs row p-0 m-0">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="personal-tab" data-bs-toggle="tab" data-bs-target="#personal"
                    type="button" role="tab" aria-controls="personal" aria-selected="true">Personal</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="work-tab" data-bs-toggle="tab" data-bs-target="#work" type="button"
                    role="tab" aria-controls="work" aria-selected="false">Work</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                    role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                </li>
              </ul>
            </div>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal-tab">
                <div class="innerForm row p-0 m-0 mt-3">
                  <div class="col col-12 col-sm-6  p-0 m-0 mb-3 pe-1">
                    <label for="firstName" class="form-label float-start">Initials</label>
                    <input type="text" class="form-control form-control-sm float-start" id="firstName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 ps-sm-1">
                    <label for="firstName" class="form-label float-start">First Name</label>
                    <input type="text" class="form-control form-control-sm float-end" id="firstName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 pe-1">
                    <label for="firstName" class="form-label float-start">Middle Name</label>
                    <input type="text" class="form-control form-control-sm float-start" id="firstName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 ps-sm-1">
                    <label for="firstName" class="form-label float-start">Last Name</label>
                    <input type="text" class="form-control form-control-sm float-end" id="lastName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 pe-1">
                    <label for="firstName" class="form-label float-start">Full Name</label>
                    <input type="text" class="form-control form-control-sm float-start" id="firstName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 ps-sm-1">
                    <label for="firstName" class="form-label float-start">Email</label>
                    <input type="email" class="form-control form-control-sm float-end" id="lastName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 pe-1">
                    <label for="firstName" class="form-label float-start">Date Of Birth</label>
                    <input type="text" class="form-control form-control-sm float-start" id="firstName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 ps-sm-1">
                    <label for="firstName" class="form-label float-start">Marital Status</label>
                    <input type="email" class="form-control form-control-sm float-end" id="lastName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 pe-1">
                    <label for="firstName" class="form-label float-start">Gender</label>
                    <input type="text" class="form-control form-control-sm float-start" id="firstName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 ps-sm-1">
                    <label for="firstName" class="form-label float-start">Title</label>
                    <input type="email" class="form-control form-control-sm float-end" id="lastName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 pe-1">
                    <label for="firstName" class="form-label float-start">Blood Group</label>
                    <input type="text" class="form-control form-control-sm float-start" id="firstName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 ps-sm-1">
                    <label for="firstName" class="form-label float-start">Place of Birth</label>
                    <input type="email" class="form-control form-control-sm float-end" id="lastName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 pe-1">
                    <label for="firstName" class="form-label float-start">NIC</label>
                    <input type="text" class="form-control form-control-sm float-start" id="firstName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 ps-sm-1">
                    <label for="firstName" class="form-label float-start">Passport Number</label>
                    <input type="email" class="form-control form-control-sm float-end" id="lastName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 pe-1">
                    <label for="firstName" class="form-label float-start">Passport Expiry</label>
                    <input type="text" class="form-control form-control-sm float-start" id="firstName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 ps-sm-1">
                    <label for="firstName" class="form-label float-start">Driving License Number</label>
                    <input type="email" class="form-control form-control-sm float-end" id="lastName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 pe-1">
                    <label for="firstName" class="form-label float-start">Religion</label>
                    <input type="text" class="form-control form-control-sm float-start" id="firstName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 ps-sm-1">
                    <label for="firstName" class="form-label float-start">Nationality</label>
                    <input type="email" class="form-control form-control-sm float-end" id="lastName">
                  </div>
                  <div class="col col-12 col-sm-6 p-0 m-0 mb-3 pe-1">
                    <label for="firstName" class="form-label float-start">Race</label>
                    <input type="text" class="form-control form-control-sm float-start" id="firstName">
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="work" role="tabpanel" aria-labelledby="work-tab">...</div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary shadow-none" @click="closeModal">Close</button>
            <button type="button" class="btn btn-primary shadow-none me-0">{{ modal.buttonProcessName }}</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Staff View -->
    <staffList :filteredStaff="filteredStaff" :openEditModal="openEditModal" :user="user" />

  </div>
</template>

<script>
import { useStore } from "vuex";
import store from "@/store";
import staffList from '@/components/Views/Tables/StaffList.vue';
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
      modal: { modalTitle: '', buttonProcessName: '', mode: '' },
      newEmployee: this.generateNewEmployee(),
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
      this.selectedEmployee = null;
      this.modal = { modalTitle: 'Add Employee', buttonProcessName: 'Save', mode: 'add' };
      $('#staffModal').modal("show");
    },
    openEditModal: function (employee) {
      this.selectedEmployee = employee;
      this.modal = { modalTitle: 'Edit Employee', buttonProcessName: 'Update', mode: 'edit' };
      $('#staffModal').modal("show");
    },
    closeModal: function () {
      $('#staffModal').modal("hide");
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
    delete: function () {

    },
    staffFormOperation: function (employee) {
      console.log(employee);
    },
  },
  mounted: async function () {
    if (this.staff.length == 0)
      await this.loadStaff();
  },
  components: {
    staffList
  }
}
</script>