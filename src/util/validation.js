const invalidMessages = {
	firstNum: "0 ~ 9 사이의 숫자를 4개씩 입력하세요.",
	secondNum: "0 ~ 9 사이의 숫자를 4개씩 입력하세요.",
	thirdNum: "0 ~ 9 사이의 숫자를 4개씩 입력하세요.",
	fourthNum: "0 ~ 9 사이의 숫자를 4개씩 입력하세요.",
	monthExpiration: "01 ~ 12 사이의 숫자를 입력하세요.",
	yearExpiration: "22 ~ 99 사이의 숫자를 입력하세요.",
	secureCode: "0 ~ 9 사이의 숫자 3개를 입력하세요.",
	firstPassword: "0 ~ 9 사이의 숫자를 입력하세요.",
	secondPassword: "0 ~ 9 사이의 숫자를 입력하세요.",
};

export const getErrorMessage = e => {
	const { name } = e.target;
	return invalidMessages[name];
};

export const isValidInput = e => {
	const { value, pattern } = e.target;
	const regex = new RegExp(pattern);

	return regex.test(value);
};
