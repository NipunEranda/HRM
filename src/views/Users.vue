<template>
  <div>
    <!-- Options -->
    <div class="row m-0 pb-3">
      <div
        class="col col-10 p-0 m-0"
        :class="{ 'col-10': user.role == 'user' }"
      >
        <input
          class="form-control form-control-sm"
          type="text"
          name="search"
          id="search"
          v-model="searchUser"
          placeholder=" &#x1F50E; search..."
        />
      </div>
      <div class="col p-0 m-0 ps-2 col-2">
        <div class="row p-0 m-0">
          <div class="col p-0 m-0 ps-2 col-12">
            <div
              class="btn btn-sm float-end w-100"
              @click="loadUsers"
              :class="{
                'btn-secondary': user.theme == 'dark-theme',
                'btn-dark': user.theme == 'light-theme',
              }"
            >
              <span class="d-none d-lg-block">Refresh</span>
              <span class="d-block d-lg-none text-center"
                ><font-awesome-icon icon="fa-refresh"
              /></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Users View -->
    <UsersList
      :filteredUsers="filteredUsers"
      :openEditModal="openEditModal"
      :openActionModal="openActionModal"
      :currentUser="user"
    />

    <!-- Action Modal -->
    <ActionModal :modal="modal" :action="removeUser" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import store from "@/store";
import ActionModal from "@/components/Modals/Common/ActionModal.vue";
import UsersList from "@/components/Views/Tables/UsersList.vue";
import utils from "@/utils";
export default {
  setup: () => {},
  data() {
    return {
      store: useStore(),
      user: store.getters.getCurrentUser,
      users: [],
      filteredUsers: [],
      searchUser: "",
      modal: {
        modalTitle: "",
        buttonProcessName: "",
        message: null,
        mode: "",
        data: null,
      },
      selectedUser: {},
    };
  },
  watch: {
    searchUser: function () {
      if (this.searchUser.trim() != "") {
        this.filteredUsers = this.users.filter((user) =>
          user.name.toLowerCase().includes(this.searchUser.toLowerCase())
        );
      } else this.filteredUsers = this.users;
    },
  },
  methods: {
    async loadUsers() {
      $(".container-loader").removeClass("hidden").addClass("show");
      this.users = (await store.dispatch("loadUsers")).data;
      this.filteredUsers = $.extend(true, [], this.users);
      $(".container-loader").removeClass("show").addClass("hidden");
    },
    openEditModal() {},
    openActionModal(user) {
      if (this.user.role == 'admin') {
        this.modal.modalTitle = "Remove User";
        this.modal = { modalTitle: 'Remove User', buttonProcessName: 'Remove', message: `Do you want to remove ${user.name} from the system.`, mode: 'delete', data: user };
        $('#actionModal').modal("show");
      }
    },
    removeUser: function (data) {
      //Remove User
      $(".container-loader").removeClass("hidden").addClass("show");
      store.dispatch("deleteUser", data).then((result) => {
        this.users = result.data;
        this.$router.go(0);
      });
      $(".container-loader").removeClass("show").addClass("hidden");
    },
  },
  mounted: async function () {
    await this.loadUsers();
  },
  components: {
    UsersList,
    ActionModal
  },
};
</script>
