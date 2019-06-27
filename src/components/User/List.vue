<template>
  <div>
    <v-toolbar color="indigo lighten-5">
      <v-toolbar-title v-if="selected.length === 0">Users</v-toolbar-title>
      <v-toolbar-title v-if="selected.length > 0"
        >Users selected: {{ selected.length }}</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <div v-if="selected.length > 0">
        <v-btn title="Delete" icon> <v-icon>delete</v-icon> </v-btn>
        <v-btn v-if="selected.length === 1" title="Edit" icon>
          <v-icon>edit</v-icon>
        </v-btn>
      </div>
      <v-btn title="Add" icon> <v-icon>add</v-icon> </v-btn>
    </v-toolbar>

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
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.firstname }}</td>
        <td>{{ props.item.lastname }}</td>
        <td>{{ props.item.username }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.password }}</td>
        <td class="justify-center layout px-0"></td>
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
      { text: "ID", align: "left", sortable: true, value: "name" },
      { text: "First Name", value: "firstname" },
      { text: "Last Name", value: "lastname" },
      { text: "User Name", value: "username" },
      { text: "E-mail", value: "email" },
      { text: "Password", value: "password" }
    ]
  })
};
</script>
