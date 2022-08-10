import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  console.log("todos", todos);
  console.log("...todos", ...todos);
  const addTodo = (todo) => {
    // this logic prevents adding empty todo
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    console.log(newTodos);
    setTodos(newTodos);
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    // todoId is the id of previous todo and new value contains the id and text of the new todo
    console.log("todo id", todoId);
    console.log("new value", newValue);
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(
      (prev) => prev.map((item) => (item.id === todoId ? newValue : item))
      // prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  return (
    <div>
      <h1>Whats the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
