import React, { useRef } from "react";

import CardNumberInput from "./index";
import { CardInfoContext } from "../../contexts/cardInfoContext";

export default {
	title: "components/CardNumberInput",
	component: CardNumberInput,
	decorators: [
		Story => (
			<div style={{ margin: "2rem" }}>
				<Story />
			</div>
		),
	],
};

const context = {
	cardInfo: {
		firstNum: "1234",
		secondNum: "1234",
		thirdNum: "1234",
		fourthNum: "1234",
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
			<CardNumberInput {...args} ref={refsObj} />
		</CardInfoContext.Provider>
	);
};

export const Default = Template.bind({});
Default.args = {
	label: "카드번호",
	cardInfo: {
		firstNum: "1111",
		secondNum: "2222",
		thirdNum: "3333",
		fourthNum: "4444",
	},
};
