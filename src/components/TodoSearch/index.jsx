import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
	const { taskSearch, setTaskSearch } = useContext(TodoContext);

	return (
		<div className="searcher">
			{" "}
			<input
				type="text"
				placeholder="Escribe una tarea"
				value={taskSearch}
				onChange={(event) => setTaskSearch(event.target.value)}
			/>
		</div>
	);
};

export default TodoSearch;
