<template>
  <v-row no-gutters>
    <v-col md="10">
      <div id="floor_canvas_view" />
    </v-col>
    <v-col md="2">
      <FloorItemView />
    </v-col>
  </v-row>
</template>

<script>
import { fabric } from "fabric";
import { mapGetters } from "vuex";
import { editObject } from "@/api/floor";
import FloorItemView from "./FloorItemView";
export default {
  components: {
    FloorItemView
  },
  props: {
    floorId: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      canvasEl: null
    };
  },
  computed: mapGetters({
    elements: "floor/getFloorObjects"
  }),
  async mounted() {
    await this.$store.dispatch(
      "floor/fetchFloorObjects",
      parseInt(this.floorId)
    );
    const floorView = document.createElement("canvas");
    const el = document.getElementById("floor_canvas_view");

    floorView.id = "floor_view";
    el.append(floorView);
    this.canvasEl = new fabric.Canvas("floor_view");
    this.canvasEl.setHeight(700);
    this.canvasEl.setWidth(1100);
    this.canvasEl.selection = false;

    // this.canvasEl.selectionFullyContained = true;
    this.canvasEl.transparentCorners = false;
    this.elements.forEach(element => {
      fabric.Image.fromURL(element.image, oImg => {
        oImg.scale(element.scale);
        oImg.rotate(element.rotation);
        if (!element.editable) oImg.set("selectable", false);
        oImg.set("left", element.position[0]);
        oImg.set("left", element.position[0]);
        oImg.set("top", element.position[1]);
        oImg.set("uniScaleTransform", false);
        oImg.on("modified", el => {
          editObject(element.id, {
            position: [el.target.left, el.target.top],
            scale: el.target.scaleX,
            rotation: el.target.angle,
            image: element.image,
            editable: true
          });
        });
        oImg.editable = true;
        this.canvasEl.add(oImg);
      });
    });
  }
};
</script>
