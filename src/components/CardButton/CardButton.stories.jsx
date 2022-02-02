import React from "react";
import CardButton from "./index";

export default {
	title: "components/CardButton",
	component: CardButton,
	decorators: [
		Story => (
			<div style={{ margin: "2rem" }}>
				<Story />
			</div>
		),
	],
};

const Template = args => <CardButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
