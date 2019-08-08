<template>
  <div />
</template>

<script>
import { fabric } from "fabric";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      canvasEl: null
    };
  },
  computed: mapGetters({
    elements: "floor/getFloorObjects"
  }),
  async mounted() {
    await this.$store.dispatch("floor/fetchFloorObjects");
    const floorView = document.createElement("canvas");
    floorView.id = "floor_view";
    this.$el.append(floorView);
    this.canvasEl = new fabric.Canvas("floor_view");
    this.canvasEl.setHeight(this.$parent.$el.offsetHeight);
    this.canvasEl.setWidth(this.$parent.$el.offsetWidth);
    this.elements.forEach(element => {
      fabric.Image.fromURL(element.image, oImg => {
        oImg.scale(element.scale);
        oImg.rotate(element.rotation);
        if (!element.editable) oImg.set("selectable", false);
        oImg.set("left", element.position[0]);
        oImg.set("top", element.position[1]);
        // oImg.set("uniScaleTransform", false);

        oImg.on("modified", el =>
          console.log(
            JSON.stringify({
              position: [el.target.left, el.target.top],
              scale: el.target.scaleX,
              rotation: el.target.angle,
              image: element.image,
              editable: true
            })
          )
        );

        this.canvasEl.add(oImg);
      });
    });
  }
};
</script>
<style></style>
