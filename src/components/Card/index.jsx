import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import { cardColors } from "../../styles/global/palette";

const Card = ({ cardInfo, size, backgroundColor }) => {
	const {
		name,
		firstNum,
		secondNum,
		thirdNum,
		fourthNum,
		owner,
		monthExpiration,
		yearExpiration,
	} = cardInfo;

	const changeToSecureCode = numbers => {
		return "*".repeat(numbers.length);
	};

	return (
		<S.Card size={size} backgroundColor={backgroundColor}>
			<div className="Card_name">{name && `${name} 카드`}</div>
			<div className="Card_chip" />
			<div className="Card_number">
				<span>{firstNum}</span>
				<span>{secondNum}</span>
				<span>{changeToSecureCode(thirdNum)}</span>
				<span>{changeToSecureCode(fourthNum)}</span>
			</div>
			<div className="Card_owner">{owner || "NAME"}</div>
			<div className="Card_expirationDate">
				{`${monthExpiration || "MM"}/${yearExpiration || "YY"}`}
			</div>
		</S.Card>
	);
};

Card.propTypes = {
	cardInfo: PropTypes.objectOf(PropTypes.string).isRequired,
	size: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
};

Card.defaultProps = {
	backgroundColor: cardColors.DEFAULT,
};

export default Card;
