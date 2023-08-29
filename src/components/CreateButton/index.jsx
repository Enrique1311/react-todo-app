import React, { useContext } from "react";
import "./CreateButton.css";
import { BiPlusMedical } from "react-icons/bi";
import { TodoContext } from "../TodoContext";

const CreateButton = () => {
	const { openModal, setOpenModal } = useContext(TodoContext);

	return (
		<button
			className="button"
			onClick={() => setOpenModal(!openModal)}
		>
			<BiPlusMedical />
		</button>
	);
};

export default CreateButton;
