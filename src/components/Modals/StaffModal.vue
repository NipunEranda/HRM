<template>
    <div class="modal fade" id="staffModal" tabindex="-1" role="dialog" aria-labelledby="staffModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-95" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staffModalLabel">{{ modal.modalTitle }}</h5>
                    <button class="btn btn-sm ps-2 pe-2 shadow-none" @click="closeModal"><font-awesome-icon icon="fa-close"
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
                    <button type="button" class="btn btn-primary shadow-none me-0" @click="staffModalOperation(inputData)">{{ modal.buttonProcessName }}</button>
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