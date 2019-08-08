import API from "./api";
export const login = function(username, password) {
  return API.post("/user/login", {
    username,
    password
  });
};

export const deleteUser = id => API.delete(`/user/${id}`);
export const editUser = (id, userData) => API.put(`/user/${id}`, userData);
export const register = params => API.post("/user/registration", params);
export const getUserList = params => API.get("/user", { params });
export const getCurrentUserInfo = () => API.get("/user/me");
export const getUserInfo = id => API.get(`/user/${id}`);
