import { getCombineHexagramFromNumber } from "./HexagramHelper.js";
export function getCombineHexagramOfNumber(number, year, gender) {
  var convertNumber = convertToNumerologyValueWithEnglish(number)
  var numberArray = Array.from(convertNumber);
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

function convertToEnglish(input) {
  const mapping = {
    Ă: "A",
    Â: "A",
    Đ: "D",
    Ê: "E",
    Ô: "O",
    Ơ: "O",
    Ư: "U",
    ă: "a",
    â: "a",
    đ: "d",
    ê: "e",
    ô: "o",
    ơ: "o",
    ư: "u",
  };
  let result = "";
  for (let char of input) {
    if (mapping[char]) {
      result += mapping[char];
    } else {
      result += char;
    }
  }
  return result;
}

function convertToNumerologyValue(input) {
  const numerologyTable = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    f: "6",
    g: "7",
    h: "8",
    i: "9",
    j: "1",
    k: "2",
    l: "3",
    m: "4",
    n: "5",
    o: "6",
    p: "7",
    q: "8",
    r: "9",
    s: "1",
    t: "2",
    u: "3",
    v: "4",
    w: "5",
    x: "6",
    y: "7",
    z: "8",
  };
  let result = input
    .toLowerCase()
    .split("")
    .map((character) => {
      if (numerologyTable[character]) {
        return numerologyTable[character];
      }
      return character;
    })
    .join("");
  return result;
}

function convertToNumerologyValueWithEnglish(input) {
  const englishString = convertToEnglish(input);
  const numerologyValues = convertToNumerologyValue(englishString);
  return numerologyValues;
}
