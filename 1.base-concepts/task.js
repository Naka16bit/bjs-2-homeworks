"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b/(2 * a)];
  } else {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  let percentNum = parseFloat(percent);
  let contributionNum = parseFloat(contribution);
  let amountNum = parseFloat(amount);

  if (isNaN(percentNum)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contributionNum)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amountNum)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    let capital = amountNum - contributionNum;
    let currentDate = new Date();
    let period = (date.getFullYear()*12 + date.getMonth()) - (currentDate.getFullYear()*12 + currentDate.getMonth());
    let monthPercent = percentNum / 100 / 12;
    let monthPayment = capital * (monthPercent + monthPercent / ((1 + monthPercent) ** period - 1));
    totalAmount = Math.round(monthPayment * period * 100) / 100;
  }
  
  return totalAmount;
}
