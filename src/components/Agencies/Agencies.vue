<template>
  <div>
    <v-toolbar color="indigo lighten-5">
      <v-toolbar-title v-if="selected.length === 0">Agencies</v-toolbar-title>
      <v-toolbar-title v-if="selected.length > 0"
        >Agencies selected: {{ selected.length }}</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <div v-if="selected.length > 0">
        <v-btn title="Delete" icon @click="deleteAgency">
          <v-icon>delete</v-icon>
        </v-btn>

        <!--        <v-btn-->
        <!--          v-if="selected.length === 1"-->
        <!--          title="Edit"-->
        <!--          icon-->
        <!--          @click="dialog = true"-->
        <!--        >-->
        <!--          <v-icon>edit</v-icon>-->
        <!--        </v-btn>-->
      </div>
      <div>
        <AgencyCreateUpdateForm />
      </div>
    </v-toolbar>

    <v-data-table
      v-model="selected"
      :loading="loading"
      :headers="headers"
      :items="list"
      show-select
      class="elevation-1"
    />
  </div>
</template>
<script>
import { DeleteCompany } from "@/api/company";

import { mapGetters } from "vuex";
import AgencyCreateUpdateForm from "./AgencyCreateUpdateForm";

export default {
  components: { AgencyCreateUpdateForm },
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
  computed: {
    ...mapGetters({
      companyList: "company/getCompanyList"
    }),
    list() {
      if (this.loading) return [];
      return this.companyList.map(company => ({
        id: company.id,
        name: company.name,
        floors: company.floors.map(floor => floor.name).join(),
        floorNumbers: company.floors.length
      }));
    }
    // getNumberOfFloors: item => 1
  },
  created() {
    this.fetchCompanies();
  },
  methods: {
    async fetchCompanies() {
      this.loading = true;
      await this.$store.dispatch("company/fetchCompanies");
      this.loading = false;
    },
    async deleteAgency() {
      try {
        for (let i in this.selected) {
          await DeleteCompany(this.selected[i].id);
          delete this.selected[i];
          this.$set(this, "selected", []);
          this.fetchCompanies();
        }
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>
