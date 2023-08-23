import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import CreateButton from "./components/CreateButton";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { useLocalStorage } from "./customHooks/useLocalStorage";
import TodoLoading from "./components/TodoLoading";
import TodosError from "./components/TodosError";
import EmptyTodo from "./components/EmptyTodo";

// const defaultTasks = [
// 	{ text: "nfnmbnmbmb", completed: true },
// 	{ text: "mhjgkgk", completed: false },
// 	{ text: "jklkljlkjklj", completed: true },
// 	{ text: "kjkjljkjll", completed: true },
// 	{ text: "kjkjl", completed: false },
// ];

// localStorage.setItem("tasks_1", JSON.stringify(defaultTasks));

function App() {
	const {
		item: tasks,
		saveItem: saveTasks,
		loading,
		error,
	} = useLocalStorage("TASKS_1", []);
	const [taskSearch, setTaskSearch] = useState("");

	const completedTasks = tasks.filter((task) => !!task.completed).length;
	const totalTasks = tasks.length;

	const searchedTasks = tasks.filter((task) =>
		task.text.toLowerCase().includes(taskSearch.toLowerCase())
	);

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
		<>
			<TodoCounter
				completed={completedTasks}
				total={totalTasks}
			>
				<TodoSearch
					taskSearch={taskSearch}
					setTaskSearch={setTaskSearch}
				/>
			</TodoCounter>

			<TodoList>
				{loading && <TodoLoading />}
				{error && <TodosError />}
				{!loading && searchedTasks.length === 0 && <EmptyTodo />}
				{searchedTasks.map((task) => (
					<TodoItem
						text={task.text}
						completed={task.completed}
						key={TodoCounter.text}
						onComplete={() => compTask(task.text)}
						onDelete={() => deleteTask(task.text)}
					/>
				))}
			</TodoList>
			<CreateButton />
		</>
	);
}

export default App;
