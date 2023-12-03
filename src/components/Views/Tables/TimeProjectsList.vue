<template>
    <div class="row p-0 m-0 timeProjectsList">
        <div class="p-0">
            <table class="table table-hover table-bordered table-sm mb-0" :class="{
                'table-dark': currentUser.theme == 'dark-theme',
                'table-light': currentUser.theme == 'light-theme',
            }">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Budget</th>
                        <th scope="col">Spent</th>
                        <th scope="col">Remaining</th>
                    </tr>
                </thead>
            </table>
            <tbody>

            </tbody>
        </div>
    </div>
</template>

<script>
import store from "@/store";
export default {
    setup: () => { },
    data() {
        return {};
    },
    props: {
        currentUser: Object,
        filteredTimeProjects: Array,
        openEditModal: { type: Function },
        openActionModal: { type: Function },
    },
    methods: {
    }
};
</script>

<style>
.userList {
    height: 70vh !important;
    overflow: auto;
}
</style>
