import React, { useState } from "react";
import { useLocalStorage } from "../../customHooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
	const {
		item: tasks,
		saveItem: saveTasks,
		loading,
		error,
	} = useLocalStorage("TASKS_1", []);
	const [taskSearch, setTaskSearch] = useState("");

	const [openModal, setOpenModal] = useState(false);

	const completedTasks = tasks.filter((task) => !!task.completed).length;
	const totalTasks = tasks.length;

	const searchedTasks = tasks.filter((task) =>
		task.text.toLowerCase().includes(taskSearch.toLowerCase())
	);

	const addTask = (text) => {
		const newTasks = [...tasks];
		newTasks.push({ text, completed: false });
		saveTasks(newTasks);
	};

	const compTask = (text) => {
		const newTasks = [...tasks];
		const taskIndex = newTasks.findIndex((task) => task.text == text);
		newTasks[taskIndex].completed = true;
		saveTasks(newTasks);
	};

	const deleteTask = (text) => {
		const newTasks = [...tasks];
		const taskIndex = newTasks.findIndex((task) => task.text == text);
		newTasks.splice(taskIndex, 1);
		saveTasks(newTasks);
	};

	return (
		<TodoContext.Provider
			value={{
				loading,
				error,
				completedTasks,
				totalTasks,
				taskSearch,
				setTaskSearch,
				searchedTasks,
				compTask,
				deleteTask,
				openModal,
				setOpenModal,
				addTask,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
