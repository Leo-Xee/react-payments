import styled from "styled-components";

export const Card = styled.div`
	position: relative;

	width: ${({ size }) => (size === "large" ? "290px" : "208px")};
	height: ${({ size }) => (size === "large" ? "180px" : "130px")};

	background-color: ${({ backgroundColor }) => backgroundColor};
	box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
	border-radius: 5px;

	.Card_deleteBtn {
		visibility: hidden;
		position: absolute;
		width: 24px;
		height: 24px;
		background-color: #f1f3f5;
		border-radius: 4px;
		top: 10px;
		right: 10px;
		user-select: none;
	}
	&:hover {
		.Card_deleteBtn {
			visibility: visible;
		}
	}

	.Card_name {
		position: absolute;
		top: 14px;
		left: 14px;

		font-size: ${({ size }) => (size === "large" ? "0.875rem" : "0.75rem")};
	}

	.Card_chip {
		position: absolute;
		top: ${({ size }) => (size === "large" ? "64px" : "47px")};
		left: ${({ size }) => (size === "large" ? "20px" : "14px")};

		width: ${({ size }) => (size === "large" ? "55px" : "40px")};
		height: ${({ size }) => (size === "large" ? "35px" : "26px")};

		background-color: #cbba64;
		border-radius: 4px;
	}

	.Card_number {
		position: absolute;
		top: ${({ size }) => (size === "large" ? "112px" : "78px")};
		left: ${({ size }) => (size === "large" ? "12px" : "16px")};
		font-size: ${({ size }) => (size === "large" ? "1.125rem" : "1rem")};

		& span {
			letter-spacing: 1px;
			text-align: center;
		}
		& span:not(first-child) {
			margin-left: ${({ size }) => (size === "large" ? "20px" : "6px")};
		}
	}

	.Card_owner {
		position: absolute;
		bottom: 10px;
		left: 20px;

		font-size: ${({ size }) => (size === "large" ? "1rem" : "0.75rem")};
	}

	.Card_expirationDate {
		position: absolute;
		bottom: 10px;
		right: 20px;

		font-size: ${({ size }) => (size === "large" ? "1rem" : "0.75rem")};
	}
`;
