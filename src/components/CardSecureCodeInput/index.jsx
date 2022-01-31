import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import QuestionMark from "../../assets/question-circle-regular.svg";
import InputWrapper from "../InputWrapper";
import ToolTip from "../ToolTip";

const CardSecureCodeInput = forwardRef((props, ref) => {
	const { label, cardInfo, onChangeCardInfo } = props;
	const { cardPasswordRef } = ref;
	const { secureCode } = cardInfo;
	const [isToolTipOn, setIsToolTipOn] = useState(false);

	const onChangeToolTip = () => {
		setIsToolTipOn(!isToolTipOn);
	};

	const checkNumber = e => {
		// const { value } = e.target;
		// const isLessThreeDigits = e.target.value.length < 3;
		// const isThreeDigits = e.target.value.length === 3;

		onChangeCardInfo(e);
		// if (isNaN(value)) return;
		// if (isLessThreeDigits) {
		// 	onChangeCardSecureCode(e);
		// } else if (isThreeDigits) {
		// 	onChangeCardSecureCode(e);
		// 	cardPasswordRef.current.focus();
		// }
	};

	return (
		<InputWrapper htmlFor="cardSecureCode" label={label}>
			<S.LayoutWrapper>
				<S.Input
					type="password"
					id="cardSecureCode"
					name="secureCode"
					maxLength={3}
					value={secureCode}
					onChange={checkNumber}
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
