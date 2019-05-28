import Login from "@/components/Layouts/Auth/Login";
import Register from "@/components/Layouts/Auth/Register";
import Dashboard from "../components/Layouts/Dashboard";
export default [
  {
    path: "login",
    name: "login",
    component: Login
  },
  {
    path: "register",
    name: "register",
    component: Register
  },
  {
    path: "dashboard",
    name: "dashboard",
    component: Dashboard
  }
];
