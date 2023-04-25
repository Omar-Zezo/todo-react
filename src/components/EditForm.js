import React, { useState } from "react";

function EditForm({ editTodo, task }) {
  const [input, setInput] = useState(task.task);
  
  const handleChange = (text) => {
    setInput(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(input, task.id);
    setInput("");
  };

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
      style={{ marginBottom: "10px" }}
    >
      <input
        type="text"
        value={input}
        placeholder="Update Task"
        name="text"
        className="todo-input"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="todo-button">Update Task</button>
    </form>
  );
}

export default EditForm;
