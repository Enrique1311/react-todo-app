import React from "react";
import "./TodoSearch.css";

const TodoSearch = () => {
	return (
		<div className="search-container">
			<div className="searcher">
				{" "}
				<input
					type="text"
					placeholder="Escribe una tarea"
				/>
			</div>
		</div>
	);
};

export default TodoSearch;
