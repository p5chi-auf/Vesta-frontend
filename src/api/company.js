import API from "./api";

export const GetCompany = () => API.get(`/company`);
export const addNewCompany = data => API.post("/company", data);
export const addNewFloor = () => API.post("/floor");
export const DeleteCompany = id => API.delete(`/company/${id}`);
