import React, { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

const TodoCounter = ({ children }) => {
	const { completedTasks, totalTasks } = useContext(TodoContext);

	return (
		<div className="counter-container">
			<h1>
				{totalTasks === 0
					? "No hay tareas cargadas"
					: completedTasks !== totalTasks
					? `¡Has completado ${completedTasks} de ${totalTasks} tareas!`
					: "¡No tienes tareas pendientes!"}
			</h1>
			{children}
		</div>
	);
};

export default TodoCounter;
