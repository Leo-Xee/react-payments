import React from "react";

import CardAliasInput from "./index";
import { CardInfoContext } from "../../contexts/cardInfoContext";

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

const context = {
	onChangeCardInfo: () => {},
	cardInfo: {
		alias: "쇼핑용",
	},
};

const Template = args => {
	return (
		<CardInfoContext.Provider value={context}>
			<CardAliasInput {...args} />
		</CardInfoContext.Provider>
	);
};
export const Default = Template.bind({});
Default.args = {};
