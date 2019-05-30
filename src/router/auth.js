import Login from "@/components/Layouts/Auth/Login";
import Register from "@/components/Layouts/Auth/Register";
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
  }
];
