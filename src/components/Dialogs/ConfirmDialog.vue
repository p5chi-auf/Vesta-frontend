<template>
  <v-dialog v-model="visible" max-width="290">
    <template v-slot:activator="{ on }"> </template>
    <v-card>
      <v-card-title class="headline">
        Are you sure you want to delete this user {{ hasManyUsers }}?
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" dark text @click="close()">
          No
        </v-btn>
        <v-btn color="green darken-1" dark text @click="$emit('ok')">
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    multiple: false,
    visible: false
  }),
  computed: {
    hasManyUsers() {
      return this.multiple ? "these users" : "";
    }
  },
  methods: {
    open(multiple) {
      this.multiple = multiple;
      this.visible = true;
    },
    close() {
      this.visible = false;
      this.multiple = false;
    }
  }
};
</script>
