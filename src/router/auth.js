import Login from "@/components/Layouts/Auth/Login";
import ForgotPassword from "@/components/Layouts/Auth/ForgotPassword";
import Register from "@/components/Layouts/Auth/Register";
export default [
  {
    path: "login",
    name: "login",
    component: Login
  },
  {
    path: "forgotpassword",
    name: "forgotpassword",
    component: ForgotPassword
  },
  { path: "register", name: "register", component: Register }
];
