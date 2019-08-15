<template>
  <div class="ml-auto">
    <v-speed-dial
      v-model="fab"
      right
      bottom
      transition="slide-y-reverse-transition"
    >
      <template slot="activator">
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">close</v-icon>
          <v-icon v-else>add</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="green">
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo">
        <v-icon>check_box_outline_blank</v-icon>
      </v-btn>
      <v-btn fab dark small color="red">
        <v-icon>desktop_windows</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>
<script>
// import {addObject} from "@/api/"
export default {
  data() {
    return {
      fab: false
    };
  },
  methods: {
    addSubject() {}
  }
};
</script>
<style>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>
