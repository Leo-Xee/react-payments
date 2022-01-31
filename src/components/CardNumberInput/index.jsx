import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import InputWrapper from "../InputWrapper";

const CardNumberInput = forwardRef((props, ref) => {
	const { label, cardInfo, onChangeCardInfo } = props;
	const { cardNumberRef, cardExpirationDateRef } = ref;
	const { firstNum, secondNum, thirdNum, fourthNum } = cardInfo;

	const firstRef = useRef(null);
	const secondRef = useRef(null);
	const fourthRef = useRef(null);
	const refs = [firstRef, secondRef, cardNumberRef, fourthRef];

	// onChange **
	// check
	// focus
	const checkNumber = e => {
		const { name: idx, value } = e.target;
		const isLessFourDigits = e.target.value.length < 4;
		const isFourDigits = e.target.value.length === 4;

		onChangeCardInfo(e);

		// if (isNaN(value)) return;
		// if (isLessFourDigits) {
		// 	onChangeCardNumber(e);
		// }
		// if (isFourDigits) {
		// 	onChangeCardNumber(e);
		// 	idx <= THIRD ? moveFocus(idx) : jumpFocus();
		// }
	};

	const moveFocus = idx => {
		refs[idx].current.focus();
	};

	const jumpFocus = () => {
		cardExpirationDateRef.current.focus();
	};

	return (
		<InputWrapper htmlFor="cardNumber" label={label}>
			<S.LayoutWrapper>
				<S.Input
					type="number"
					id="cardNumber"
					name="firstNum"
					value={firstNum}
					onChange={checkNumber}
					ref={refs[0]}
					autoFocus
					required
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="number"
					name="secondNum"
					value={secondNum}
					onChange={checkNumber}
					ref={refs[1]}
					required
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="password"
					name="thirdNum"
					value={thirdNum}
					onChange={checkNumber}
					ref={refs[2]}
					required
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="password"
					name="fourthNum"
					value={fourthNum}
					onChange={checkNumber}
					ref={refs[3]}
					required
				/>
			</S.LayoutWrapper>
		</InputWrapper>
	);
});

CardNumberInput.propTypes = {
	label: PropTypes.string.isRequired,
	cardInfo: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardInfo: PropTypes.func.isRequired,
};

export default CardNumberInput;
