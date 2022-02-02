import React, { useRef } from "react";
import CardExpirationDateInput from "./index";

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

const Template = args => {
	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};
	return <CardExpirationDateInput {...args} ref={refsObj} />;
};

export const Default = Template.bind({});
Default.args = {
	label: "만료일",
	cardInfo: {
		monthExpiration: "11",
		yearExpiration: "23",
	},
};
