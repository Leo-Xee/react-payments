import React, { useState } from "react";

const useForm = initialState => {
	const [form, setForm] = useState(initialState);

	const onChange = e => {
		const { name, value } = e.target;

		setForm(form => ({ ...form, [name]: value }));
		console.log(form);
	};

	const reset = () => {
		setForm(inititalState);
	};

	return [form, onChange, reset];
};

export default useForm;
