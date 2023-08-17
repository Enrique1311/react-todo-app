import "./App.css";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import CreateButton from "./components/CreateButton";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

const tasks = [
	{ text: "nfnmbnmbmb", completed: true },
	{ text: "mhjgkgk", completed: false },
	{ text: "jklkljlkjklj", completed: true },
	{ text: "kjkjljkjll", completed: true },
];

function App() {
	return (
		<>
			<TodoCounter
				completed={5}
				total={20}
			>
				<TodoSearch />
			</TodoCounter>

			<TodoList>
				{tasks.map((item) => (
					<TodoItem
						text={item.text}
						completed={item.completed}
						key={TodoCounter.text}
					/>
				))}
			</TodoList>
			<CreateButton />
		</>
	);
}

export default App;
