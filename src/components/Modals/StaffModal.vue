<template>
    <div class="modal fade" id="staffModal" tabindex="-1" role="dialog" aria-labelledby="staffModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-95" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staffModalLabel">{{ modal.modalTitle }}</h5>
                    <button class="btn btn-sm ps-2 pe-2" @click="closeModal"><font-awesome-icon icon="fa-close"
                            class="ms-1 me-1" />
                    </button>
                </div>
                <div id="modal-body" class="staffModalBody">
                    <div class="navs row p-0 m-0">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="personal-tab" data-bs-toggle="tab"
                                    data-bs-target="#personal" type="button" role="tab" aria-controls="personal"
                                    aria-selected="true">Personal</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="work-tab" data-bs-toggle="tab" data-bs-target="#work"
                                    type="button" role="tab" aria-controls="work" aria-selected="false">Work</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                    type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
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
                                            <div class="col col-12 col-sm-6  p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Initials</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">First Name</label>
                                                <input type="text" class="form-control form-control-sm float-end"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Middle Name</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Last Name</label>
                                                <input type="text" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Full Name</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Email</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Date Of Birth</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Marital Status</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Gender</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Title</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Blood Group</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Place of Birth</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
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
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">NIC</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Passport
                                                    Number</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Passport
                                                    Expiry</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Driving License
                                                    Number</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
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
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Religion</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Nationality</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Race</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
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
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Employee
                                                    Number</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">EPF Number</label>
                                                <input type="text" class="form-control form-control-sm float-end"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">ETF Number</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Attendance ID</label>
                                                <input type="text" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Previous EPF
                                                    Number</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
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
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Designation</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Joined
                                                    Designation</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Reporting
                                                    Person</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Reporting
                                                    Designation</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Location</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Job
                                                    Description</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Cost Center
                                                    Code</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Functional Reporting
                                                    Person</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
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
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Basic Salary</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Housing Amount</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Budgetary Relief
                                                    Allowance</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Method Joined</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Pension Scheme</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Participated To
                                                    Induction</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Shift</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                        </div>
                                        <div class="row p-0 m-0 pt-4">
                                            <span class="p-0">
                                                <h6>APPOINTMENT</h6>
                                            </span>
                                            <hr class="m-0" />
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Status</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Date Of
                                                    Appointment</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Employment
                                                    Type</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Prior Notice
                                                    Period</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Confirmation Due
                                                    On</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Overtime</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Date of
                                                    Retirement</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
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
                                            <div class="col col-12 col-sm-6  p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Building</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Street</label>
                                                <input type="text" class="form-control form-control-sm float-end"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">City</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Postal Code</label>
                                                <input type="text" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Destrict</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Country</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
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
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Office Phone</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Extension
                                                    Number</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Office Email</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Personal
                                                    Mobile</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Personal Email</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
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
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Province</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Destrict</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Electorate</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Polling
                                                    Division</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Distance To
                                                    WorkPlace</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Travel Mode</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
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
                                            <span class="p-0"><h6>Contact 1</h6></span>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Name</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">RelationShip</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Mobile Number</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Building</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Street</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">City</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Postal Code</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">District</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Country</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Telephone</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                        </div>
                                        <div class="row p-0 m-0 pt-3">
                                            <hr class="mb-3 mt-4" />
                                            <span class="p-0"><h6>Contact 2</h6></span>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Name</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">RelationShip</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Mobile Number</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Building</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Street</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">City</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Postal Code</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">District</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 pe-1">
                                                <label for="firstName" class="form-label float-start">Country</label>
                                                <input type="email" class="form-control form-control-sm float-end"
                                                    id="lastName">
                                            </div>
                                            <div class="col col-12 col-sm-6 p-0 m-0 mt-3 ps-sm-1">
                                                <label for="firstName" class="form-label float-start">Telephone</label>
                                                <input type="text" class="form-control form-control-sm float-start"
                                                    id="firstName">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                    <button type="button" class="btn btn-primary me-0"
                        @click="staffModalOperation(modal.mode, inputData)">{{ modal.buttonProcessName }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup: () => { },
    data() {
        return {

        }
    },
    props: {
        modal: Object,
        inputData: Object,
        closeModal: { type: Function },
        staffModalOperation: { type: Function },
    }
}
</script>