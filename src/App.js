import React, { useState} from "react";
import FilterButton from "./components/FilterButton";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const TODO_DATA = [
  { id: "todo-1", name: "Buy Book", complete: true },
  { id: "todo-2", name: "Buy Laptop", complete: false },
];

const FILTER_MAP = {
  All: () => true,
  Incomplete: (todo) => todo.complete === false,
  Complete: (todo) => todo.complete === true,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

// Get Data from Local Storage
// const getLocalData = () => {
//   return JSON.parse(localStorage.getItem("todoData"));
// };

const App = () => {
  const [todos, setTodos] = useState(TODO_DATA);
  const [filter, setFilter] = useState("All");

  // Add Data to Local Storage
  // useEffect(() => {
  //   localStorage.setItem("todoData", JSON.stringify(todos));
  // }, [todos]);

  function onChangeCheckbox(id) {
    const changeTodosStateProperty = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, complete: !todo.complete };
      } else {
        return todo;
      }
    });

    setTodos(changeTodosStateProperty);
  }

  // Add Todo
  function addTodo(todoName) {
    const newTodo = {
      id: `todo-${new Date().getTime().toString()}`,
      name: todoName,
      complete: false,
    };

    setTodos([...todos, newTodo]);
  }

  // Edit Todo
  function editTodo(id, newName) {
    const editedTodo = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, name: newName };
      } else {
        return todo;
      }
    });

    setTodos(editedTodo);
  }

  // Delete Todo
  function deleteTodo(id) {
    const deletedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodo);
  }

  return (
    <>
      <div className="heading">
        <h1>Todo List</h1>
      </div>

      <div className="main">
        <AddTodoForm addTodo={addTodo} />

        <div className="filterBtn">
          {FILTER_NAMES.map((btnName) => (
            <FilterButton
              key={btnName}
              btnName={btnName}
              setFilter={setFilter}
            />
          ))}
        </div>

        <h2>
          {todos.filter(FILTER_MAP[filter]).length}
          {todos.filter(FILTER_MAP[filter]).length <= 1 ? " Task" : " Tasks"}
        </h2>

        <ul>
          {todos.filter(FILTER_MAP[filter]).map((todo) => (
            <TodoList
              key={todo.id}
              id={todo.id}
              name={todo.name}
              complete={todo.complete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              onChangeCheckbox={onChangeCheckbox}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
