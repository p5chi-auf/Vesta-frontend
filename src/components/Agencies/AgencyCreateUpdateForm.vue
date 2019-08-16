<template>
  <v-layout justify-center>
    <v-btn icon @click.stop="dialog = true"> <v-icon>add</v-icon> </v-btn>

    <v-dialog v-model="dialog" max-width="600" persistent border="1px">
      <v-toolbar color="indigo lighten-5" class="elevation-5">
        <v-toolbar-title font-weight-black>Agency</v-toolbar-title>
      </v-toolbar>
      <v-card>
        <v-card-title class="headline">Add or Edit Agency</v-card-title>
        <v-container grid-list-md>
          <v-layout justify-center>
            <v-flex xs12 sm6 md4>
              <v-card style="border-radius:20px" color="indigo lighten-4">
                <v-card-title>
                  <v-text-field
                    v-model="company.name"
                    label="Agency Name"
                  ></v-text-field>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-card style="border-radius:20px" color="indigo lighten-4">
                <v-card-title>
                  <v-text-field
                    v-model="floors.name"
                    label="The name of the floor"
                  ></v-text-field>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-card style="border-radius:20px; " color="indigo lighten-4">
                <v-card-title>
                  <v-btn icon><v-icon>add</v-icon></v-btn>
                  Add floor
                </v-card-title>
                <v-card-title>Floors nr : </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn text color="blue darken-1" @click="onCreate">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import { addNewCompany } from "@/api/company";
import { addNewFloor } from "@/api/company";

export default {
  data() {
    return {
      dialog: false,
      company: {
        name: ""
      },
      floors: {
        name: "",
        number: ""
      }
    };
  },
  created() {
    this.fetchCompanies();
    this.fetchFloors();
    this.onCreate();
  },
  methods: {
    async fetchCompanies() {
      try {
        const { data } = await addNewCompany();
        this.items = data;
      } catch (error) {
        this.error = error;
      }
    },
    async fetchFloors() {
      try {
        const { data } = await addNewFloor();
        this.items = data;
      } catch (error) {
        this.error = error;
      }
    },
    async onCreate() {
      console.log("test");
      try {
        await addNewCompany({
          name: this.company.name
          // number: this.floors.number
        });
      } catch (error) {
        this.error = error;
      }
      await addNewFloor({
        name: this.floors.name
      });
    }
  }
};
</script>
