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
