import React, { useRef, forwardRef, useState } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import InputWrapper from "../InputWrapper";
import { getErrorMessage, isValidInput } from "../../util/validation";

const CardNumberInput = forwardRef((props, ref) => {
	const { label, cardInfo, onChangeCardInfo } = props;
	const { cardNumberRef, cardExpirationDateRef } = ref;
	const { firstNum, secondNum, thirdNum, fourthNum } = cardInfo;
	const [errorMsg, setErrorMsg] = useState(null);

	const firstRef = useRef(null);
	const secondRef = useRef(null);
	const fourthRef = useRef(null);
	const refs = [firstRef, secondRef, cardNumberRef, fourthRef];

	const onChangeNumber = e => {
		const { value } = e.target;
		const isFourDigits = value.length === 4;

		if (!isValidInput(e)) {
			setErrorMsg(getErrorMessage(e));
			return;
		} else {
			setErrorMsg(null);
		}

		if (isFourDigits) onFocus(e);

		onChangeCardInfo(e);
	};

	const onFocus = e => {
		const { dataset } = e.target;
		const idx = dataset.num;

		if (idx <= 3) {
			refs[idx].current.focus();
		} else {
			refs[idx - 1].current.blur();
			cardExpirationDateRef.current.focus();
		}
	};

	return (
		<InputWrapper htmlFor="cardNumber" label={label} errorMsg={errorMsg}>
			<S.LayoutWrapper>
				<S.Input
					type="text"
					id="cardNumber"
					name="firstNum"
					value={firstNum}
					onChange={onChangeNumber}
					ref={refs[0]}
					data-num={1}
					autoFocus
					required
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="text"
					name="secondNum"
					value={secondNum}
					onChange={onChangeNumber}
					ref={refs[1]}
					data-num={2}
					required
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="password"
					name="thirdNum"
					value={thirdNum}
					onChange={onChangeNumber}
					ref={refs[2]}
					data-num={3}
					required
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="password"
					name="fourthNum"
					value={fourthNum}
					onChange={onChangeNumber}
					ref={refs[3]}
					data-num={4}
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
