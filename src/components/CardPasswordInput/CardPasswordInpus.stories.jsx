import React, { useRef } from "react";
import CardPasswordInput from "./index";

export default {
	title: "components/CardPasswordInput",
	component: CardPasswordInput,
};

const Template = args => {
	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};
	return <CardPasswordInput {...args} ref={refsObj} />;
};
export const Default = Template.bind({});
Default.args = {
	label: "카드 비밀번호",
	cardInfo: {
		firstPassword: "1",
		secondPassword: "2",
	},
};
