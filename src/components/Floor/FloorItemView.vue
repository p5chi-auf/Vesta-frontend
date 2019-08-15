<template>
  <v-container v-if="value.id" fluid>
    <v-card>
      <v-card-title
        ><h4>
          Object
          <v-btn icon @click="remove">
            <v-icon>close</v-icon>
          </v-btn>
        </h4></v-card-title
      >
      <v-divider></v-divider>
      <v-list dense :loading="isLoading">
        <v-list-item>
          <v-list-item-content>id:</v-list-item-content>
          <v-list-item-content class="align-end">{{
            value.id
          }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
<script>
import { deleteObject } from "@/api/floor";
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    async remove() {
      this.isLoading = true;
      await deleteObject(this.value.id);
      this.isLoading = false;
      this.$emit("remove");
    }
  }
};
</script>
