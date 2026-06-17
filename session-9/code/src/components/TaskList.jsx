import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const taskList = useSelector((state) => state.taskList);
  console.log(taskList);

  return <div></div>;
};

export default TaskList;
