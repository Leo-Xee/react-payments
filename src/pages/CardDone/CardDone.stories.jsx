import React from "react";
import CardDone from "./index";

export default {
	title: "pages/CardDone",
	component: CardDone,
};

const Template = args => <CardDone {...args} />;

export const Default = Template.bind({});
Default.args = {
	cardInfo: {
		name: "로이드",
		firstNum: "1111",
		secondNum: "2222",
		thirdNum: "3333",
		fourthNum: "4444",
		owner: "레오",
		monthExpiration: "12",
		yearExpiration: "23",
		secureCode: "123",
		firstPassword: "1",
		secondPassword: "2",
	},
};
