import React from "react";
import Todo from "./Todo";

function Section({ todos, setTodos, filteredTodos }) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
            filteredTodos={filteredTodos}
          />
        ))}
      </ul>
    </section>
  );
}

export default Section;
