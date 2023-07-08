<template>
  <div class="modal fade" id="staffModal" tabindex="-1" role="dialog" aria-labelledby="staffModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-95" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staffModalLabel">
            {{ modal.modalTitle }}
          </h5>
          <button class="btn btn-sm ps-2 pe-2" data-bs-dismiss="modal">
            <font-awesome-icon icon="fa-close" class="ms-1 me-1" />
          </button>
        </div>
        <div id="modal-body" class="staffModalBody">
          <div class="navs row p-0 m-0">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="personal-tab" data-bs-toggle="tab" data-bs-target="#personal"
                  type="button" role="tab" aria-controls="personal" aria-selected="true">
                  Personal
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="work-tab" data-bs-toggle="tab" data-bs-target="#work" type="button"
                  role="tab" aria-controls="work" aria-selected="false">
                  Work
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                  role="tab" aria-controls="contact" aria-selected="false">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal-tab">
              <!-- Personal -->
              <div class="innerForm row p-0 m-0 mt-1">
                <div class="card text-white mb-2 mt-3 w-100">
                  <div class="card-header">
                    <h6 class="card-title">PERSONAL INFORMATION</h6>
                  </div>
                  <div class="card-body pt-0">
                    <div class="row p-0 m-0">
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="initials" class="form-label float-start">Initials</label>
                        <input type="text" class="form-control form-control-sm float-start" id="initials"
                          v-model="staff.personal.info.initials" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="firstName" class="form-label float-start">First Name</label>
                        <input type="text" class="form-control form-control-sm float-end" id="firstName"
                          v-model="staff.personal.info.firstName" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="middleName" class="form-label float-start">Middle Name</label>
                        <input type="text" class="form-control form-control-sm float-start" id="middleName"
                          v-model="staff.personal.info.middleName" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="lastName" class="form-label float-start">Last Name</label>
                        <input type="text" class="form-control form-control-sm float-end" id="lastName"
                          v-model="staff.personal.info.lastName" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="fullName" class="form-label float-start">Full Name</label>
                        <input type="text" class="form-control form-control-sm float-start" id="fullName"
                          v-model="staff.personal.info.fullName" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="email" class="form-label float-start">Email</label>
                        <input type="email" class="form-control form-control-sm float-end" id="email"
                          v-model="staff.personal.info.email" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="dob" class="form-label float-start">Date Of Birth</label>
                        <input type="date" class="form-control form-control-sm float-start" id="dob"
                          v-model="staff.personal.info.dob" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="maritalStatus" class="form-label float-start">Marital Status</label>
                        <Select :options="dropdownData.maritalStatusList"
                          :selected="staff.personal.info.maritalStatus ? staff.personal.info.maritalStatus : 0" @output="(output) => setSelect('maritalStatus', output)
                            "></Select>
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="gender" class="form-label float-start">Gender</label>
                        <Select :options="dropdownData.genderList"
                          :selected="staff.personal.info.gender ? staff.personal.info.gender : 0"
                          @output="(output) => setSelect('gender', output)"></Select>
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="title" class="form-label float-start">Title</label>
                        <Select :options="dropdownData.titleList"
                          :selected="staff.personal.info.title ? staff.personal.info.title : 0"
                          @output="(output) => setSelect('title', output)"></Select>
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="bloodGroup" class="form-label float-start">Blood Group</label>
                        <input type="text" class="form-control form-control-sm float-start" id="bloodGroup"
                          v-model="staff.personal.info.bloodGroup" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="placeOfBirth" class="form-label float-start">Place of Birth</label>
                        <input type="email" class="form-control form-control-sm float-end" id="placeOfBirth"
                          v-model="staff.personal.info.placeOfBirth" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card text-white mb-2 mt-3 w-100">
                  <div class="card-header">
                    <h6 class="card-title">IDENTIFICATION INFORMATION</h6>
                  </div>
                  <div class="card-body pt-0">
                    <div class="row p-0 m-0">
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="nic" class="form-label float-start">NIC</label>
                        <input type="text" class="form-control form-control-sm float-start" id="nic"
                          v-model="staff.personal.identification.nic" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="passportNumber" class="form-label float-start">Passport Number</label>
                        <input type="text" class="form-control form-control-sm float-end" id="passportNumber" v-model="staff.personal.identification.passportNumber
                          " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="passportExpiry" class="form-label float-start">Passport Expiry</label>
                        <input type="date" class="form-control form-control-sm float-start" id="drivingLicenseNumber"
                          v-model="staff.personal.identification.passportExpiry
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="firstName" class="form-label float-start">Driving License Number</label>
                        <input type="text" class="form-control form-control-sm float-end" id="drivingLicenseNumber"
                          v-model="staff.personal.identification
                            .drivingLicenseNumber
                            " />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card text-white mb-2 mt-3 w-100">
                  <div class="card-header">
                    <h6 class="card-title">ETHNIC INFORMATION</h6>
                  </div>
                  <div class="card-body pt-0">
                    <div class="row p-0 m-0">
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="religion" class="form-label float-start">Religion</label>
                        <input type="text" class="form-control form-control-sm float-start" id="religion"
                          v-model="staff.personal.ethnicity.religion" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="nationality" class="form-label float-start">Nationality</label>
                        <input type="text" class="form-control form-control-sm float-end" id="nationality"
                          v-model="staff.personal.ethnicity.nationality" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="race" class="form-label float-start">Race</label>
                        <input type="text" class="form-control form-control-sm float-start" id="race"
                          v-model="staff.personal.ethnicity.race" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="work" role="tabpanel" aria-labelledby="work-tab">
              <!-- Work -->
              <div class="innerForm row p-0 m-0 mt-1">
                <div class="card text-white mb-2 mt-3 w-100">
                  <div class="card-header">
                    <h6 class="card-title">EMPLOYEE NUMBERS</h6>
                  </div>
                  <div class="card-body pt-0">
                    <div class="row p-0 m-0">
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="employeeNumber" class="form-label float-start">Employee Number</label>
                        <input type="text" class="form-control form-control-sm float-start" id="employeeNumber"
                          v-model="staff.work.employeeNumbers.number" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="epfNumber" class="form-label float-start">EPF Number</label>
                        <input type="text" class="form-control form-control-sm float-end" id="epfNumber"
                          v-model="staff.work.employeeNumbers.epfNumber" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="etfNumber" class="form-label float-start">ETF Number</label>
                        <input type="text" class="form-control form-control-sm float-start" id="etfNumber"
                          v-model="staff.work.employeeNumbers.etfNumber" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="attendanceIdNumber" class="form-label float-start">Attendance ID</label>
                        <input type="text" class="form-control form-control-sm float-end" id="attendanceIdNumber" v-model="staff.work.employeeNumbers
                          .attendanceIdNumber
                          " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="previousEpfNumber" class="form-label float-start">Previous EPF Number</label>
                        <input type="text" class="form-control form-control-sm float-start" id="previousEpfNumber"
                          v-model="staff.work.employeeNumbers.previousEpfNumber
                            " />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card text-white mb-2 mt-3 w-100">
                  <div class="card-header">
                    <h6 class="card-title">GENERAL INFORMATION</h6>
                  </div>
                  <div class="card-body pt-0">
                    <div class="row p-0 m-0">
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="designation" class="form-label float-start">Designation</label>
                        <input type="text" class="form-control form-control-sm float-end" id="designation"
                          v-model="staff.work.general.designation" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="joinedDesignation" class="form-label float-start">Joined Designation</label>
                        <input type="text" class="form-control form-control-sm float-start" id="joinedDesignation"
                          v-model="staff.work.general.joinedDesignation" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="reportingPerson" class="form-label float-start">Reporting Person</label>
                        <input type="text" class="form-control form-control-sm float-end" id="reportingPerson"
                          v-model="staff.work.general.reportingPerson" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="reportingDesignation" class="form-label float-start">Reporting Designation</label>
                        <input type="text" class="form-control form-control-sm float-start" id="reportingDesignation"
                          v-model="staff.work.general.reportingDesignation
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="location" class="form-label float-start">Location</label>
                        <input type="text" class="form-control form-control-sm float-end" id="location"
                          v-model="staff.work.general.location" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="jobDescription" class="form-label float-start">Job Description</label>
                        <input type="text" class="form-control form-control-sm float-start" id="jobDescription"
                          v-model="staff.work.general.jobDescription" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="costCenterCode" class="form-label float-start">Cost Center Code</label>
                        <input type="text" class="form-control form-control-sm float-start" id="costCenterCode"
                          v-model="staff.work.general.costCenterCode" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="functionalReportingPersons" class="form-label float-start">Functional Reporting
                          Person</label>
                        <input type="text" class="form-control form-control-sm float-end" id="functionalReportingPersons"
                          v-model="staff.work.general
                            .functionalReportingPersons
                            " />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card text-white mb-2 mt-3 w-100">
                  <div class="card-header">
                    <h6 class="card-title">EMPLOYMENT DETAILS</h6>
                  </div>
                  <div class="card-body pt-0">
                    <div class="row p-0 m-0">
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="basicSalary" class="form-label float-start">Basic Salary</label>
                        <input type="text" class="form-control form-control-sm float-start" id="basicSalary" v-model="staff.work.employementDetails.info
                          .basicSalary
                          " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="housingAmount" class="form-label float-start">Housing Amount</label>
                        <input type="text" class="form-control form-control-sm float-end" id="housingAmount" v-model="staff.work.employementDetails.info
                          .housingAmount
                          " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="budgetaryReliefAllowance" class="form-label float-start">Budgetary Relief
                          Allowance</label>
                        <input type="text" class="form-control form-control-sm float-start" id="budgetaryReliefAllowance"
                          v-model="staff.work.employementDetails.info
                            .budgetaryReliefAllowance
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="methodJoined" class="form-label float-start">Method Joined</label>
                        <input type="text" class="form-control form-control-sm float-end" id="methodJoined" v-model="staff.work.employementDetails.info
                          .methodJoined
                          " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="pensionScheme" class="form-label float-start">Pension Scheme</label>
                        <input type="text" class="form-control form-control-sm float-start" id="pensionScheme" v-model="staff.work.employementDetails.info
                          .pensionScheme
                          " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="participatedToInducation" class="form-label float-start">Participated To
                          Induction</label>
                        <input type="text" class="form-control form-control-sm float-end" id="participatedToInducation"
                          v-model="staff.work.employementDetails.info
                            .participatedToInducation
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="shift" class="form-label float-start">Shift</label>
                        <input type="text" class="form-control form-control-sm float-start" id="shift" v-model="staff.work.employementDetails.info.shift
                          " />
                      </div>
                    </div>
                    <div class="row p-0 m-0 pt-4">
                      <span class="p-0">
                        <h6>APPOINTMENT</h6>
                      </span>
                      <hr class="m-0" />
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="appointmentStatus" class="form-label float-start">Status</label>
                        <Select :options="dropdownData.booleans"
                          :selected="staff.work.employementDetails.appointment.status ? staff.work.employementDetails.appointment.status : 0"
                          @output="(output) => setSelect('appointmentStatus', output)"></Select>
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="doa" class="form-label float-start">Date Of Appointment</label>
                        <input type="date" class="form-control form-control-sm float-start" id="doa" v-model="staff.work.employementDetails.appointment
                          .doa
                          " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="employmentType" class="form-label float-start">Employment Type</label>
                        <input type="text" class="form-control form-control-sm float-end" id="employmentType" v-model="staff.work.employementDetails.appointment
                          .employmentType
                          " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="priorNoticePeriod" class="form-label float-start">Prior Notice Period</label>
                        <input type="text" class="form-control form-control-sm float-start" id="priorNoticePeriod"
                          v-model="staff.work.employementDetails.appointment
                            .priorNoticePeriod
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="confirmationDueOn" class="form-label float-start">Confirmation Due On</label>
                        <input type="date" class="form-control form-control-sm float-end" id="confirmationDueOn" v-model="staff.work.employementDetails.appointment
                          .confirmationDueOn
                          " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="orvertime" class="form-label float-start">Overtime</label>
                        <Select :options="dropdownData.booleans" :selected="staff.work.employementDetails.appointment
                          .orvertime ? staff.work.employementDetails.appointment
                          .orvertime : 0" @output="(output) => setSelect('appointmentOvertime', output)"></Select>
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="firstName" class="form-label float-start">Date of Retirement</label>
                        <input type="date" class="form-control form-control-sm float-end" id="lastName" v-model="staff.work.employementDetails.appointment
                          .dor
                          " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <!-- Contact -->
              <div class="innerForm row p-0 m-0 mt-1">
                <div class="card text-white mb-2 mt-3 w-100">
                  <div class="card-header">
                    <h6 class="card-title">ADDRESS DETAILS</h6>
                  </div>
                  <div class="card-body pt-0">
                    <div class="row p-0 m-0">
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empAddressBuilding" class="form-label float-start">Building</label>
                        <input type="text" class="form-control form-control-sm float-start" id="empAddressBuilding"
                          v-model="staff.contact.address.building" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empAddressStreet" class="form-label float-start">Street</label>
                        <input type="text" class="form-control form-control-sm float-end" id="empAddressStreet"
                          v-model="staff.contact.address.street" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empAddressCity" class="form-label float-start">City</label>
                        <input type="text" class="form-control form-control-sm float-start" id="empAddressCity"
                          v-model="staff.contact.address.city" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empAddressPostalCode" class="form-label float-start">Postal Code</label>
                        <input type="text" class="form-control form-control-sm float-end" id="empAddressPostalCode"
                          v-model="staff.contact.address.postalCode" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empAddressDistrict" class="form-label float-start">Destrict</label>
                        <input type="text" class="form-control form-control-sm float-start" id="empAddressDistrict"
                          v-model="staff.contact.address.district" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empAddressCountry" class="form-label float-start">Country</label>
                        <input type="text" class="form-control form-control-sm float-end" id="empAddressCountry"
                          v-model="staff.contact.address.country" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card text-white mb-2 mt-3 w-100">
                  <div class="card-header">
                    <h6 class="card-title">CONTACT INFORMATION</h6>
                  </div>
                  <div class="card-body pt-0">
                    <div class="row p-0 m-0">
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="officePhone" class="form-label float-start">Office Phone</label>
                        <input type="text" class="form-control form-control-sm float-start" id="officePhone" v-model="staff.contact.contactInfo.officePhone
                          " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="extensionNumber" class="form-label float-start">Extension Number</label>
                        <input type="text" class="form-control form-control-sm float-end" id="extensionNumber" v-model="staff.contact.contactInfo.extensionNumber
                          " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="officeEmail" class="form-label float-start">Office Email</label>
                        <input type="email" class="form-control form-control-sm float-start" id="officeEmail" v-model="staff.contact.contactInfo.officeEmail
                          " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empPersonalMobile" class="form-label float-start">Personal Mobile</label>
                        <input type="text" class="form-control form-control-sm float-end" id="empPersonalMobile" v-model="staff.contact.contactInfo.personalMobile
                          " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empPersonalEmail" class="form-label float-start">Personal Email</label>
                        <input type="email" class="form-control form-control-sm float-start" id="empPersonalEmail"
                          v-model="staff.contact.contactInfo.personalEmail
                            " />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card text-white mb-2 mt-3 w-100">
                  <div class="card-header">
                    <h6 class="card-title">LOCATION INFORMATION</h6>
                  </div>
                  <div class="card-body pt-0">
                    <div class="row p-0 m-0">
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empProvince" class="form-label float-start">Province</label>
                        <input type="text" class="form-control form-control-sm float-end" id="empProvince"
                          v-model="staff.contact.location.province" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empDistrict" class="form-label float-start">Destrict</label>
                        <input type="text" class="form-control form-control-sm float-start" id="empDistrict"
                          v-model="staff.contact.location.district" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="electorate" class="form-label float-start">Electorate</label>
                        <input type="text" class="form-control form-control-sm float-end" id="electorate"
                          v-model="staff.contact.location.electorate" />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empPollingDivision" class="form-label float-start">Polling Division</label>
                        <input type="text" class="form-control form-control-sm float-start" id="empPollingDivision"
                          v-model="staff.contact.location.pollingDivision
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empDistanceToWorkPlace" class="form-label float-start">Distance To WorkPlace</label>
                        <input type="text" class="form-control form-control-sm float-end" id="empDistanceToWorkPlace"
                          v-model="staff.contact.location.distanceToWorkPlace
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empTravelMode" class="form-label float-start">Travel Mode</label>
                        <input type="text" class="form-control form-control-sm float-start" id="empTravelMode"
                          v-model="staff.contact.location.travelMode" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card text-white mb-2 mt-3 w-100">
                  <div class="card-header">
                    <h6 class="card-title">EMERGENCY CONTACTS INFORMATION</h6>
                  </div>
                  <div class="card-body pt-0">
                    <div class="row p-0 m-0 pt-3">
                      <span class="p-0">
                        <h6>Contact 1</h6>
                      </span>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empEmergencyContact1Name" class="form-label float-start">Name</label>
                        <input type="text" class="form-control form-control-sm float-end" id="empEmergencyContact1Name"
                          v-model="staff.contact.emergencyContact[0].name
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empEmergencyContact1Relationship" class="form-label float-start">RelationShip</label>
                        <input type="text" class="form-control form-control-sm float-start"
                          id="empEmergencyContact1Relationship" v-model="staff.contact.emergencyContact[0]
                            .relationship
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empEmergencyContact1MobileNumber" class="form-label float-start">Mobile Number</label>
                        <input type="text" class="form-control form-control-sm float-end"
                          id="empEmergencyContact1MobileNumber" v-model="staff.contact.emergencyContact[0]
                            .mobileNumber
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empEmergencyContact1AddressBuilding" class="form-label float-start">Building</label>
                        <input type="text" class="form-control form-control-sm float-start"
                          id="empEmergencyContact1AddressBuilding" v-model="staff.contact.emergencyContact[0].address
                            .building
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empEmergencyContact1AddressStreet" class="form-label float-start">Street</label>
                        <input type="text" class="form-control form-control-sm float-end"
                          id="empEmergencyContact1AddressStreet" v-model="staff.contact.emergencyContact[0].address
                            .street
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empEmergencyContact1AddressCity" class="form-label float-start">City</label>
                        <input type="text" class="form-control form-control-sm float-start"
                          id="empEmergencyContact1AddressCity" v-model="staff.contact.emergencyContact[0].address
                            .city
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empEmergencyContact1AddressPostalCode" class="form-label float-start">Postal
                          Code</label>
                        <input type="text" class="form-control form-control-sm float-end"
                          id="empEmergencyContact1AddressPostalCode" v-model="staff.contact.emergencyContact[0].address
                            .postalCode
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empEmergencyContact1AddressDistrict" class="form-label float-start">District</label>
                        <input type="text" class="form-control form-control-sm float-start"
                          id="empEmergencyContact1AddressDistrict" v-model="staff.contact.emergencyContact[0].address
                            .district
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empEmergencyContact1AddressCountry" class="form-label float-start">Country</label>
                        <input type="text" class="form-control form-control-sm float-end"
                          id="empEmergencyContact1AddressCountry" v-model="staff.contact.emergencyContact[0].address
                            .country
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empEmergencyContact1AddressTelephone" class="form-label float-start">Telephone</label>
                        <input type="text" class="form-control form-control-sm float-start"
                          id="empEmergencyContact1AddressTelephone" v-model="staff.contact.emergencyContact[0].address
                            .telephone
                            " />
                      </div>
                    </div>
                    <div class="row p-0 m-0 pt-3">
                      <hr class="mb-3 mt-4" />
                      <span class="p-0">
                        <h6>Contact 2</h6>
                      </span>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empEmergencyContact2Name" class="form-label float-start">Name</label>
                        <input type="text" class="form-control form-control-sm float-end" id="empEmergencyContact2Name"
                          v-model="staff.contact.emergencyContact[1].name
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empEmergencyContact2Relationship" class="form-label float-start">RelationShip</label>
                        <input type="text" class="form-control form-control-sm float-start"
                          id="empEmergencyContact2Relationship" v-model="staff.contact.emergencyContact[1]
                            .relationship
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empEmergencyContact2MobileNumber" class="form-label float-start">Mobile Number</label>
                        <input type="text" class="form-control form-control-sm float-end"
                          id="empEmergencyContact2MobileNumber" v-model="staff.contact.emergencyContact[1]
                            .mobileNumber
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empEmergencyContact2AddressBuilding" class="form-label float-start">Building</label>
                        <input type="text" class="form-control form-control-sm float-start"
                          id="empEmergencyContact2AddressBuilding" v-model="staff.contact.emergencyContact[1].address
                            .building
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empEmergencyContact2AddressStreet" class="form-label float-start">Street</label>
                        <input type="text" class="form-control form-control-sm float-end"
                          id="empEmergencyContact2AddressStreet" v-model="staff.contact.emergencyContact[1].address
                            .street
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empEmergencyContact2AddressCity" class="form-label float-start">City</label>
                        <input type="text" class="form-control form-control-sm float-start"
                          id="empEmergencyContact2AddressCity" v-model="staff.contact.emergencyContact[1].address
                            .city
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empEmergencyContact2AddressPostalCode" class="form-label float-start">Postal
                          Code</label>
                        <input type="text" class="form-control form-control-sm float-end"
                          id="empEmergencyContact2AddressPostalCode" v-model="staff.contact.emergencyContact[1].address
                            .postalCode
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empEmergencyContact2AddressDistrict" class="form-label float-start">District</label>
                        <input type="text" class="form-control form-control-sm float-start"
                          id="empEmergencyContact2AddressDistrict" v-model="staff.contact.emergencyContact[1].address
                            .district
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 pe-1">
                        <label for="empEmergencyContact2AddressCountry" class="form-label float-start">Country</label>
                        <input type="text" class="form-control form-control-sm float-end"
                          id="empEmergencyContact2AddressCountry" v-model="staff.contact.emergencyContact[1].address
                            .country
                            " />
                      </div>
                      <div class="col col-12 col-sm-6 p-0 m-0 mt-4 ps-sm-1">
                        <label for="empEmergencyContact2AddressTelephone" class="form-label float-start">Telephone</label>
                        <input type="text" class="form-control form-control-sm float-start"
                          id="empEmergencyContact2AddressTelephone" v-model="staff.contact.emergencyContact[1].address
                            .telephone
                            " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary me-0" @click="staffModalOperation(modal.mode, staff)"
            data-bs-dismiss="modal">
            {{ modal.buttonProcessName }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Select from "@/components/Select.vue";
import utils from "@/utils";
export default {
  setup: () => { },
  data() {
    return {
      dropdownData: {
        maritalStatusList: ['Select an Option', 'Single', 'Married', 'Divorced'],
        genderList: ['Select an Option', 'Male', 'Female'],
        titleList: ['Select an Option', 'Dr', 'Mr', 'Mrs', 'Ms', 'Prof', 'Rev'],
        booleans: ['Select an Option', false, true]
      }
    };
  },
  props: {
    modal: Object,
    staff: Object,
    staffModalOperation: { type: Function },
  },
  methods: {
    setSelect: function (key, selection) {
      if (key == 'maritalStatus')
        this.staff.personal.info.maritalStatus = selection;
      else if (key == 'gender')
        this.staff.personal.info.gender = selection;
      else if (key == 'title')
        this.staff.personal.info.title = selection;
      else if (key == 'appointmentStatus')
        this.staff.work.employementDetails.appointment.status = selection;
      else if (key == 'appointmentOvertime')
        this.staff.work.employementDetails.appointment.appointmentOvertime = selection;
    },
    clearForm: function () {
      this.staff = $.extend(true, {}, utils.generateEmployee());
    },
  },
  mounted: function () {
    // this.staff = $.extend(true, {}, this.staff);
  },
  components: {
    Select,
  },
};
</script>
