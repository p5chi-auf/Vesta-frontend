<template>
  <div>
    <UserCreateUpdateForm v-model="dialog" @hide="dialog = false" />
    <v-toolbar color="indigo lighten-5">
      <v-toolbar-title v-if="selected.length === 0">Users</v-toolbar-title>
      <v-toolbar-title v-if="selected.length > 0"
        >Users selected: {{ selected.length }}</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <div v-if="selected.length > 0">
        <v-btn title="Delete" icon @click="isConfirmRemoveShowed = true">
          <v-icon>delete</v-icon>
        </v-btn>
        <v-btn
          v-if="selected.length === 1"
          title="Edit"
          icon
          @click="dialog = true"
        >
          <v-icon>edit</v-icon>
        </v-btn>
      </div>
      <div>
        <v-btn title="Add" icon @click="dialog = true">
          <v-icon>add</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
    <v-data-table
      v-model="selected"
      :loading="loading"
      :headers="headers"
      :items="getUsersList"
      class="elevation-1"
      :footer-props="{
        rowsPerPageItems: 100
      }"
    >
      <template v-slot:items="props">
        <td>
          <v-checkbox
            v-model="props.selected"
            primary
            hide-details
          ></v-checkbox>
        </td>
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.firstName }}</td>
        <td>{{ props.item.lastName }}</td>
        <td>{{ props.item.username }}</td>
        <td>{{ props.item.email }}</td>
        <td class="justify-center layout px-0"></td>
      </template>
    </v-data-table>
    <ConfirmDialog v-if="isConfirmRemoveShowed" @ok="deleteItem" />
  </div>
</template>
<script>
import { deleteUser } from "@/api/user";
import ConfirmDialog from "@/components/Dialogs/ConfirmDialog";
import { mapActions, mapGetters } from "vuex";
import UserCreateUpdateForm from "./UserCreateUpdateForm";
export default {
  components: { UserCreateUpdateForm, ConfirmDialog },
  data: () => ({
    selected: [],
    loading: false,
    isConfirmRemoveShowed: false,
    dialog: false,
    error: "",
    // TODO make the error variable
    headers: [
      { text: "ID", align: "left", sortable: true, value: "id" },
      { text: "First Name", value: "firstName" },
      { text: "Last Name", value: "lastName" },
      { text: "User Name", value: "username" },
      { text: "E-mail", value: "email" }
    ]
  }),
  computed: {
    ...mapGetters({
      getUsersList: "user/getUserList"
    })
  },
  created() {
    this.fetchUserList();
  },
  methods: {
    ...mapActions({
      fetchUserList: "user/fetchUsers"
    }),
    async deleteItem() {
      try {
        for (let i in this.selected) {
          await deleteUser(this.selected[i].id);
          delete this.selected[i];
          this.fetchUserList();
        }
      } catch (error) {
        this.error = error;
      }
      this.isConfirmRemoveShowed = false;
      this.$emit("cancel", false);
    }
  }
};
</script>
