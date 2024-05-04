"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let disc = Math.pow(b, 2) - 4 * a * c;
	if (disc > 0) {
		arr.push((-b + Math.sqrt(disc)) / 2 / a);
		arr.push((-b - Math.sqrt(disc)) / 2 / a);
	} else if (disc == 0) {
		arr.push(-b / 2 / a);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = parseFloat(percent);
	contribution = parseInt(contribution);
	amount = parseFloat(amount);
	let totalMonth = countMonths;
	let percentMonths = percent / 100 / 12;
	let loanBody = amount - contribution;
	let payment = (loanBody * (percentMonths + (percentMonths / (((1 + percentMonths) ** totalMonth) - 1))));
	let totalAmount = (payment * countMonths).toFixed(2);
	console.log(totalAmount);
	return +totalAmount;
}