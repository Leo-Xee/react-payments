import React from "react";
import Card from "./index";

export default {
	title: "components/Card",
	component: Card,
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
	cardInfo: {
		name: "로이드",
		firstNum: "1111",
		secondNum: "2222",
		thirdNum: "3333",
		fourthNum: "4444",
		owner: "NAME",
		monthExpiration: "10",
		yearExpiration: "23",
		secureCode: "123",
		firstPassword: "",
		secondPassword: "",
	},
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
	...Default.args,
};

export const Large = Template.bind({});
Large.args = {
	size: "large",
	...Default.args,
};
