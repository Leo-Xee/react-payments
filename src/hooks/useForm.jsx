import React, { useState } from "react";

const useForm = initialState => {
	const [form, setForm] = useState(initialState);

	const onChange = (e, arr) => {
		if (arr) {
			const [name, value] = arr;
			setForm(form => ({ ...form, [name]: value }));
			return;
		}

		const { name, value } = e.target;
		setForm(form => ({ ...form, [name]: value }));
	};

	const reset = () => {
		setForm(initialState);
	};

	return [form, onChange, reset];
};

export default useForm;
