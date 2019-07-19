import List from "@/components/User/List";
import Layout from "@/components/User/Layout";
import Preferences from "@/components/User/Preferences";
import Rightaccess from "@/components/User/Rightaccess";

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
  },
  {
    path: "access",
    name: "access",
    component: Rightaccess
  },
  {
    path: "preferences",
    name: "preferences",
    component: Preferences
  }
];
