import React from "react";
import ToolTip from "./index";

export default {
	title: "components/ToolTip",
	component: ToolTip,
	decorators: [
		Story => (
			<div style={{ position: "relative", margin: "2rem" }}>
				<Story />
			</div>
		),
	],
};

const Template = args => <ToolTip {...args} />;

export const Default = Template.bind({});
Default.args = {};
