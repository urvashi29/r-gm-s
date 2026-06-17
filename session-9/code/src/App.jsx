import React from "react";
import Counter from "./components/Counter";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <>
      <TaskInput />
      <TaskList />
      <br />
      <Counter />
    </>
  );
};

export default App;

// TASK
// CRUD: add, delete, edit, filter based on status
// uuid: to generate and add new id
