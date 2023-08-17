import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({ completed, total, children }) => {
	return (
		<div className="counter-container">
			{" "}
			<h1>
				Has completado <span>{completed}</span> de <span>{total}</span> tareas!
			</h1>
			{children}
		</div>
	);
};

export default TodoCounter;
