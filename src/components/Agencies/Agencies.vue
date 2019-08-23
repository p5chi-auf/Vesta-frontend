<template>
  <div>
    <v-toolbar color="indigo lighten-5">
      <v-toolbar-title v-if="selected.length === 0">Agencies</v-toolbar-title>
      <v-toolbar-title v-if="selected.length > 0"
        >Agencies selected: {{ selected.length }}</v-toolbar-title
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
      <div></div>
    </v-toolbar>

    <v-data-table
      v-model="selected"
      :loading="loading"
      :headers="headers"
      :items="items"
      show-select
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
        <td>{{ props.item.name }}</td>
        <td>{{ extractFloorNames(props.item) }}</td>
        <td>{{ getNumberOfFloors(props.item) }}</td>

        <td class="justify-center layout px-0"></td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { GetCompany } from "@/api/company";

// import AgencyCreateUpdateForm from "./AgencyCreateUpdateForm";

export default {
  // components: { AgencyCreateUpdateForm },
  data: () => ({
    selected: [],
    loading: false,
    dialog: false,
    error: "",
    items: [],
    headers: [
      { text: "ID", value: "id" },
      { text: "Name", value: "name" },
      { text: "Floors", value: "floors" },
      { text: "Number of floors", value: "floorNumbers" }
    ],
    props: {
      floors: name
    }
  }),
  created() {
    this.fetchCompanies();
    // this.fetchCompanies();
  },
  methods: {
    async fetchCompanies() {
      this.loading = true;
      try {
        const { data } = await GetCompany();
        this.items = data.map(agencies => ({
          ...agencies,
          floors: agencies.floors.map(floor => floor.name).join(", "),
          floorNumbers: agencies.floors.length
        }));
      } catch (error) {
        this.error = error;
      }
      this.loading = false;
    }
  }
};
</script>
