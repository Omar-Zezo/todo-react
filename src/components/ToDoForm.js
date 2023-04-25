import React, { useState } from "react";

function ToDoForm({ addTodo }) {
  const [input, setInput] = useState("");
  const handleChange = (text) => {
    setInput(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Add ToDo"
        name="text"
        className="todo-input"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="todo-button">Add ToDo</button>
    </form>
  );
}

export default ToDoForm;
