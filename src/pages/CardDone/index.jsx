import React, { useContext } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import TextButton from "../../components/TextButton";
import Card from "../../components/Card";
import { LIST } from "../../config/constant";
import { basicColors, cardColors } from "../../styles/global/palette";
import CardAliasInput from "../../components/CardAliasInput";
import { CardInfoContext } from "../../contexts/cardInfoContext";

const CardDone = ({ setPage }) => {
	const { nextId, cardInfo, onChangeCardInfo, reset, cardList, setCardList } =
		useContext(CardInfoContext);
	const { name, alias } = cardInfo;

	const editAlias = idx => {
		if (idx) {
			setCardList(prev =>
				prev.map(card => {
					if (card.id === cardInfo.id) {
						return {
							...cardInfo,
						};
					}
					return card;
				}),
			);
		}
	};

	const addCard = () => {
		nextId.current += 1;
		setCardList(prev => [
			{ ...cardInfo, alias: alias || name, id: nextId.current },
			...prev,
		]);
	};

	const onSubmit = e => {
		e.preventDefault();
		const idx = cardList.findIndex(card => card.id === cardInfo.id);
		if (idx) {
			editAlias(idx);
		} else {
			addCard();
		}
		reset();
		setPage(LIST);
	};

	return (
		<div className="app">
			<S.Header>
				<h1>카드등록이 완료되었습니다.</h1>
			</S.Header>
			<S.CardBox>
				<Card
					size="large"
					type="view"
					cardInfo={cardInfo}
					backgroundColor={cardColors[name]}
				/>
			</S.CardBox>
			<S.Form onSubmit={onSubmit}>
				<CardAliasInput
					cardInfo={cardInfo}
					onChangeCardInfo={onChangeCardInfo}
				/>
				<S.ButtonBox>
					<TextButton
						type="submit"
						content="확인"
						color={basicColors.textBtn}
					/>
				</S.ButtonBox>
			</S.Form>
		</div>
	);
};

CardDone.propTypes = {
	setPage: PropTypes.func.isRequired,
};

export default CardDone;
