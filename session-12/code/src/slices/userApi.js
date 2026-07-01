import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    getPostById: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        method: "GET",
        url: "users",
      }),
    }),
  }),
});

console.log(userApi);

export const { useGetAllPostsQuery, useGetPostByIdQuery, useGetAllUsersQuery } =
  userApi;

export default userApi;
