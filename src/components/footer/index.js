import React from "react";
import { FilterTypes } from "../../utils";

const Footer = ({
	todoCount,
	currentFilter,
	onFilterChange,
	onClearCompleted,
}) => {
	return (
		<footer className="footer">
			<span className="todo-count">
				<b>{todoCount}</b> items left
			</span>

			<ul className="filters">
				{Object.keys(FilterTypes).map((filter, index) => (
					<li key={index}>
						<a
							onClick={() => onFilterChange(filter)}
							className={currentFilter == filter ? "selected" : ""}
							href="#"
						>
							{filter}
						</a>
					</li>
				))}
			</ul>

			<button onClick={onClearCompleted} className="clear-completed">
				Clear completed
			</button>
		</footer>
	);
}

export default Footer;
