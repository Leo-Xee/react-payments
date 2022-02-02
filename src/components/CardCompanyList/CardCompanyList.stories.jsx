import React, { useRef } from "react";
import CardCompanyList from "./index";

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

const Template = args => {
	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};
	return <CardCompanyList {...args} ref={refsObj} />;
};

export const Default = Template.bind({});
Default.args = {};
