import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import InputWrapper from "../InputWrapper";

const CardExpirationDateInput = forwardRef((props, ref) => {
	const { label, cardInfo, onChangeCardInfo } = props;
	const { cardExpirationDateRef, cardOwnerRef } = ref;
	const { monthExpiration, yearExpiration } = cardInfo;

	const yearRef = useRef(null);

	const checkDateInput = e => {
		const { name, value, min, max } = e.target;
		const isLessTwoDigits = value.length < 2;
		const isTwoDigits = value.length === 2;
		const isVaildMonth = value >= min && value <= max;
		const isVaildYear = value >= min && value <= max;

		onChangeCardInfo(e);

		// if (isLessTwoDigits) {
		// 	onChangeCardExpirationDate(e);
		// }

		// if (name === MONTH) {
		// 	if (isVaildMonth && isTwoDigits) {
		// 		onChangeCardExpirationDate(e);
		// 		yearRef.current.focus();
		// 	}
		// }

		// if (name === YEAR) {
		// 	if (isVaildYear && isTwoDigits) {
		// 		onChangeCardExpirationDate(e);
		// 		cardOwnerRef.current.focus();
		// }
		// }
	};

	return (
		<InputWrapper htmlFor="cardExpiration" label={label}>
			<S.LayoutWrapper>
				<S.Input
					type="text"
					id="cardExpiration"
					placeholder="MM"
					name="monthExpiration"
					value={monthExpiration}
					onChange={checkDateInput}
					ref={cardExpirationDateRef}
				/>
				<S.Divider>/</S.Divider>
				<S.Input
					type="text"
					placeholder="YY"
					name="yearExpiration"
					value={yearExpiration}
					onChange={checkDateInput}
					ref={yearRef}
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
