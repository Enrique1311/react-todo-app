import React from "react";
import "./TodoSearch.css";

const TodoSearch = ({ taskSearch, setTaskSearch }) => {
	return (
		<div className="search-container">
			<div className="searcher">
				{" "}
				<input
					type="text"
					placeholder="Escribe una tarea"
					value={taskSearch}
					onChange={(event) => setTaskSearch(event.target.value)}
				/>
			</div>
		</div>
	);
};

export default TodoSearch;
