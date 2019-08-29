<template>
  <v-layout justify-center>
    <v-btn icon @click.stop="dialog = true"> <v-icon>add</v-icon> </v-btn>

    <v-dialog v-model="dialog" max-width="350">
      <v-card :loading="isLoading">
        <v-card-title>
          <span class="headline">Add Agency</span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="form.name"
                    label="Name"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  Floors
                </v-col>
              </v-row>
              <v-row v-for="(floor, i) in form.floors" :key="i">
                <v-flex :sm="11">
                  <v-text-field
                    v-model="form.floors[i]"
                    label="Floor Name"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex :sm="1">
                  <v-btn
                    v-if="i === form.floors.length - 1"
                    id="add"
                    class="action-btn"
                    icon
                    @click="addFloor"
                  >
                    <v-icon>add</v-icon>
                  </v-btn>
                  <v-btn
                    v-else
                    id="delete"
                    class="action-btn"
                    icon
                    @click="deleteFloor"
                  >
                    <v-icon>delete</v-icon>
                  </v-btn>
                </v-flex>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn text color="blue darken-1" @click="addNewAgency">Save</v-btn>
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
      isLoading: false,
      dialog: false,
      added: true,
      form: {
        floors: [""],
        name: ""
      }
    };
  },
  methods: {
    addFloor() {
      this.form.floors.push("");
    },

    deleteFloor() {
      this.form.floors.splice(this.form.floors, 1);
    },
    async addNewAgency() {
      this.isLoading = true;
      try {
        await addNewCompany({
          name: this.form.name,
          floors: this.form.floors.map(floor => ({ name: floor }))
        });
        await this.$store.dispatch("company/fetchCompanies");

        this.dialog = false;
      } catch (error) {
        this.error = error;
      }
      this.isLoading = false;
    },
    async addNewFloor() {
      try {
        addNewFloor({
          name: this.form.floors
        });
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>
<style>
.action-btn {
  position: relative;
  top: 1rem;
}
</style>
