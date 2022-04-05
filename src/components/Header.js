import React from "react";
import { v4 as uuidv4 } from "uuid";

function Header({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  // console.log(inputText);

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("Please enter a todo");
      return false;
    }
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        text: inputText,
        completed: false,
      },
    ]);
    setInputText("");
  };

  // console.log(todos);

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={submitTodoHandler}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={inputTextHandler}
          value={inputText}
        />
      </form>
    </header>
  );
}

export default Header;
