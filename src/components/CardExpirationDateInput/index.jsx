import React, { useState, useRef, forwardRef, useContext } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import InputWrapper from "../InputWrapper";
import { isValidInput, getErrorMessage } from "../../util/validation";
import { CardInfoContext } from "../../contexts/cardInfoContext";

const CardExpirationDateInput = forwardRef(({ label }, ref) => {
	const {
		cardInfo: { monthExpiration, yearExpiration },
		onChangeCardInfo,
	} = useContext(CardInfoContext);
	const { cardExpirationDateRef, cardSecureCodeRef } = ref;
	const [errorMsg, setErrorMsg] = useState(null);

	const yearRef = useRef(null);
	const refs = [cardExpirationDateRef, yearRef];

	const onFocus = e => {
		const { dataset } = e.target;
		const idx = dataset.num;

		if (idx <= 1) {
			refs[idx].current.focus();
		} else {
			refs[idx - 1].current.blur();
			cardSecureCodeRef.current.focus();
		}
	};

	const onChangeDate = e => {
		const { value } = e.target;
		const isTwoDigits = value.length === 2;

		if (!isValidInput(e)) {
			setErrorMsg(getErrorMessage(e));
			return;
		}
		setErrorMsg(null);

		if (isTwoDigits) onFocus(e);

		onChangeCardInfo(e);
	};

	return (
		<InputWrapper htmlFor="cardExpiration" label={label} errorMsg={errorMsg}>
			<S.LayoutWrapper>
				<S.Input
					type="text"
					id="cardExpiration"
					placeholder="MM"
					name="monthExpiration"
					value={monthExpiration}
					pattern="^(0[1-9]|1[012]|[0-1]|)$"
					onChange={onChangeDate}
					ref={cardExpirationDateRef}
					data-num={1}
					required
				/>
				<S.Divider>/</S.Divider>
				<S.Input
					type="text"
					placeholder="YY"
					name="yearExpiration"
					value={yearExpiration}
					pattern="^(2[2-9]|[3-9][0-9]|[0-9]|)$"
					onChange={onChangeDate}
					ref={yearRef}
					data-num={2}
					required
				/>
			</S.LayoutWrapper>
		</InputWrapper>
	);
});

CardExpirationDateInput.propTypes = {
	label: PropTypes.string.isRequired,
};

export default CardExpirationDateInput;
