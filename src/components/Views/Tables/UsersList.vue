<template>
  <div class="row m-0 userList">
    <div class="p-0">
      <table class="table table-hover table-bordered table-sm mb-0" :class="{
        'table-dark': currentUser.theme == 'dark-theme',
        'table-light': currentUser.theme == 'light-theme',
      }">
        <thead class="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col" class="table-row-roles-col" v-if="currentUser.role == 'admin'">
              Role
            </th>
            <th scope="col" class="table-row-delete-col" v-if="currentUser.role == 'admin'"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="pointer" v-for="(user, u) in filteredUsers" :key="u">
            <td v-text="user.name" @click="openEditModal(user)"></td>
            <td v-text="user.email" @click="openEditModal(user)"></td>
            <!-- <td v-text="user.role"></td> -->
            <td>
              <Custom-Select :options="roleOptions" :selected="user.role ? roleOptions.indexOf(user.role.toLowerCase()) : 0
                " @output="(output) => setSelect('maritalStatus', output, u)"
                @manual="(manual) => manual ? this.manual = true : this.manual = false" :id="u" :search="false"></Custom-Select>
            </td>
            <td class="table-row-delete-col" v-if="currentUser.role == 'admin'">
              <font-awesome-icon icon="fa-trash" @click="openActionModal(user)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  setup: () => { },
  data() {
    return {
      roleOptions: ["default", "admin", "hr", "user"],
      manual: false,
    };
  },
  props: {
    currentUser: Object,
    filteredUsers: Array,
    openEditModal: { type: Function },
    openActionModal: { type: Function },
  },
  methods: {
    setSelect: async function (key, selection, userId) {
      if (key == "role") this.user.role = selection;

      if (this.manual) {
        await store.dispatch("updateUserRole", { id: this.filteredUsers[userId]._id, role: this.roleOptions[selection] });
        this.$router.go(0);
      }
    },
  }
};
</script>

<style>
.userList {
  height: 70vh !important;
  overflow: auto;
}
</style>
