import { getCombineHexagramFromNumber } from "./HexagramHelper.js";
export function getCombineHexagramOfNumber(number, year, gender) {
  var numberArray = Array.from(number);
  var evenNumbers = numberArray.filter((x) => x % 2 === 0);
  var oddNumbers = numberArray.filter((x) => x % 2 === 1);

  let evenSum = 0;

  for (let i = 0; i < evenNumbers.length; i++) {
    evenSum += parseInt(evenNumbers[i]);
  }

  let oddSum = 0;

  for (let i = 0; i < oddNumbers.length; i++) {
    oddSum += parseInt(oddNumbers[i]);
  }

  if (evenSum > 30) {
    evenSum = evenSum - 30;
  }

  if (oddSum > 25) {
    oddSum = oddSum - 25;
  }
  if ((evenSum % 10) === 0) {
    evenSum = evenSum / 10;
  } else {
    evenSum = evenSum % 10;
  }

  if ((oddSum % 10) === 0) {
    oddSum = oddSum / 10;
  } else {
    oddSum = oddSum % 10;
  }

  if (evenSum === 0) {
    evenSum = oddSum;
  }

  if (oddSum === 0) {
    oddSum = evenSum;
  }

  if ((evenSum === 0) && (oddSum === 0)) {
    evenSum = 2;
    oddSum = 2;
  }

  return getCombineHexagramFromNumber(oddSum, evenSum, year, gender);
}