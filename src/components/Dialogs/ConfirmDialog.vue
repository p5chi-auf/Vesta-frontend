<template>
  <v-dialog :value="true" max-width="290">
    <v-card>
      <v-card-title class="headline">
        Are you sure you want to delete this user?</v-card-title
      >
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="red darken-1" dark text @click="$emit('cancel', false)">
          No
        </v-btn>
        <v-btn color="green darken-1" dark text @click="$emit('ok')">
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
