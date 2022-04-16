import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import {
	Header,
	Todo,
	Footer
} from "./components";

import {
	LocalSave,
	FilterTypes
} from "./utils";

const App = () => {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("All");
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		const todoLocal = LocalSave.get("todos");
		setTodos(todoLocal);
		filterHandler();
	}, []);

	useEffect(() => {
		filterHandler();
	}, [todos, filter]);

	const filterHandler = () => {
		if (FilterTypes[filter]) {
			const filteredTodos = FilterTypes[filter](todos);
			setFilteredTodos(filteredTodos);
			return;
		}
		setFilteredTodos(todos);
	};

	const TodoHandler = {
		add: (text) => {
			const newTodos = [...todos, { text, id: uuidv4() }];
			setTodos(newTodos);
			LocalSave.save("todos", newTodos);
		},
		delete: (id) => {
			const newTodos = todos.filter(todo => todo.id !== id);
			setTodos(newTodos);
			LocalSave.save("todos", newTodos);
		},
		toggle: ({ id, checked }) => {
			const newTodos = todos.map((todo) => todo.id === id ? {
				...todo,
				completed: checked,
			} : todo);
			setTodos(newTodos);
			LocalSave.save("todos", newTodos);
		}
	}

	const clearCompleted = () => {
		const newTodos = todos.filter(todo => !todo.completed);
		setTodos(newTodos);
		LocalSave.save("todos", newTodos);
	}

	return (
		<div className="todoapp">
			<Header
				onSubmit={(text) => TodoHandler.add(text)}
			/>
			<main>
				<input className="toggle-all" type="checkbox" />
				<ul className="todo-list">
					{filteredTodos.map((todo) => (
						<Todo
							key={todo.id}
							todo={todo}
							onCompleteChange={(checked) => TodoHandler.toggle({ id: todo.id, checked })}
							onDelete={() => TodoHandler.delete(todo.id)}
						/>
					))}
				</ul>
			</main>
			<Footer
				todoCount={todos?.length || 0}
				currentFilter={filter}
				onFilterChange={(filter) => setFilter(filter)}
				onClearCompleted={clearCompleted}
			/>
		</div>
	);
}

export default App;
