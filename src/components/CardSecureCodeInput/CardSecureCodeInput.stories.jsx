import React, { useRef } from "react";

import CardSecureCodeInput from "./index";
import { CardInfoContext } from "../../contexts/cardInfoContext";

export default {
	title: "components/CardSecureCodeInput",
	component: CardSecureCodeInput,
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
		secureCode: "123",
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
			<CardSecureCodeInput {...args} ref={refsObj} />
		</CardInfoContext.Provider>
	);
};

export const Default = Template.bind({});
Default.args = {
	label: "보안 코드(CCV/CVV)",
};
