import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

import useForm from "../hooks/useForm";

export const CardInfoContext = createContext(null);

export const CardInfoProvider = ({ children }) => {
	const [cardList, setCardList] = useState([]);
	const [cardInfo, onChangeCardInfo, reset] = useForm({
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

	// 객체이 값이 변경될 때마다 렌더링(비효율) 다른 방법은?
	return (
		<CardInfoContext.Provider
			value={{
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
