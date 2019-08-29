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
      <v-btn
        fab
        dark
        small
        color="green"
        @click="addSubject('/img/svg/user.svg')"
      >
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
        @click="addSubject('/img/svg/table.svg', 0.5)"
      >
        <v-icon>check_box_outline_blank</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
        @click="addSubject('/img/svg/pc.svg', 0.27)"
      >
        <v-icon>desktop_windows</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>
<script>
import { addObject } from "@/api/floor";
export default {
  props: {
    floorId: {
      required: true,
      type: [Number, String]
    }
  },
  data() {
    return {
      fab: false
    };
  },
  methods: {
    async addSubject(img, size) {
      await addObject({
        additional: {},
        editable: true,
        floorId: this.floorId,
        image: img,
        position: [0, 0],
        rotation: 0,
        scale: size
      });
      this.$emit("add");
    }
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
