import axiosClient from "./axiosClient";

export const getUsers = () => {
  return axiosClient.get("/users");
};

export const getUserId = (id) => {
  return axiosClient.get(`/users/${id}`);
};

export const addUser = (data) => {
  return axiosClient.post("/users", data);
};
