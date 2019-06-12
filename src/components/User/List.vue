<template>
  <div>
    <v-layout row justify-space-between>
      <v-flex xs12>
        <div v-if="selected.length > 0">
          <v-btn target color="success">Add</v-btn>
          <v-btn color="error">Delete</v-btn>
          <v-btn v-if="selected.length === 1" color="primary">Change</v-btn>
        </div>
      </v-flex>
    </v-layout>

    <v-data-table
      v-model="selected"
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
        <td class="text-xs-right">{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.firstname }}</td>
        <td class="text-xs-right">{{ props.item.lastname }}</td>
        <td class="text-xs-right">{{ props.item.username }}</td>
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.password }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">
            edit
          </v-icon>
          <v-icon small @click="deleteItem(props.item)">
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data: () => ({
    selected: [],
    items: [
      {
        id: 1,
        firstname: "Adrian",
        lastname: "Rotari",
        username: "arotari",
        email: "arotari@gmail.com",
        password: "adrian11"
      },
      {
        id: 2,
        firstname: "Ion",
        lastname: "Gherman",
        username: "iongherman",
        email: "iongherman@gmail.com",
        password: "13456"
      },
      {
        id: 3,
        firstname: "Elena",
        lastname: "Ambroci",
        username: "eambroci",
        email: "ambroci@mail.ru",
        password: "elena34"
      },
      {
        id: 4,
        firstname: "Carolina",
        lastname: "Ciocanu",
        username: "cciocanu",
        email: "carolina29@gmail.com",
        password: "Car123785"
      },
      {
        id: 5,
        firstname: "Eugenia",
        lastname: "Bejenari",
        username: "ebejenari",
        email: "bejerai34@gmai.com",
        password: "234567"
      },
      {
        id: 6,
        firstname: "Ion",
        lastname: "Anton",
        username: "ianton",
        email: "anton65@mail.ru",
        password: "25678"
      },
      {
        id: 7,
        firstname: "Mihaela",
        lastname: "Guidea",
        username: "mguidea",
        email: "mihaela@mail.ru",
        password: "904757"
      },
      {
        id: 8,
        firstname: "Mihai",
        lastname: "Albu",
        username: "malbu",
        email: "albumihai@mail.ru",
        password: "mihaita56"
      },
      {
        id: 9,
        firstname: "Vladimir",
        lastname: "Ceban",
        username: "vceban",
        email: "vladimir.ceban@gmail.com",
        password: "vadic45"
      },
      {
        id: 10,
        firstname: "Stefan",
        lastname: "Ciudac",
        username: "sciudac",
        email: "ciudac@mail.ru",
        password: "8456858"
      }
    ],
    headers: [
      { text: "ID", align: "right", sortable: true, value: "name" },
      { text: "First Name", align: "right", value: "firstname" },
      { text: "Last Name", align: "right", value: "lastname" },
      { text: "User Name", align: "right", value: "username" },
      { text: "E-mail", align: "right", value: "email" },
      { text: "Password", align: "right", value: "password" },
      { text: "Actions", align: "center", value: "name", sortable: false }
    ]
  }),
  watch: {
    selected() {
      console.log(this.selected);
    }
  }
};
</script>
