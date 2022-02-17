import React from "react";

import Card from "./index";

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

const Template = args => {
	return <Card {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	size: "small",
	cardInfo: {
		name: "포코",
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
