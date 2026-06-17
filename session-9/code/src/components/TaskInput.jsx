import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../action/actions";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  const dispatch = useDispatch();

  const handleOnAdd = () => {
    //restructuring of oject
    const task = {
      title,
      status,
    };

    dispatch(addTask(task));
  };

  return (
    <>
      <input
        value={title}
        placeholder="Please enter title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="done">Done</option>
      </select>

      <button onClick={handleOnAdd}>Add Task</button>
    </>
  );
};

export default TaskInput;
