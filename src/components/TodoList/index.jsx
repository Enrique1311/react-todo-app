import React from "react";
import "./TodoList.css";

const TodoList = ({ children, tasks }) => {
	return <div className="list">{children}</div>;
};

export default TodoList;
