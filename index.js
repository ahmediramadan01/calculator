"use strict";

let OPERATOR = "",
	FIRST_OPERAND = "0",
	SECOND_OPERAND = "",
	DISPLAY_VALUE = "0";

const displayPreviousElement = document.querySelector(".display__previous");
const displayEqualElement = document.querySelector(".display__equal");
const displayCurrentElement = document.querySelector(".display__current");
const displayFirstElement = document.querySelector(".display__first");
const displayOperatorElement = document.querySelector(".display__operator");
const displaySecondElement = document.querySelector(".display__second");

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

function updateCurrentDisplay() {
	displayFirstElement.textContent = FIRST_OPERAND;
	displayOperatorElement.textContent = OPERATOR;
	displaySecondElement.textContent = SECOND_OPERAND;
}
updateCurrentDisplay();
