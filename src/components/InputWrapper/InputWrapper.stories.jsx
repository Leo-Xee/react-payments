import React from "react";
import InputWrapper from "./index";

export default {
	title: "components/InputWrapper",
	component: InputWrapper,
	decorators: [
		Story => (
			<div style={{ margin: "2rem" }}>
				<Story />
			</div>
		),
	],
};

const Template = args => <InputWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
	width: "100px",
	label: "label",
};
