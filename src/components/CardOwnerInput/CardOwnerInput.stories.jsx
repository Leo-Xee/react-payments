import React, { useRef } from "react";
import CardOwnerInput from "./index";

import { CardInfoContext } from "../../contexts/cardInfoContext";

export default {
	title: "components/CardOwnerInput",
	component: CardOwnerInput,
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
		owner: "레오",
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
			<CardOwnerInput {...args} ref={refsObj} />
		</CardInfoContext.Provider>
	);
};

export const Default = Template.bind({});
Default.args = {
	label: "카드 소유자 이름 (선택)",
};
