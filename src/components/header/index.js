import { useState } from "react";

const Header = ({
	onSubmit,
}) => {
	const [textInput, setTextInput] = useState("");

	const submitTodoHandler = (e) => {
		e.preventDefault();
		if (textInput.length === 0) {
			alert("Please enter a todo");
			return;
		}
		onSubmit(textInput);
		setTextInput(""); // Refresh text input
	};

	return (
		<header className="header">
			<h1>todos</h1>
			<form onSubmit={submitTodoHandler}>
				<input
					className="new-todo"
					placeholder="What needs to be done?"
					autoFocus
					onChange={(e) => setTextInput(e.target.value)}
					value={textInput}
				/>
			</form>
		</header>
	);
}

export default Header;
