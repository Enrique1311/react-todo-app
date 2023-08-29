import { TodoProvider } from "./components/TodoContext";
import TodoUI from "./components/TodoUI";

// const defaultTasks = [
// 	{ text: "nfnmbnmbmb", completed: true },
// 	{ text: "mhjgkgk", completed: false },
// 	{ text: "jklkljlkjklj", completed: true },
// 	{ text: "kjkjljkjll", completed: true },
// 	{ text: "kjkjl", completed: false },
// ];

// localStorage.setItem("tasks_1", JSON.stringify(defaultTasks));

function App() {
	return (
		<TodoProvider>
			<TodoUI />
		</TodoProvider>
	);
}

export default App;
