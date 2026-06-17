import { ADD_TASK, DECREMENT, INCREMENT } from "../action/actionType";

// action method
export const incrementCount = () => {
  return { type: INCREMENT, payload: 1 };
};

export const decrementCount = () => {
  return { type: DECREMENT, payload: 1 };
};

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
