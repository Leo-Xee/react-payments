import React, { useRef } from "react";

import CardAdd from "./index";
import { CardInfoContext } from "../../contexts/cardInfoContext";

export default {
	title: "pages/CardAdd",
	component: CardAdd,
};

const context = {
	cardInfo: {
		name: "로이드",
		firstNum: "1111",
		secondNum: "222",
		thirdNum: "",
		fourthNum: "",
		owner: "레오",
		monthExpiration: "12",
		yearExpiration: "23",
		secureCode: "123",
		firstPassword: "1",
		secondPassword: "2",
	},
};

const Template = args => {
	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardOwnerRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};
	return (
		<CardInfoContext.Provider value={context}>
			<CardAdd {...args} ref={refsObj} />
		</CardInfoContext.Provider>
	);
};

export const Default = Template.bind({});
Default.args = {};
