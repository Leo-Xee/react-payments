import React, { useContext } from "react";
import styled from "styled-components";

import InputWrapper from "../InputWrapper";
import { CardInfoContext } from "../../contexts/cardInfoContext";

const CardAliasInput = () => {
	const {
		cardInfo: { alias },
		onChangeCardInfo,
	} = useContext(CardInfoContext);

	return (
		<InputWrapper htmlFor="cardAlias">
			<Input
				type="text"
				id="cardAlias"
				name="alias"
				placeholder="카드 별칭 (선택)"
				value={alias}
				onChange={onChangeCardInfo}
				maxlength={10}
			/>
		</InputWrapper>
	);
};

const Input = styled.input`
	width: 240px;
	text-align: center;
	outline: none;
	border: none;
	border-bottom: 1px solid black;
	font-size: 1.125rem;
`;

export default CardAliasInput;
