import React from "react";

function Todo({ todo, todos, setTodos, filteredTodos }) {
  const deleteTodo = () => {
    // item.id ile todo.id si eşleşmeyeni sil. eşleşen filtrelenmesin.
    // item.id === todo.id olursa eşleşeni tut, eşleşmeyen hepsini sil anlamına gelir.
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completedTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const clicked = () => {
    console.log("labela tıklandı");
  };

  return (
    <li className={`${todo.completed ? "completed" : ""}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={completedTodo}
          // checked={todo.completed}
        />
        <label onClick={clicked}>{todo.text}</label>
        <button onClick={deleteTodo} className="destroy"></button>
      </div>
    </li>
  );
}

export default Todo;
