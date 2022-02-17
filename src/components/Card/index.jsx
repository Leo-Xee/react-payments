import React, { useContext } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import { cardColors } from "../../styles/global/palette";
import { CardInfoContext } from "../../contexts/cardInfoContext";

const Card = ({ type, cardInfo, size, backgroundColor }) => {
	const { setCardList } = useContext(CardInfoContext);
	const {
		id,
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

	const onDelete = e => {
		if (e.target.className !== "Card_deleteBtn") return;
		const id = Number(e.currentTarget.dataset.id);
		setCardList(prev => prev.filter(card => card.id !== id));
	};

	return (
		<div>
			{type === "view" && (
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
			)}
			{type === "button" && (
				<S.Card
					size={size}
					backgroundColor={backgroundColor}
					onClick={onDelete}
					data-id={id}
				>
					<button className="Card_deleteBtn" type="button">
						❌
					</button>
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
			)}
		</div>
	);
};

Card.propTypes = {
	type: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
	cardInfo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		firstNum: PropTypes.string.isRequired,
		secondNum: PropTypes.string.isRequired,
		thirdNum: PropTypes.string.isRequired,
		fourthNum: PropTypes.string.isRequired,
		owner: PropTypes.string.isRequired,
		monthExpiration: PropTypes.string.isRequired,
		yearExpiration: PropTypes.string.isRequired,
		secureCode: PropTypes.string.isRequired,
		firstPassword: PropTypes.string.isRequired,
		secondPassword: PropTypes.string.isRequired,
		alias: PropTypes.string.isRequired,
	}).isRequired,
};

Card.defaultProps = {
	backgroundColor: cardColors.DEFAULT,
};

export default Card;
