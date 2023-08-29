import { TodoProvider } from "./components/TodoContext";
import TodoUI from "./components/TodoUI";

function App() {
	return (
		<TodoProvider>
			<TodoUI />
		</TodoProvider>
	);
}

export default App;
