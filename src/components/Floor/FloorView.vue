<template>
  <v-row no-gutters>
    <v-col md="10">
      <div id="floor_canvas_view" />
    </v-col>
    <v-col md="2">
      <FloorItemView v-model="selected" @remove="onRemove" />
    </v-col>
    <FloorItemAddButton :floor-id="floorId" @add="onAdd" />
  </v-row>
</template>

<script>
import { fabric } from "fabric";
import { mapGetters } from "vuex";
import { editObject } from "@/api/floor";
import FloorItemView from "./FloorItemView";
import FloorItemAddButton from "./FloorItemAddButton";
export default {
  components: {
    FloorItemView,
    FloorItemAddButton
  },
  props: {
    floorId: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      selected: {},
      canvasEl: null
    };
  },
  computed: mapGetters({
    elements: "floor/getFloorObjects"
  }),
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await this.$store.dispatch(
        "floor/fetchFloorObjects",
        parseInt(this.floorId)
      );
      const floorView = document.createElement("canvas");
      const el = document.getElementById("floor_canvas_view");
      floorView.id = "floor_view";
      el.append(floorView);
      this.canvasEl = new fabric.Canvas("floor_view");
      this.canvasEl.on("selection:created", e => {
        if (e.target.type === "activeSelection") {
          this.canvasEl.discardActiveObject();
        } else {
          //do nothing
        }
      });

      this.canvasEl.on("selection:cleared", () => {
        this.selected = {};
      });

      this.canvasEl.setHeight(700);
      this.canvasEl.setWidth(1150);
      this.canvasEl.transparentCorners = false;
      this.elements.forEach(element => {
        fabric.Image.fromURL(element.image, oImg => {
          oImg.scale(element.scale);
          oImg.rotate(element.rotation);
          if (!element.editable) oImg.set("selectable", false);
          oImg.set("left", element.position[0]);
          oImg.set("left", element.position[0]);
          oImg.set("top", element.position[1]);
          oImg.hasControls = false;
          oImg.set("uniScaleTransform", false);
          oImg.on("selected", () => {
            this.selected = element;
          });
          oImg.on("modified", el => {
            this.$set(this, "selected", {
              id: element.id,
              position: [el.target.left, el.target.top],
              scale: el.target.scaleX,
              rotation: el.target.angle,
              image: element.image,
              editable: true
            });
            editObject(element.id, this.selected);
          });
          oImg.editable = true;
          this.canvasEl.add(oImg);
        });
      });
    },
    async onRemove() {
      this.canvasEl.dispose();
      this.init();
    },
    async onAdd() {
      this.canvasEl.dispose();
      this.init();
    }
  }
};
</script>
