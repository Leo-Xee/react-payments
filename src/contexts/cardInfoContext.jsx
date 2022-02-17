import React, { useState, createContext, useRef } from "react";
import PropTypes from "prop-types";

import useForm from "../hooks/useForm";

export const CardInfoContext = createContext(null);

export const CardInfoProvider = ({ children }) => {
	const [cardList, setCardList] = useState([
		{
			id: 0,
			name: "로이드",
			firstNum: "1234",
			secondNum: "5678",
			thirdNum: "1111",
			fourthNum: "1111",
			owner: "레오",
			monthExpiration: "10",
			yearExpiration: "23",
			secureCode: "123",
			firstPassword: "1",
			secondPassword: "2",
			alias: "쇼핑용",
		},
	]);
	const [cardInfo, onChangeCardInfo, reset] = useForm({
		id: 0,
		name: "",
		firstNum: "",
		secondNum: "",
		thirdNum: "",
		fourthNum: "",
		owner: "",
		monthExpiration: "",
		yearExpiration: "",
		secureCode: "",
		firstPassword: "",
		secondPassword: "",
		alias: "",
	});
	const nextId = useRef(0);

	return (
		<CardInfoContext.Provider
			value={{
				nextId,
				cardList,
				setCardList,
				cardInfo,
				onChangeCardInfo,
				reset,
			}}
		>
			{children}
		</CardInfoContext.Provider>
	);
};

CardInfoProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
