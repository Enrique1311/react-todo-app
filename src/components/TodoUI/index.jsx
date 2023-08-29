import React, { useContext } from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoLoading from "../TodoLoading";
import TodosError from "../TodosError";
import TodoItem from "../TodoItem";
import CreateButton from "../CreateButton";
import { TodoContext } from "../TodoContext";
import EmptyTodo from "../EmptyTodo";
import TodoForm from "../TodoForm";
import MyModal from "../MyModal";

const TodoUI = () => {
	const {
		loading,
		error,
		searchedTasks,
		compTask,
		deleteTask,
		openModal,
	} = useContext(TodoContext);

	return (
		<>
			<TodoCounter>
				<TodoSearch />
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
			{openModal && (
				<MyModal>
					<TodoForm />
				</MyModal>
			)}
		</>
	);
};

export default TodoUI;
