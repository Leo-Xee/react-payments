import React, { forwardRef, useContext } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import InputWrapper from "../InputWrapper";
import { CardInfoContext } from "../../contexts/cardInfoContext";

const CardOwnerInput = forwardRef(({ label }, ref) => {
	const {
		cardInfo: { owner },
		onChangeCardInfo,
	} = useContext(CardInfoContext);
	const { cardOwnerRef } = ref;

	return (
		<InputWrapper
			label={label}
			htmlFor="cardOwner"
			useToCount
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
};

export default CardOwnerInput;
