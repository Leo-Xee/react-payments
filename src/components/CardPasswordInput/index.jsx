import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import InputWrapper from "../InputWrapper";

const CardPasswordInput = forwardRef((props, ref) => {
	const { label, cardInfo, onChangeCardInfo } = props;
	const { cardPasswordRef } = ref;
	const { firstPassword, secondPassword } = cardInfo;

	const secondRef = useRef(null);

	const checkNumber = e => {
		// const { name, value } = e.target;

		onChangeCardInfo(e);
		// if (isNaN(value)) return;
		// onChangeCardPassword(e);

		// if (+name === FIRST) {
		// 	secondRef.current.focus();
		// }

		// if (+name === SECOND) {
		// 	secondRef.current.blur();
		// }
	};

	return (
		<InputWrapper htmlFor="cardPassword" label={label}>
			<S.LayoutWrapper>
				<S.Input
					type="password"
					id="cardPassword"
					name="firstPassword"
					maxLength={1}
					value={firstPassword}
					onChange={checkNumber}
					ref={cardPasswordRef}
					required
				/>
				<S.Input
					type="password"
					name="secondPassword"
					maxLength={1}
					value={secondPassword}
					onChange={e => checkNumber(e)}
					ref={secondRef}
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
	cardInfo: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardInfo: PropTypes.func.isRequired,
};

export default CardPasswordInput;
