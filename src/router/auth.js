import Login from "@/components/Layouts/Auth/Login";
import ForgotPassword from "@/components/Layouts/Auth/ForgotPassword";
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
  }
];
