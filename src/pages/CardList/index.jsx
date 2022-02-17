import React, { useContext } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import CardButton from "../../components/CardButton";
import { ADD } from "../../config/constant";
import Card from "../../components/Card";
import { cardColors } from "../../styles/global/palette";
import { CardInfoContext } from "../../contexts/cardInfoContext";

const CardList = ({ setPage }) => {
	const { cardList } = useContext(CardInfoContext);

	const onNext = () => {
		setPage(ADD);
	};

	return (
		<div className="app">
			<S.Header>
				<h1 className="page-title">보유카드</h1>
			</S.Header>
			{cardList.map(card => {
				return (
					<S.CardBox key={card.id}>
						<Card
							size="small"
							cardInfo={card}
							type="button"
							backgroundColor={cardColors[card.name]}
						/>
						<S.Alias>{card.alias}</S.Alias>
					</S.CardBox>
				);
			})}
			<S.CardBox>
				<CardButton onClick={onNext} />
			</S.CardBox>
		</div>
	);
};

CardList.propTypes = {
	setPage: PropTypes.func.isRequired,
};

export default CardList;
