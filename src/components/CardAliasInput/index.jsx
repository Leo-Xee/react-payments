import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import InputWrapper from "../InputWrapper";

const CardAliasInput = ({ cardInfo, onChangeCardInfo }) => {
	const { alias } = cardInfo;

	return (
		<>
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
		</>
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

CardAliasInput.propTypes = {
	cardInfo: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardInfo: PropTypes.func.isRequired,
};

export default CardAliasInput;
