import React from "react";
import ReactDOM from "react-dom";
import "./MyModal.css";

const MyModal = ({ children }) => {
	return ReactDOM.createPortal(
		<div className="modal-container">{children}</div>,
		document.getElementById("modal")
	);
};

export default MyModal;
