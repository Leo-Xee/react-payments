import React, { useRef } from "react";
import CardAliasInput from "./index";

export default {
	title: "components/CardAliasInput",
	component: CardAliasInput,
};

const Template = args => <CardAliasInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	cardInfo: {
		alias: "",
	},
};
