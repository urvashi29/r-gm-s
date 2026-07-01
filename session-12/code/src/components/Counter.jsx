import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slices/counterSlice";
import { useGetAllUsersQuery, useGetPostByIdQuery } from "../slices/userApi";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const userData = useGetAllUsersQuery();
  const postData = useGetPostByIdQuery(1); // Fetching post with ID 1

  if (userData.isLoading || postData.isLoading) {
    return <p>Loading...</p>;
  }

  console.log(userData.data, postData.data);

  return (
    <>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment(1))}>+</button>
    </>
  );
};

export default Counter;
