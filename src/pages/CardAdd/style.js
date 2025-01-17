import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	padding: 10px 5px;

	h1 {
		padding-left: 15px;
	}
`;

export const CardBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
`;

export const Form = styled.form`
	& > div:not(:last-child) {
		margin-bottom: 18px;
	}
`;

export const ButtonBox = styled.div`
	position: absolute;
	right: 25px;
	bottom: 25px;
	display: flex;
	justify-content: end;
`;
