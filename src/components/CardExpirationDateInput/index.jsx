import React, { useState, useRef, forwardRef } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import InputWrapper from "../InputWrapper";
import { isValidInput, getErrorMessage } from "../../util/validation";

const CardExpirationDateInput = forwardRef((props, ref) => {
	const { label, cardInfo, onChangeCardInfo } = props;
	const { cardExpirationDateRef, cardSecureCodeRef } = ref;
	const { monthExpiration, yearExpiration } = cardInfo;
	const [errorMsg, setErrorMsg] = useState(null);

	const yearRef = useRef(null);
	const refs = [cardExpirationDateRef, yearRef];

	const onChangeDate = e => {
		const { value } = e.target;
		const isTwoDigits = value.length === 2;

		if (!isValidInput(e)) {
			setErrorMsg(getErrorMessage(e));
			return;
		} else {
			setErrorMsg(null);
		}

		if (isTwoDigits) onFocus(e);

		onChangeCardInfo(e);
	};

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
				/>
			</S.LayoutWrapper>
		</InputWrapper>
	);
});

CardExpirationDateInput.propTypes = {
	label: PropTypes.string.isRequired,
	cardInfo: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardInfo: PropTypes.func.isRequired,
};

export default CardExpirationDateInput;
