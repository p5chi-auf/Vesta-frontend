import FloorView from "@/components/Floor/FloorView";

export default [
  {
    path: "floor/:floorId",
    props: true,
    params: ["floorId"],
    name: "floor-view",
    component: FloorView
  }
];
