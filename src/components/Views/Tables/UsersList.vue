<template>
    <div class="row m-0">
        <div class="table-responsive p-0">
            <table class="table table-hover table-bordered table-sm table-responsive mb-0"
                :class="{ 'table-dark': currentUser.theme == 'dark-theme', 'table-light': currentUser.theme == 'light-theme' }">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col" class="table-row-delete-col" v-if="currentUser.role == 'admin'"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="pointer" v-for="(user,u) in filteredUsers" :key="u">
                        <td v-text="user.name" @click="openEditModal(user)"></td>
                        <td class="table-row-delete-col" v-if="currentUser.role == 'admin'"><font-awesome-icon icon="fa-trash" @click="openActionModal(user)" /></td>
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
        currentUser: Object,
        filteredUsers: Array,
        openEditModal: { type: Function },
        openActionModal: { type: Function },
    },
}
</script>