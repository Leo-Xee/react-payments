import React, { useRef } from "react";

import CardPasswordInput from "./index";
import { CardInfoContext } from "../../contexts/cardInfoContext";

export default {
	title: "components/CardPasswordInput",
	component: CardPasswordInput,
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
		firstPassword: "1",
		secondPassword: "2",
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
			<CardPasswordInput {...args} ref={refsObj} />
		</CardInfoContext.Provider>
	);
};

export const Default = Template.bind({});
Default.args = {
	label: "카드 비밀번호",
};
