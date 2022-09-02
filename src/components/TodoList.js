import { useState } from "react";

const TodoList = (props) => {
  const [condition, setCondition] = useState(true);
  const [newName, setNewName] = useState("");

  // Handle Edit Form submission and Trigger editTodo function to Edit/Update Todo
  function handleEditSubmit(e) {
    e.preventDefault();

    if (!newName) {
      setCondition(true);
    } else {
      props.editTodo(props.id, newName);
      setNewName("");
      setCondition(true);
    }
  }

  const viewTamplate = (
    <li>
      <input
        type="checkbox"
        id={props.id}
        defaultChecked={props.complete}
        onChange={() => props.onChangeCheckbox(props.id)}
      />
      <label htmlFor={props.id}>{props.name}</label>

      <button type="button" onClick={() => setCondition(false)}>
        Edit
      </button>

      <button type="button" onClick={() => props.deleteTodo(props.id)}>
        Delete
      </button>
    </li>
  );

  const editTamplate = (
    <form onSubmit={handleEditSubmit}>
      <input
        type="text"
        placeholder="edit here..."
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        autoFocus
      />
      <button type="submit">Save</button>
      <button
        type="button"
        onClick={() => {
          setNewName("");
          setCondition(true);
        }}
      >
        Cancel
      </button>
    </form>
  );

  return condition ? viewTamplate : editTamplate;
};

export default TodoList;
