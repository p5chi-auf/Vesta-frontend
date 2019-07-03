import axios from "axios";
const API = axios.create({
  baseURL: "/api"
});
import store from "@/store";
// Add a request interceptor
API.interceptors.request.use(function(config) {
  const token = store.getters["auth/getAccessToken"];
  if (token) config.headers["X-Token-Authentication"] = token;
  return config;
});

export default API;
