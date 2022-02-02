const invalidMessages = {
	firstNum: "0 ~ 9 사이의 숫자 4개를 입력하세요.",
	secondNum: "0 ~ 9 사이의 숫자 4개를 입력하세요.",
	thirdNum: "0 ~ 9 사이의 숫자 4개를 입력하세요.",
	fourthNum: "0 ~ 9 사이의 숫자 4개를 입력하세요.",
	monthExpiration: "01 ~ 12 사이의 숫자를 입력하세요.",
	yearExpiration: "22 ~ 99 사이의 숫자를 입력하세요.",
	secureCode: "0 ~ 9 사이의 숫자 3개를 입력하세요.",
	firstPassword: "0 ~ 9 사이의 숫자를 입력하세요.",
	secondPassword: "0 ~ 9 사이의 숫자를 입력하세요.",
};

const nums = ["firstNum", "secondNum", "thirdNum", "fourthNum"];
const expirations = ["monthExpiration", "yearExpiration"];
const passwords = ["firstPassword", "secondPassword"];

export const getErrorMessage = e => {
	const { name } = e.target;
	return invalidMessages[name];
};

//
export const isValidInput = e => {
	const { name, value } = e.target;
	console.log(name, value);

	if (nums.includes(name)) {
		const regex = /^\d{0,4}$/;

		return regex.test(value);
	}

	if (expirations.includes(name)) {
		const regex = /^\d{0,2}$/;

		if (name === expirations[0]) {
			if (value > 12) return;
		}
		if (name === expirations[1]) {
			if (value.length === 2 && value < 22) return;
			if (value > 99) return;
		}

		return regex.test(value);
	}

	if (name === "secureCode") {
		const regex = /^\d{0,3}$/;
		return regex.test(value);
	}
};
