<template>
    <div class="row p-0 m-0">
        <div class="staff-form p-0">
            <div class="titleBar mb-3">
                <span class="h2" id="form-title" v-text="form.formTitle"></span>
                <div class="btn btn-sm btn-danger float-end" @click="hideForm">Cancel</div>
                <div class="btn btn-sm btn-primary me-2 float-end" v-text="form.buttonProcessName"
                    @click="staffFormOperation(inputData)">
                </div>
            </div>
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
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                            type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                    </li>
                </ul>
            </div>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal-tab">
                    <div class="innerForm row p-0 m-0 mt-3">
                        <div class="col col-12 col-sm-6  p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-start">Initials</label>
                            <input type="text" class="form-control form-control-sm float-start" id="firstName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-end">First Name</label>
                            <input type="text" class="form-control form-control-sm float-end" id="firstName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-start">Middle Name</label>
                            <input type="text" class="form-control form-control-sm float-start" id="firstName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-end">Last Name</label>
                            <input type="text" class="form-control form-control-sm float-end" id="lastName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-start">Full Name</label>
                            <input type="text" class="form-control form-control-sm float-start" id="firstName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-end">Email</label>
                            <input type="email" class="form-control form-control-sm float-end" id="lastName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-start">Date Of Birth</label>
                            <input type="text" class="form-control form-control-sm float-start" id="firstName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-end">Marital Status</label>
                            <input type="email" class="form-control form-control-sm float-end" id="lastName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-start">Gender</label>
                            <input type="text" class="form-control form-control-sm float-start" id="firstName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-end">Title</label>
                            <input type="email" class="form-control form-control-sm float-end" id="lastName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-start">Blood Group</label>
                            <input type="text" class="form-control form-control-sm float-start" id="firstName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-end">Place of Birth</label>
                            <input type="email" class="form-control form-control-sm float-end" id="lastName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-start">NIC</label>
                            <input type="text" class="form-control form-control-sm float-start" id="firstName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-end">Passport Number</label>
                            <input type="email" class="form-control form-control-sm float-end" id="lastName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-start">Passport Expiry</label>
                            <input type="text" class="form-control form-control-sm float-start" id="firstName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-end">Driving License Number</label>
                            <input type="email" class="form-control form-control-sm float-end" id="lastName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-start">Religion</label>
                            <input type="text" class="form-control form-control-sm float-start" id="firstName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-end">Nationality</label>
                            <input type="email" class="form-control form-control-sm float-end" id="lastName">
                        </div>
                        <div class="col col-12 col-sm-6 p-0 m-0 mb-3">
                            <label for="firstName" class="form-label float-start">Race</label>
                            <input type="text" class="form-control form-control-sm float-start" id="firstName">
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="work" role="tabpanel" aria-labelledby="work-tab">...</div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup: () => { },
    data() {
        return {
            editedData: $.extend(true, [], this.inputData),
        }
    },
    props: {
        form: Object,
        inputData: Object,
        hideForm: { type: Function },
        staffFormOperation: { type: Function },
    },
    watch: {
        inputData: function () {
            this.editedData = $.extend(true, [], this.inputData);
        },
    }
}
</script>