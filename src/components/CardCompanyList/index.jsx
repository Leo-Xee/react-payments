import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import CircleButton from "../CircleButton";
import { cardColors } from "../../styles/global/palette";

const CardCompanyList = forwardRef((props, ref) => {
	const { setIsModalOn, onChangeCardInfo } = props;
	const { cardNumberRef } = ref;
	const companyList = [
		"포코",
		"준",
		"공원",
		"브랜",
		"로이드",
		"도비",
		"콜린",
		"썬",
	];

	const selectCompany = (_, val) => {
		onChangeCardInfo(null, ["name", val]);
		setIsModalOn(false);
		cardNumberRef.current.focus();
	};

	return (
		<S.List>
			{companyList.map((val, idx) => (
				<S.ListItem key={idx}>
					<CircleButton
						title={val}
						backgroundColor={cardColors[val]}
						onClick={e => selectCompany(e, val)}
					/>
				</S.ListItem>
			))}
		</S.List>
	);
});

CardCompanyList.propTypes = {
	onChangeCardInfo: PropTypes.func.isRequired,
	setIsModalOn: PropTypes.func.isRequired,
};

export default CardCompanyList;
