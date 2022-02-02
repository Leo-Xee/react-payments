import React, { useRef } from "react";
import CardNumberInput from "./index";

export default {
	title: "components/CardNumberInput",
	component: CardNumberInput,
};

const Template = args => {
	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardOwnerRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};
	return <CardNumberInput {...args} ref={refsObj} />;
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
