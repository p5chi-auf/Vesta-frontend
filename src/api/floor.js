import API from "./api";
export const getFloorObjects = () => API.get(`/subject`);
export const editObject = (elementId, data) =>
  API.put(`/subject/${elementId}`, data);
export const deleteObject = elementId => API.delete(`/subject/${elementId}`);
export const addObject = data => API.post(`/subject/`, data);
export const getFloors = () => API.get(`/floor`);
