import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleStatus } from "./features/todoSlice";

function App() {
  const [input, setInput] = useState("");
  const tasks = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div>
      <h1>Todo List</h1>

      <p>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add new task"
        />
        <button onClick={handleAdd}>Add</button>
      </p>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.title} - {task.status}
            </span>
            <br />
            <button onClick={() => dispatch(toggleStatus(task.id))}>
              {task.status === "done" ? "Undo" : "Done"}
            </button>
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
