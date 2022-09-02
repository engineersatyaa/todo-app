import { useState } from "react";

const AddTodoForm = (props) => {
  const [todoName, setTodoName] = useState("");

  // Handle Form submission and Trigger addTodo function to Add New Todo
  function handleSubmit(e) {
    e.preventDefault();
    if (!todoName) {
      return;
    } else {
      setTodoName("");
      props.addTodo(todoName);
    }
  }

  return (
    <form id="main-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="addTodo"
        placeholder="add here..."
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button type="submit">
        <label htmlFor="addTodo">Add Task</label>
      </button>
    </form>
  );
};

export default AddTodoForm;
