import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

const ModalPortal = ({ children }) => {
	const el = document.getElementById("modal");
	return ReactDom.createPortal(children, el);
};

ModalPortal.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ModalPortal;
