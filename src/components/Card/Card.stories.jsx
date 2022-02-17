import React from "react";

import Card from "./index";
import { CardInfoContext } from "../../contexts/cardInfoContext";

export default {
	title: "components/Card",
	component: Card,
	decorators: [
		Story => (
			<div style={{ margin: "2rem" }}>
				<Story />
			</div>
		),
	],
};

const context = {
	cardList: [],
	cardInfo: {
		name: "",
		firstNum: "1234",
		secondNum: "1234",
		thirdNum: "1234",
		fourthNum: "1234",
		owner: "레오",
		monthExpiration: "10",
		yearExpiration: "23",
		secureCode: "",
		firstPassword: "",
		secondPassword: "",
		alias: "",
	},
};

const Template = args => {
	return (
		<CardInfoContext.Provider value={context}>
			<Card {...args} />
		</CardInfoContext.Provider>
	);
};

export const Default = Template.bind({});
Default.args = {
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
