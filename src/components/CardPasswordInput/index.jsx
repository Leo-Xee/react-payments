import React, { useState, useRef, forwardRef, useContext } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import InputWrapper from "../InputWrapper";
import { getErrorMessage, isValidInput } from "../../util/validation";
import { CardInfoContext } from "../../contexts/cardInfoContext";

const CardPasswordInput = forwardRef(({ label }, ref) => {
	const {
		cardInfo: { firstPassword, secondPassword },
		onChangeCardInfo,
	} = useContext(CardInfoContext);
	const { cardPasswordRef } = ref;
	const [errorMsg, setErrorMsg] = useState(null);

	const secondPasswordRef = useRef(null);
	const refs = [cardPasswordRef, secondPasswordRef];

	const onFocus = e => {
		const { dataset } = e.target;
		const idx = dataset.num;

		if (idx <= 1) {
			refs[idx].current.focus();
		} else {
			refs[idx - 1].current.blur();
		}
	};

	const onChangePassword = e => {
		const { value } = e.target;
		const isOneDigit = value.length === 1;

		if (!isValidInput(e)) {
			setErrorMsg(getErrorMessage(e));
			return;
		}
		setErrorMsg(null);

		if (isOneDigit) onFocus(e);

		onChangeCardInfo(e);
	};

	return (
		<InputWrapper htmlFor="cardPassword" label={label} errorMsg={errorMsg}>
			<S.LayoutWrapper>
				<S.Input
					type="password"
					id="cardPassword"
					name="firstPassword"
					value={firstPassword}
					pattern="^[0-9]{0,1}$"
					onChange={onChangePassword}
					ref={cardPasswordRef}
					data-num={1}
					required
				/>
				<S.Input
					type="password"
					name="secondPassword"
					value={secondPassword}
					pattern="^[0-9]{0,1}$"
					onChange={onChangePassword}
					ref={secondPasswordRef}
					data-num={2}
					required
				/>
				<S.Dot width="7px" height="7px" />
				<S.Dot width="7px" height="7px" />
			</S.LayoutWrapper>
		</InputWrapper>
	);
});

CardPasswordInput.propTypes = {
	label: PropTypes.string.isRequired,
};

export default CardPasswordInput;
