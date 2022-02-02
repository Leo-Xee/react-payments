import React from "react";
import TextButton from "./index";

export default {
	title: "components/TextButton",
	component: TextButton,
	decorators: [
		Story => (
			<div style={{ margin: "2rem" }}>
				<Story />
			</div>
		),
	],
};

const Template = args => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = { content: "다음", color: "#04C09E" };
