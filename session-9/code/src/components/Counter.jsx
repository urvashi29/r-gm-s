import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../action/actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const inc = () => {
    // dispatching the action to reducer
    dispatch(incrementCount());
  };

  const dec = () => {
    dispatch(decrementCount());
  };

  return (
    <>
      <button onClick={dec}>-</button>
      Count: {count}
      <button onClick={inc}>+</button>
    </>
  );
};

export default Counter;
