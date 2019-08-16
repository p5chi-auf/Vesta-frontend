import API from "./api";

export const GetCompany = () => API.get(`/company`);
export const addNewCompany = () => API.post("/company");
export const addNewFloor = () => API.post("/floor");
