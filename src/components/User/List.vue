<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :pagination.sync="pagination"
    select-all
    item-key="name"
    class="elevation-1"
  >
    <template v-slot:headers="props">
      <tr>
        <th>
          <v-checkbox
            :input-value="props.all"
            :indeterminate="props.indeterminate"
            primary
            hide-details
            @click.stop="toggleAll"
          ></v-checkbox>
        </th>
        <th
          v-for="header in props.headers"
          :key="header.text"
          :class="[
            'column sortable',
            pagination.descending ? 'desc' : 'asc',
            header.value === pagination.sortBy ? 'active' : ''
          ]"
          @click="changeSort(header.value)"
        >
          <v-icon small>arrow_upward</v-icon>
          {{ header.text }}
        </th>
      </tr>
    </template>
    <template v-slot:items="props">
      <tr :active="props.selected" @click="props.selected = !props.selected">
        <td>
          <v-checkbox
            :input-value="props.selected"
            primary
            hide-details
          ></v-checkbox>
        </td>

        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.firstname }}</td>
        <td class="text-xs-right">{{ props.item.lastname }}</td>
        <td class="text-xs-right">{{ props.item.username }}</td>
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.password }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    pagination: {
      sortBy: "name"
    },
    selected: [],
    headers: [
      {
        text: "ID",
        align: "left",
        value: "name"
      },
      { text: "First Name", value: "firstname" },
      { text: "Last Name", value: "lastname" },
      { text: "User Name", value: "username" },
      { text: "E-mail", value: "email" },
      { text: "Password", value: "password" }
    ],
    desserts: [
      {
        name: 1,
        firstname: "Adrian",
        lastname: "Rotari",
        username: "arotari",
        email: "arotari@gmail.com",
        password: "adrian11"
      },
      {
        name: 2,
        firstname: "Ion",
        lastname: "Gherman",
        username: "iongherman",
        email: "iongherman@gmail.com",
        password: "13456"
      },
      {
        name: 3,
        firstname: "Elena",
        lastname: "Ambroci",
        username: "eambroci",
        email: "ambroci@mail.ru",
        password: "elena34"
      },
      {
        name: 4,
        firstname: "Carolina",
        lastname: "Ciocanu",
        username: "cciocanu",
        email: "carolina29@gmail.com",
        password: "Car123785"
      },
      {
        name: 5,
        firstname: "Eugenia",
        lastname: "Bejenari",
        username: "ebejenari",
        email: "bejerai34@gmai.com",
        password: "234567"
      },
      {
        name: 6,
        firstname: "Ion",
        lastname: "Anton",
        username: "ianton",
        email: "anton65@mail.ru",
        password: "25678"
      },
      {
        name: 7,
        firstname: "Mihaela",
        lastname: "Guidea",
        username: "mguidea",
        email: "mihaela@mail.ru",
        password: "904757"
      },
      {
        name: 8,
        firstname: "Mihai",
        lastname: "Albu",
        username: "malbu",
        email: "albumihai@mail.ru",
        password: "mihaita56"
      },
      {
        name: 9,
        firstname: "Vladimir",
        lastname: "Ceban",
        username: "vceban",
        email: "vladimir.ceban@gmail.com",
        password: "vadic45"
      },
      {
        name: 10,
        firstname: "Stefan",
        lastname: "Ciudac",
        username: "sciudac",
        email: "ciudac@mail.ru",
        password: "8456858"
      }
    ]
  }),

  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.desserts.slice();
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    }
  }
};
</script>
