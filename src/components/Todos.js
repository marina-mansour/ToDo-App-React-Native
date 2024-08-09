import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, setTodos }) => {
  return (
    <>
      <TodoItem todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Todos;
