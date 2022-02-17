import React, { useRef } from "react";

import CardList from "./index";
import { CardInfoContext } from "../../contexts/cardInfoContext";

export default {
	title: "pages/CardList",
	component: CardList,
};
const context = {
	cardList: [
		{
			name: "로이드",
			firstNum: "1111",
			secondNum: "2222",
			thirdNum: "3333",
			fourthNum: "4444",
			owner: "레오",
			monthExpiration: "10",
			yearExpiration: "25",
			secureCode: "123",
			firstPassword: "1",
			secondPassword: "2",
			alias: "쇼핑용",
		},

		{
			name: "포코",
			firstNum: "1111",
			secondNum: "2222",
			thirdNum: "3333",
			fourthNum: "4444",
			owner: "어피치",
			monthExpiration: "10",
			yearExpiration: "25",
			secureCode: "123",
			firstPassword: "1",
			secondPassword: "2",
			alias: "생활용",
		},
	],
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
			<CardList {...args} ref={refsObj} />
		</CardInfoContext.Provider>
	);
};

export const Default = Template.bind({});
Default.args = {};
