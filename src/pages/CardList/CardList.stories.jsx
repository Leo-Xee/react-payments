import React from "react";
import CardList from "./index";

export default {
	title: "pages/CardList",
	component: CardList,
};

const Template = args => <CardList {...args} />;

export const Default = Template.bind({});
