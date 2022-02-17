import React, { useRef } from "react";

import CardExpirationDateInput from "./index";
import { CardInfoContext } from "../../contexts/cardInfoContext";

export default {
	title: "components/cardExpirationDateInput",
	component: CardExpirationDateInput,
	decorators: [
		Story => (
			<div style={{ margin: "2rem" }}>
				<Story />
			</div>
		),
	],
};

const context = {
	cardInfo: {
		monthExpiration: "11",
		yearExpiration: "23",
	},
};

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
			<CardExpirationDateInput {...args} ref={refsObj} />
		</CardInfoContext.Provider>
	);
};

export const Default = Template.bind({});
Default.args = {
	label: "만료일",
};
