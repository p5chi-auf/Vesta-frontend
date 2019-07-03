import API from "./api";
export const login = function(username, password) {
  return API.post("/user/login", {
    username,
    password
  });
};

export const register = params => API.post("/user/registration", params);
export const getUserList = params => API.get("/user", { params });
