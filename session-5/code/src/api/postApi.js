import axiosClient from "./axiosClient";

export const getPosts = () => {
  return axiosClient.get("/posts");
};

export const getPostsById = (id) => {
  return axiosClient.get(`/posts/${id}`);
};
