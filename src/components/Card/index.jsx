import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import palette from "../../styles/global/palette";

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
			<S.CardName>{name && `${name} 카드`}</S.CardName>
			<S.Chip />
			<S.CardNumber>
				{`${firstNum}  ${secondNum} 
				 ${changeToSecureCode(thirdNum)}  
			   ${changeToSecureCode(fourthNum)}`}
			</S.CardNumber>
			<S.CardOwner>{owner || "NAME"}</S.CardOwner>
			<S.CardExpirationDate>
				{`${monthExpiration || "MM"}/${yearExpiration || "YY"}`}
			</S.CardExpirationDate>
		</S.Card>
	);
};

Card.propTypes = {
	cardInfo: PropTypes.objectOf(PropTypes.string).isRequired,
	size: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
};

Card.defaultProps = {
	backgroundColor: palette.DEFAULT,
};

export default Card;
