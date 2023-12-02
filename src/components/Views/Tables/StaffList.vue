<template>
    <div class="row m-0">
        <div class="table-responsive p-0">
            <table class="table table-hover table-bordered table-sm table-responsive mb-0"
                :class="{ 'table-dark': user.theme == 'dark-theme', 'table-light': user.theme == 'light-theme' }">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Country</th>
                        <th scope="col">Location</th>
                        <th scope="col" class="table-row-delete-col" v-if="user.role == 'admin'"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="pointer" v-for="(employee,e) in filteredStaff" :key="e">
                        <td v-text="employee.full_name" @click="openEditModal(employee)"></td>
                        <td v-text="employee.email" @click="openEditModal(employee)"></td>
                        <td v-text="employee.country" @click="openEditModal(employee)"></td>
                        <td v-text="((!employee.city) ? '' : employee.city) + ((!employee.country) ? '' : ((employee.city ? (employee.city == '' ? '' : ', ') : '') + employee.country))"
                            @click="openEditModal(employee)">
                        </td>
                        <td class="table-row-delete-col" v-if="user.role == 'admin'"><font-awesome-icon icon="fa-trash" @click="openActionModal(employee)" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    setup: () => { },
    data() {
        return {}
    },
    props: {
        user: Object,
        filteredStaff: Array,
        openEditModal: { type: Function },
        openActionModal: { type: Function },
    },
}
</script>