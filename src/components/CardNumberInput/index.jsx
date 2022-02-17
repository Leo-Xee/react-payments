import React, { useRef, forwardRef, useState, useContext } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import InputWrapper from "../InputWrapper";
import { getErrorMessage, isValidInput } from "../../util/validation";
import { CardInfoContext } from "../../contexts/cardInfoContext";

const CardNumberInput = forwardRef(({ label }, ref) => {
	const {
		cardInfo: { firstNum, secondNum, thirdNum, fourthNum },
		onChangeCardInfo,
	} = useContext(CardInfoContext);
	const { cardNumberRef, cardExpirationDateRef } = ref;
	const [errorMsg, setErrorMsg] = useState(null);

	const firstRef = useRef(null);
	const secondRef = useRef(null);
	const fourthRef = useRef(null);
	const refs = [firstRef, secondRef, cardNumberRef, fourthRef];

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

	const onChangeNumber = e => {
		const { value } = e.target;
		const isFourDigits = value.length === 4;

		if (!isValidInput(e)) {
			setErrorMsg(getErrorMessage(e));
			return;
		}
		setErrorMsg(null);

		if (isFourDigits) onFocus(e);

		onChangeCardInfo(e);
	};

	return (
		<InputWrapper htmlFor="cardNumber" label={label} errorMsg={errorMsg}>
			<S.LayoutWrapper>
				<S.Input
					type="text"
					id="cardNumber"
					name="firstNum"
					value={firstNum}
					pattern="^[0-9]{0,4}$"
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
					pattern="^[0-9]{0,4}$"
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
					pattern="^[0-9]{0,4}$"
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
					pattern="^[0-9]{0,4}$"
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
};

export default CardNumberInput;
