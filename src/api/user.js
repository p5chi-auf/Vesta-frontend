import API from "./api";
export const login = function(username, password) {
  return API.post("/user/login", {
    username,
    password
  });
};
