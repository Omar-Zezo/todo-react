import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import EditForm from "./EditForm";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const editTodo = (taskId) => {
    setTodos(
      todos.map((task) =>
        task.id === taskId ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTodos(todos.filter((task) => task.id !== taskId));
  };

  const editTask = (input, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: input, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <div className="todo-list">
      <h1>what's the Plan for Today?</h1>
      <ToDoForm addTodo={addTodo} />
      <div className="list-wraper">
        {todos.map((task) =>
          task.isEditing ? (
            <EditForm editTodo={editTask} task={task} />
          ) : (
            <ToDo
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              editTodo={editTodo}
            />
          )
        )}
      </div>
    </div>
  );
}

export default ToDoList;
