"use strict";

let OPERATOR = "",
	FIRST_OPERAND = "0",
	SECOND_OPERAND = "",
	DISPLAY_VALUE = "0";

const add = function (a, b) {
	return parseFloat(a) + parseFloat(b);
};

const subtract = function (a, b) {
	return parseFloat(a) - parseFloat(b);
};

const multiply = function (a, b) {
	return parseFloat(a) * parseFloat(b);
};

const divide = function (a, b) {
	if (parseFloat(b) === 0) return "UNDEFINED";
	return parseFloat(a) / parseFloat(b);
};

const operate = function () {
	switch (OPERATOR) {
		case "+":
			return add(FIRST_OPERAND, SECOND_OPERAND);
		case "-":
			return subtract(FIRST_OPERAND, SECOND_OPERAND);
		case "×":
			return multiply(FIRST_OPERAND, SECOND_OPERAND);
		case "÷":
			return divide(FIRST_OPERAND, SECOND_OPERAND);
		default:
			return "Invalid Operator";
	}
};
