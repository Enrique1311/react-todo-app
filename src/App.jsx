import "./App.css";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import CreateButton from "./components/CreateButton";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { useState } from "react";

const defaulTasks = [
	{ text: "nfnmbnmbmb", completed: true },
	{ text: "mhjgkgk", completed: false },
	{ text: "jklkljlkjklj", completed: true },
	{ text: "kjkjljkjll", completed: true },
	{ text: "kjkjl", completed: false },
];

function App() {
	const [tasks, setTasks] = useState(defaulTasks);
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
		setTasks(newTasks);
	};

	const deleteTask = (text) => {
		const newTasks = [...tasks];
		const taskIndex = newTasks.findIndex((task) => task.text == text);
		newTasks.splice(taskIndex, 1);
		setTasks(newTasks);
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
