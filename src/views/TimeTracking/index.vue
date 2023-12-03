<template>
    <div class="row m-0 p-0">
        <div class="navs row p-0 m-0">
            <ul class="nav nav-tabs border-bottom-0 p-0" id="myTab" role="tablist">
                <li class="nav-item" role="presentation" style="width: 25%;">
                    <button class="text-light nav-link active w-100 rounded-0 btn-sm" id="time-tab" data-bs-toggle="tab"
                        data-bs-target="#time" type="button" role="tab" aria-controls="time" aria-selected="true">
                        Time
                    </button>
                </li>
                <li class="nav-item" role="presentation" style="width: 25%;">
                    <button class="text-light nav-link w-100 rounded-0 btn-sm" id="expenses-tab" data-bs-toggle="tab"
                        data-bs-target="#expenses" type="button" role="tab" aria-controls="expenses" aria-selected="false">
                        Expenses
                    </button>
                </li>
                <li class="nav-item" role="presentation" style="width: 25%;">
                    <button class="text-light nav-link w-100 rounded-0 btn-sm" id="projects-tab" data-bs-toggle="tab"
                        data-bs-target="#projects" type="button" role="tab" aria-controls="projects" aria-selected="false">
                        Projects
                    </button>
                </li>
                <li class="nav-item" role="presentation" style="width: 25%;">
                    <button class="text-light nav-link w-100 rounded-0 btn-sm" id="reports-tab" data-bs-toggle="tab"
                        data-bs-target="#reports" type="button" role="tab" aria-controls="reports" aria-selected="false">
                        Reports
                    </button>
                </li>
            </ul>
        </div>
        <div class="row m-0 p-0">
            <div class="tab-content p-0 m-0" id="myTabContent">
                <div class="tab-pane fade show active p-0 m-0" id="time" role="tabpanel" aria-labelledby="time-tab">
                    <RecordTime />
                </div>
                <div class="tab-pane fade p-0 m-0" id="expenses" role="tabpanel" aria-labelledby="expenses-tab">
                    <TimeExpenses />
                </div>
                <div class="tab-pane fade p-0 m-0" id="projects" role="tabpanel" aria-labelledby="projects-tab">
                    <TimeProjects />
                </div>
                <div class="tab-pane fade p-0 m-0" id="reports" role="tabpanel" aria-labelledby="reports-tab">
                    <TimeReports />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import store from "@/store";
import TimeProjects from "@/components/Views/TimeProjects.vue";
import TimeExpenses from "@/components/Views/TimeExpenses.vue";
import TimeReports from "@/components/Views/TimeReports.vue";
import RecordTime from "@/components/Views/RecordTime.vue";
export default {
    setup: () => { },
    data() {
        return {

        }
    },
    components: {
        RecordTime,
        TimeExpenses,
        TimeProjects,
        TimeReports
    }
}
</script>