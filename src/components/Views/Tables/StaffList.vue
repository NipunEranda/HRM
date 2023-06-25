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
                        <th scope="col">Department</th>
                        <th scope="col" class="table-row-delete-col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="pointer" v-for="employee in filteredStaff">
                        <td v-text="employee.personal.info.fullName" @click="openEditModal(employee)"></td>
                        <td v-text="employee.personal.info.email" @click="openEditModal(employee)"></td>
                        <td v-text="employee.contact.address.country" @click="openEditModal(employee)"></td>
                        <td v-text="((employee.contact.address.city == '') ? '' : (employee.contact.address.city + ', ')) + ((employee.contact.address.country == '') ? '' : employee.contact.address.country)"
                            @click="openEditModal(employee)">
                        </td>
                        <td v-text="employee.work.organization.company.department" @click="openEditModal(employee)"></td>
                        <td class="table-row-delete-col"><font-awesome-icon icon="fa-trash" /></td>
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
    },
}
</script>