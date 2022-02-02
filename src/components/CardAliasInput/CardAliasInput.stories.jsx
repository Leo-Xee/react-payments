import React, { useRef } from "react";
import CardAliasInput from "./index";

export default {
	title: "components/CardAliasInput",
	component: CardAliasInput,
	decorators: [
		Story => (
			<div style={{ margin: "2rem" }}>
				<Story />
			</div>
		),
	],
};

const Template = args => <CardAliasInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	cardInfo: {
		alias: "",
	},
};
