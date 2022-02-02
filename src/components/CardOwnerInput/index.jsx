import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import InputWrapper from "../InputWrapper";

const CardOwnerInput = forwardRef((props, ref) => {
	const { label, cardInfo, onChangeCardInfo } = props;
	const { cardOwnerRef } = ref;
	const { owner } = cardInfo;

	return (
		<InputWrapper
			label={label}
			htmlFor="cardOwner"
			useToCount={true}
			dataToCount={owner}
			limitToCount={30}
		>
			<div>
				<S.Input
					type="text"
					id="cardOwner"
					name="owner"
					maxLength={30}
					placeholder="카드에 표시된 이름과 동일하게 입력하세요."
					value={owner}
					onChange={onChangeCardInfo}
					ref={cardOwnerRef}
				/>
			</div>
		</InputWrapper>
	);
});

CardOwnerInput.propTypes = {
	label: PropTypes.string.isRequired,
	cardInfo: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardInfo: PropTypes.func.isRequired,
};

export default CardOwnerInput;
