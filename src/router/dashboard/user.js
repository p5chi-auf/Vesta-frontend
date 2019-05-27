import List from "@/components/User/List";
import Layout from "@/components/User/Layout";

export default [
  {
    path: "user",
    name: "user",
    component: Layout,
    redirect: { name: "user-list" },
    children: [
      {
        path: "list",
        name: "user-list",
        component: List
      },
      {
        path: "add",
        name: "user-add",
        component: List
      }
    ]
  }
];
