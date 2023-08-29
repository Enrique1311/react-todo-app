import React from "react";
import "./TodoLoading.css";

const TodoLoading = () => {
	return (
		<div className="loading_container">
			{" "}
			<div className="loading">
				<div className="ball_1"></div>
				<div className="ball_2"></div>
			</div>
		</div>
	);
};

export default TodoLoading;
