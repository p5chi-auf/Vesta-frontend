import API from "./api";

export const login = function(email, password) {
  return API.post("/user/login", {
    param: {
      email: email,
      password: password
    }
  });
};

export const register = params => API.post("/user/registration", params);
