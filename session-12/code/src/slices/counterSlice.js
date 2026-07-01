import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      console.log(state, action);
      state.value = state.value + action.payload;
    },
    decrement: (state, action) => {
      console.log(state, action);
      state.value = state.value - action.payload;
    },
  },
});

console.log(counterSlice);

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
