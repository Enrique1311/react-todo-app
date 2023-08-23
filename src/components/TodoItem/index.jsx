import React from "react";
import "./TodoItem.css";
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
	return (
		<div className="item-container">
			<span
				className={`check-icon ${completed && "check-icon--active"}`}
				onClick={onComplete}
			>
				<FaCheck />
			</span>
			<p className={`${completed && "item--completed"}`}>{text}</p>
			<span
				className="delete-icon"
				onClick={onDelete}
			>
				<MdDeleteForever />
			</span>
		</div>
	);
};

export default TodoItem;
