import React from "react";

function Footer({ todos, setTodos, status, setStatus, filteredTodos }) {
  const clearAll = () => {
    // completed true olanları sil false olanları tut
    setTodos(todos.filter((item) => item.completed === false));
  };

  const todosLeft = filteredTodos.filter(
    (item) => item.completed === false
  ).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todosLeft}</strong> items left
      </span>

      <ul className="filters">
        <li>
          <a
            onClick={() => setStatus("all")}
            className={`${status === "all" ? "selected" : ""}`}
          >
            All
          </a>
        </li>
        <li>
          <a
            onClick={() => setStatus("active")}
            className={`${status === "active" ? "selected" : ""}`}
          >
            Active
          </a>
        </li>
        <li>
          <a
            onClick={() => setStatus("completed")}
            className={`${status === "completed" ? "selected" : ""}`}
          >
            Completed
          </a>
        </li>
      </ul>

      <button onClick={clearAll} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
