import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import TextButton from "../../components/TextButton";
import { DONE, LIST, SECOND } from "../../config/constant";
import BackButton from "../../components/BackButton";
import Card from "../../components/Card";
import palette from "../../styles/global/palette";
import Modal from "../../components/Modal";
import CardNumberInput from "../../components/CardNumberInput";
import CardExpirationDateInput from "../../components/CardExpirationDateInput";
import CardOwnerInput from "../../components/CardOwnerInput";
import CardSecureCodeInput from "../../components/CardSecureCodeInput";
import CardPasswordInput from "../../components/CardPasswordInput";
import CardCompanyList from "../../components/CardCompanyList";
import ModalPortal from "../../components/Modal/ModalPortal";

const CardAdd = props => {
	const {
		cardName,
		cardNumber,
		cardOwner,
		cardExpirationDate,
		cardSecureCode,
		cardPassword,
		onChangeCardNumber,
		onChangeCardOwner,
		onChangeCardExpirationDate,
		onChangeCardSecureCode,
		onChangeCardPassword,
		setCardName,
		setPage,
	} = props;

	const [isModalOn, setIsModalOn] = useState(false);

	useEffect(() => {
		const modalTrigger = cardNumber[SECOND].length === 4;
		if (modalTrigger) {
			setIsModalOn(true);
		}
	}, [cardNumber[SECOND]]);

	const onBack = () => {
		setPage(LIST);
	};

	const onNext = () => {
		setPage(DONE);
	};

	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardOwnerRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};

	const onSubmit = e => {
		e.preventDefault();
		onNext();
	};

	return (
		<div className="app">
			<S.Header>
				<BackButton onClick={onBack} />
				<h1>카드 추가</h1>
			</S.Header>
			<S.CardBox>
				<Card
					size="small"
					backgroundColor={palette[cardName]}
					cardName={cardName}
					cardNumber={cardNumber}
					cardOwner={cardOwner}
					cardExpirationDate={cardExpirationDate}
				/>
			</S.CardBox>
			<S.Form onSubmit={onSubmit}>
				<CardNumberInput
					label="카드 번호"
					cardNumber={cardNumber}
					onChangeCardNumber={onChangeCardNumber}
					ref={refsObj}
				/>
				<CardExpirationDateInput
					label="만료일"
					cardExpirationDate={cardExpirationDate}
					onChangeCardExpirationDate={onChangeCardExpirationDate}
					ref={refsObj}
				/>
				<CardOwnerInput
					label="카드 소유자 이름 (선택)"
					width="318px"
					cardOwner={cardOwner}
					onChangeCardOwner={onChangeCardOwner}
					ref={refsObj}
				/>
				<CardSecureCodeInput
					label="보안 코드(CCV/CVV)"
					cardSecureCode={cardSecureCode}
					onChangeCardSecureCode={onChangeCardSecureCode}
					ref={refsObj}
				/>
				<CardPasswordInput
					label="카드 비밀번호"
					cardPassword={cardPassword}
					onChangeCardPassword={onChangeCardPassword}
					ref={refsObj}
				/>
				<S.ButtonBox>
					<TextButton type="submit" content="다음" color="#04C09E" />
				</S.ButtonBox>
			</S.Form>
			{isModalOn && (
				<ModalPortal>
					<Modal setIsModalOn={setIsModalOn}>
						<CardCompanyList
							setIsModalOn={setIsModalOn}
							setCardName={setCardName}
							ref={refsObj}
						/>
					</Modal>
				</ModalPortal>
			)}
		</div>
	);
};

CardAdd.propTypes = {
	cardName: PropTypes.string.isRequired,
	cardNumber: PropTypes.objectOf(PropTypes.string),
	cardOwner: PropTypes.string.isRequired,
	cardExpirationDate: PropTypes.objectOf(PropTypes.string),
	onChangeCardNumber: PropTypes.func.isRequired,
	onChangeCardOwner: PropTypes.func.isRequired,
	onChangeCardExpirationDate: PropTypes.func.isRequired,
	setPage: PropTypes.func.isRequired,
	setCardName: PropTypes.func.isRequired,
};

export default CardAdd;
