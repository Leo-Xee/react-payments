import React, { useRef } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import CardButton from "../../components/CardButton";
import { ADD } from "../../config/constant";
import Card from "../../components/Card";
import { cardColors } from "../../styles/global/palette";

const CardList = ({ setPage, cardList }) => {
	const nextId = useRef(0);

	const onNext = () => {
		setPage(ADD);
	};

	return (
		<div className="app">
			<S.Header>
				<h1 className="page-title">보유카드</h1>
			</S.Header>
			{cardList.map(card => {
				nextId.current++;
				return (
					<S.CardBox key={nextId}>
						<Card
							size="small"
							cardInfo={card}
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
	cardList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default CardList;
