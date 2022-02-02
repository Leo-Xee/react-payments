import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import TextButton from "../../components/TextButton";
import Card from "../../components/Card";
import { LIST } from "../../config/constant";
import { basicColors, cardColors } from "../../styles/global/palette";
import CardAliasInput from "../../components/CardAliasInput";

const CardDone = props => {
	const { setPage, cardInfo, onChangeCardInfo, reset, setCardList } = props;
	const { name, alias } = cardInfo;

	const onSubmit = e => {
		e.preventDefault();
		setCardList(prev => [{ ...cardInfo, alias: alias || name }, ...prev]);
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
	cardInfo: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardInfo: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired,
	setCardList: PropTypes.func.isRequired,
};

export default CardDone;
