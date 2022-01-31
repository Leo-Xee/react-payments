import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import TextButton from "../../components/TextButton";
import { DONE, LIST } from "../../config/constant";
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

const CardAdd = ({ cardInfo, onChangeCardInfo, setPage }) => {
	const { name, secondNum } = cardInfo;
	const [isModalOn, setIsModalOn] = useState(false);

	useEffect(() => {
		const modalTrigger = secondNum.length === 4;
		if (modalTrigger) {
			setIsModalOn(true);
		}
	}, [secondNum]);

	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardOwnerRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};

	const onSubmit = e => {
		e.preventDefault();
		setPage(DONE);
	};

	return (
		<div className="app">
			<S.Header>
				<BackButton onClick={() => setPage(LIST)} />
				<h1>카드 추가</h1>
			</S.Header>
			<S.CardBox>
				<Card
					size="small"
					cardInfo={cardInfo}
					backgroundColor={palette[name]}
				/>
			</S.CardBox>

			<S.Form onSubmit={onSubmit}>
				<CardNumberInput
					label="카드 번호"
					cardInfo={cardInfo}
					onChangeCardInfo={onChangeCardInfo}
					ref={refsObj}
				/>
				<CardExpirationDateInput
					label="만료일"
					cardInfo={cardInfo}
					onChangeCardInfo={onChangeCardInfo}
					ref={refsObj}
				/>
				<CardOwnerInput
					label="카드 소유자 이름 (선택)"
					cardInfo={cardInfo}
					onChangeCardInfo={onChangeCardInfo}
					ref={refsObj}
				/>
				<CardSecureCodeInput
					label="보안 코드(CCV/CVV)"
					cardInfo={cardInfo}
					onChangeCardInfo={onChangeCardInfo}
					ref={refsObj}
				/>
				<CardPasswordInput
					label="카드 비밀번호"
					cardInfo={cardInfo}
					onChangeCardInfo={onChangeCardInfo}
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
							onChangeCardInfo={onChangeCardInfo}
							ref={refsObj}
						/>
					</Modal>
				</ModalPortal>
			)}
		</div>
	);
};

CardAdd.propTypes = {
	cardInfo: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardInfo: PropTypes.func.isRequired,
	setPage: PropTypes.func.isRequired,
};

export default CardAdd;
