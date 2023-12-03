<template>
    <div class="row m-0 p-0 p-2 btn btn-dark w-100 mt-2 mb-2 text-start" @click="view.projects = !view.projects">
        <span class="p-0 m-0"><font-awesome-icon class="icon float me-2" icon="fa-angles-right" />Projects</span>
    </div>
    <div class="projectList mb-3" :class="{ 'hidden': !view.projects }">
        <div class="row m-0 p-0 options mb-2">
            <div class="col-10 m-0 p-0"
                :class="{ 'col-12': user.role == 'user', 'col-10': user.role == 'admin' || user.role == 'hr' }">
                <div class="row m-0 p-0">
                    <div class="col col-6 m-0 p-0">
                        <Custom-Select :classes="['float-start w-100 form-control-sm p-0 pe-1']"
                            :options="dropdownData.projectFilterOptions" :selected="0" @output="(output) => setSelect('maritalStatus', output)
                                "></Custom-Select>
                    </div>
                    <div class="col col-6 m-0 p-0">
                        <Custom-Select :classes="['float-start w-100 form-control-sm p-0 ps-1 pe-1']"
                            :options="dropdownData.filterByClient" :selected="0" @output="(output) => setSelect('maritalStatus', output)
                                "></Custom-Select>
                    </div>
                </div>
            </div>
            <div class="col col-2 m-0 p-0 ps-1" v-if="user.role == 'admin' || user.role == 'hr'">
                <div class="btn btn-sm btn-primary float-end w-100" @click="openCreateModal">
                    <span class="d-none d-md-block">Add</span>
                    <span class="d-block d-md-none text-center"><font-awesome-icon icon="fa-plus" /></span>
                </div>
            </div>
        </div>
        <div class="row m-0 p-0">
            <TimeProjectsList :currentUser="user" />
        </div>
    </div>

    <!-- Clients info -->
    <div class="row m-0 p-0 p-2 btn btn-dark w-100 mt-2 mb-2 text-start" @click="view.clients = !view.clients">
        <span class="p-0 m-0"><font-awesome-icon class="icon float me-2" icon="fa-angles-right" />Clients</span>
    </div>
    <div class="clientsList mb-3" :class="{ 'hidden': !view.clients }">
        Clients
    </div>

    <!-- Tasks info -->
    <div class="row m-0 p-0 p-2 btn btn-dark w-100 mt-2 mb-2 text-start" @click="view.tasks = !view.tasks">
        <span class="p-0 m-0"><font-awesome-icon class="icon float me-2" icon="fa-angles-right" />Tasks</span>
    </div>
    <div class="tasksList mb-3" :class="{ 'hidden': !view.tasks }">
        Tasks
    </div>

    <!-- Time Project Modal -->
    <TimeProjectModal :modal="modal" :timeProjectModalOperation="timeProjectModalOperation"
        :timeProject="selectedTimeProject" />
</template>

<script>
import { useStore } from "vuex";
import store from "@/store";
import TimeProjectsList from './Tables/TimeProjectsList.vue';
import TimeProjectModal from '../Modals/TimeProjectModal.vue';
export default {
    setup: () => { },
    data() {
        return {
            store: useStore(),
            user: store.getters.getCurrentUser,
            dropdownData: {
                projectFilterOptions: ['Active Projects', 'Budgeted Projects', 'Archived Projects'],
                filterByClient: ['Filter By Client'],
            },
            modal: { modalTitle: '', buttonProcessName: '', message: null, mode: '', data: null },
            selectedTimeProject: null,
            view: {
                projects: false,
                clients: false,
                tasks: false
            }
        }
    },
    methods: {
        setSelect: function (key, selection) {
            if (key == 'maritalStatus')
                // this.staff.marital_status = selection;
                return
        },
        timeProjectModalOperation: function (mode, timeProject) {

        },
        openCreateModal: function () {
            if (this.user.role == 'admin' || this.user.role == 'hr') {
                this.selectedTimeProject = {};
                this.modal = { modalTitle: 'Add Time Project', buttonProcessName: 'Save', message: null, mode: 'add' };
                $('#timeProjectModal').modal("show");
            }
        }
    },
    components: {
        TimeProjectsList,
        TimeProjectModal
    }
}
</script>