import React, { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

const TodoForm = () => {
	const { setOpenModal, addTask } = useContext(TodoContext);

	const [newTask, setNewTask] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		addTask(newTask);
		setOpenModal(false);
	};

	const onCancel = (event) => {
		setOpenModal(false);
	};

	const onChange = (event) => {
		setNewTask(event.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Escribe una nueva tarea</label>
			<textarea
				value={newTask}
				placeholder="Nueva tarea..."
				onChange={onChange}
			/>
			<div className="form-btn-container">
				<button
					type="button"
					className="cancel-btn btn"
					onClick={onCancel}
					onChange={onChange}
				>
					Cancelar
				</button>
				<button
					type="submit"
					className="add-btn btn"
					onClick={onSubmit}
				>
					Agregar
				</button>
			</div>
		</form>
	);
};

export default TodoForm;
