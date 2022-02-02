import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import QuestionMark from "../../assets/question-circle-regular.svg";
import InputWrapper from "../InputWrapper";
import ToolTip from "../ToolTip";
import { getErrorMessage, isValidInput } from "../../util/validation";

const CardSecureCodeInput = forwardRef((props, ref) => {
	const { label, cardInfo, onChangeCardInfo } = props;
	const { cardSecureCodeRef, cardPasswordRef } = ref;
	const { secureCode } = cardInfo;
	const [isToolTipOn, setIsToolTipOn] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);

	const onChangeToolTip = () => {
		setIsToolTipOn(!isToolTipOn);
	};

	const onChangeCode = e => {
		const { value } = e.target;
		const isThreeDigits = value.length === 3;

		if (!isValidInput(e)) {
			setErrorMsg(getErrorMessage(e));
			return;
		} else {
			setErrorMsg(null);
		}

		if (isThreeDigits) onFocus(e);

		onChangeCardInfo(e);
	};

	const onFocus = e => {
		cardPasswordRef.current.focus();
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
	cardInfo: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardInfo: PropTypes.func.isRequired,
};

export default CardSecureCodeInput;
