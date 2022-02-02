import React, { useRef } from "react";
import CardAdd from "./index";

export default {
	title: "pages/CardAdd",
	component: CardAdd,
};

const Template = args => {
	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardOwnerRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};

	return <CardAdd {...args} ref={refsObj} />;
};

export const Default = Template.bind({});
Default.args = {
	cardInfo: {
		name: "로이드",
		firstNum: "1111",
		secondNum: "",
		thirdNum: "",
		fourthNum: "",
		owner: "Leo",
		monthExpiration: "12",
		yearExpiration: "23",
		secureCode: "123",
		firstPassword: "1",
		secondPassword: "2",
	},
};

export const ModalOn = Template.bind({});
ModalOn.args = {
	...Default.args,
	cardInfo: {
		name: "로이드",
		firstNum: "1111",
		secondNum: "2222",
		thirdNum: "",
		fourthNum: "",
		owner: "",
		monthExpiration: "",
		yearExpiration: "",
		secureCode: "",
		firstPassword: "",
		secondPassword: "",
	},
};
