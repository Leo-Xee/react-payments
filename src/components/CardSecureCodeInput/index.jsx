import React, { useState, forwardRef, useContext } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import QuestionMark from "../../assets/question-circle-regular.svg";
import InputWrapper from "../InputWrapper";
import ToolTip from "../ToolTip";
import { getErrorMessage, isValidInput } from "../../util/validation";
import { CardInfoContext } from "../../contexts/cardInfoContext";

const CardSecureCodeInput = forwardRef(({ label }, ref) => {
	const {
		cardInfo: { secureCode },
		onChangeCardInfo,
	} = useContext(CardInfoContext);
	const { cardSecureCodeRef, cardPasswordRef } = ref;
	const [isToolTipOn, setIsToolTipOn] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);

	const onChangeToolTip = () => {
		setIsToolTipOn(!isToolTipOn);
	};

	const onFocus = () => {
		cardPasswordRef.current.focus();
	};

	const onChangeCode = e => {
		const { value } = e.target;
		const isThreeDigits = value.length === 3;

		if (!isValidInput(e)) {
			setErrorMsg(getErrorMessage(e));
			return;
		}
		setErrorMsg(null);

		if (isThreeDigits) onFocus(e);

		onChangeCardInfo(e);
	};

	return (
		<InputWrapper htmlFor="cardSecureCode" label={label} errorMsg={errorMsg}>
			<S.LayoutWrapper>
				<S.Input
					type="password"
					id="cardSecureCode"
					name="secureCode"
					maxLength={3}
					value={secureCode}
					pattern="^[0-9]{0,3}$"
					onChange={onChangeCode}
					ref={cardSecureCodeRef}
					required
				/>
				<S.SVGWrapper
					onMouseEnter={onChangeToolTip}
					onMouseLeave={onChangeToolTip}
				>
					<QuestionMark width="25px" height="25px" fill="#969696" />
					{isToolTipOn && <ToolTip />}
				</S.SVGWrapper>
			</S.LayoutWrapper>
		</InputWrapper>
	);
});

CardSecureCodeInput.propTypes = {
	label: PropTypes.string.isRequired,
};

export default CardSecureCodeInput;
