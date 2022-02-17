import React, { useRef } from "react";

import CardCompanyList from "./index";
import { CardInfoContext } from "../../contexts/cardInfoContext";

export default {
	title: "components/CardCompanyList",
	component: CardCompanyList,
	decorators: [
		Story => (
			<div style={{ margin: "2rem" }}>
				<Story />
			</div>
		),
	],
};

const context = {};

const Template = args => {
	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardOwnerRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};
	return (
		<CardInfoContext.Provider value={context}>
			<CardCompanyList {...args} ref={refsObj} />
		</CardInfoContext.Provider>
	);
};

export const Default = Template.bind({});
Default.args = {};
