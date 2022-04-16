import React from "react";

const Todo = ({
	todo,
	onCompleteChange,
	onDelete,
}) => {
	return (
		<li className={`${todo.completed ? "completed" : ""}`}>
			<div className="view">
				<input
					className="toggle"
					type="checkbox"
					onChange={(e) => onCompleteChange(e.target.checked)}
					checked={todo?.completed ? true : false}
				/>
				<label>{todo.text}</label>
				<button onClick={onDelete} className="destroy"></button>
			</div>
		</li>
	);
}

export default Todo;
