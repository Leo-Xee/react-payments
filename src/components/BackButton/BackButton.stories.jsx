import React from "react";
import BackButton from "./index";

export default {
	title: "components/BackButton",
	components: BackButton,
	decorators: [
		Story => (
			<div style={{ margin: "2rem" }}>
				<Story />
			</div>
		),
	],
};

const Template = args => <BackButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	onClick: () => {},
};
