import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

const InputWrapper = props => {
	const {
		label,
		htmlFor,
		children,
		useToCount,
		dataToCount,
		limitToCount,
		errorMsg,
	} = props;

	return (
		<S.InputWrapper>
			<S.LabelContainer>
				<S.Label htmlFor={htmlFor}>{label}</S.Label>
				{useToCount && (
					<S.Counter>{`${dataToCount.length}/${limitToCount}`}</S.Counter>
				)}
			</S.LabelContainer>
			<S.InputContainer>{children}</S.InputContainer>
			<S.ErrorMsgContainer>{errorMsg}</S.ErrorMsgContainer>
		</S.InputWrapper>
	);
};

InputWrapper.propTypes = {
	label: PropTypes.string,
	htmlFor: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	useToCount: PropTypes.bool,
	dataToCount: PropTypes.string,
	errorMsg: PropTypes.string,
};

export default InputWrapper;
