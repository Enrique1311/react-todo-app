import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({ completed, total, children }) => {
	return (
		<div className="counter-container">
			<h1>
				{completed !== total
					? `¡Has completado ${completed} de ${total} tareas!`
					: "¡No tienes tareas pendientes!"}
			</h1>
			{children}
		</div>
	);
};

export default TodoCounter;
