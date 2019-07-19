<template>
  <div />
</template>

<script>
import { fabric } from "fabric";
export default {
  data() {
    return {
      canvasEl: null,
      ctx: null,
      elements: [
        // {
        //   position: [0, 0],
        //   scale: 1.4,
        //   image: "/img/svg/grid.png",
        //   editable: true,
        //   rotation: 0
        // },
        {
          position: [0, 0],
          scale: 1.4,
          image: "/img/svg/Plan.svg",
          editable: false,
          rotation: 0
        },
        // CHI-201
        //left up up 1
        {
          position: [362, 33],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: false
        },
        //left up up 2
        {
          position: [397, 33],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: false
        },
        //left up down 1
        {
          position: [362, 89],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: false
        },
        //left up down 2
        {
          position: [397, 89],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: false
        },
        //right up up 1
        {
          position: [484, 33],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: false
        },
        //right up up 2
        {
          position: [519, 33],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: false
        },
        //right up down 1
        {
          position: [484, 89],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: false
        },
        //right up down 2
        {
          position: [519, 89],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: false
        },
        //left center 1
        {
          position: [362, 177],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: false
        },
        //left center 2
        {
          position: [397, 177],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: false
        },
        //right center 1
        {
          position: [484, 177],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: false
        },
        //right center 2
        {
          position: [519, 177],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: false
        },
        //left down up 1
        {
          position: [362, 287],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //left down up 2
        {
          position: [397, 287],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //right down up 1
        {
          position: [519, 287],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //right down up 2
        {
          position: [484, 287],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //left down down 1
        {
          position: [362, 343],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //left down down 2
        {
          position: [397, 343],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //right down down 1
        {
          position: [519, 343],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //right down down 2
        {
          position: [484, 343],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //CHI-202
        //left up up 1
        {
          position: [651, 33],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //left up up 2
        {
          position: [686, 33],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //right up up 1
        {
          position: [762, 33],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //right up up 2
        {
          position: [797, 33],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },

        //left up down 1
        {
          position: [651, 89],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //left up down 2
        {
          position: [686, 89],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //right up down 1
        {
          position: [762, 89],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //right up down 2
        {
          position: [797, 89],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //center left 1
        {
          position: [651, 177],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //center left 2
        {
          position: [686, 177],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //center right 1
        {
          position: [762, 177],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //center right 2
        {
          position: [797, 177],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //right down up 1
        {
          position: [651, 287],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        //right down up 2
        {
          position: [686, 287],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        {
          position: [762, 287],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        {
          position: [797, 287],
          scale: 0.5,
          rotation: 0,
          image: "/img/svg/table.svg",
          editable: true
        },
        {
          position: [370, 52],
          scale: 0.2,
          rotation: 0,
          image: "/img/svg/pc.svg",
          editable: true
        },
        {
          position: [405, 52],
          scale: 0.2,
          rotation: 0,
          image: "/img/svg/pc.svg",
          editable: true
        },
        {
          position: [323, 38],
          scale: 0.05636896046852123,
          rotation: 0,
          image: "/img/svg/powerSocket.svg",
          editable: true
        },
        {
          position: [323, 98],
          scale: 0.05636896046852123,
          rotation: 0,
          image: "/img/svg/powerSocket.svg",
          editable: true
        },
        {
          position: [433, 40.00000000000003],
          scale: 0.030833333333333327,
          rotation: 0,
          image: "/img/svg/user.svg",
          editable: true
        },
        {
          position: [435, 100.00000000000003],
          scale: 0.030833333333333327,
          rotation: 0,
          image: "/img/svg/user.svg",
          editable: true
        }
      ]
    };
  },
  mounted() {
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
    // fabric.Image.fromURL("/img/svg/pc.svg", oImg => {
    // fabric.Image.fromURL("/img/svg/powerSocket.svg", oImg => {
    // fabric.Image.fromURL("/img/svg/table.svg", oImg => {
    // fabric.Image.fromURL("/img/svg/user.svg", oImg => {
    // fabric.Image.fromURL("/img/svg/Plan.svg", oImg => {
  }
};

// make background for floor with svg image
// change a pc svg image
// make a loop with key elements
// to determine the properties of each object ( position, scale, image, editable, rotation)
// change a table svg image
</script>
<style></style>
