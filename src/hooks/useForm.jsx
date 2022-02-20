import { useState } from "react";

const useForm = initialState => {
	const [form, setForm] = useState(initialState);

	const onChange = (e, param) => {
		if (Array.isArray(param)) {
			const [name, value] = param;
			setForm(form => ({ ...form, [name]: value }));
			return;
		}

		if (typeof param === "object") {
			setForm(param);
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
