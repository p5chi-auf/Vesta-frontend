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
        <v-btn title="Delete" icon @click="deleteItem">
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
      :items="items"
      select-all
      class="elevation-1"
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
  </div>
</template>
<script>
import { getUserList, deleteUser } from "@/api/user";
import UserCreateUpdateForm from "./UserCreateUpdateForm";
export default {
  components: { UserCreateUpdateForm },
  data: () => ({
    selected: [],
    loading: false,
    dialog: false,
    error: "",
    // TODO make the error variable
    items: [],
    headers: [
      { text: "ID", align: "left", sortable: true, value: "name" },
      { text: "First Name", value: "firstname" },
      { text: "Last Name", value: "lastname" },
      { text: "User Name", value: "username" },
      { text: "E-mail", value: "email" }
    ]
  }),
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      try {
        const { data } = await getUserList();
        this.items = data;
      } catch (error) {
        this.error = error;
      }
      this.loading = false;
    },
    async deleteItem() {
      try {
        for (let i in this.selected) {
          console.log(this.selected[i]);
          await deleteUser(this.selected[i].id);
          delete this.selected[i];
        }
        this.fetchUsers();
      } catch (error) {
        this.error = error;
      }
    }
  }
  // TODO on component is created  https://vuejs.org/v2/guide/instance.html
  // TODO setup the loading true
  // TODO make in @/api/user.js new function that will fetch the user list https://github.com/axios/axios
  // TODO try to call this api function  https://www.w3schools.com/js/js_errors.asp
  // TODO in case of success response put the list from backend to the variable this.items  https://vuejs.org/v2/cookbook/adding-instance-properties.html
  // TODO in case of wrong response show the put the error code in this.error
  // TODO setup the loading false
};
</script>
