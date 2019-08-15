import API from "./api";
export const getFloorObjects = () => API.get(`/subject`);
export const editObject = (elementId, data) =>
  API.put(`/subject/${elementId}`, data);
