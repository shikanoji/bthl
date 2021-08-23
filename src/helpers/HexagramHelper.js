import combineHexagramData from "../data/CombineHexagramData.js";

export function getHexagramName(values) {
    var combineValue = convertValueArrayToString(values);
    switch (combineValue) {
        case "111":
            return 'Thiên';            
        case "000":
            return 'Địa';
        case "100":
            return "Sơn";
        case "110":
            return "Phong";
        case "101":
            return "Hoả";
        case "001":
            return "Lôi";
        case "010":
            return "Thuỷ";
        case "011":
            return "Trạch";
        default:
            return '';
    };
}

function convertValueArrayToString(values) {
    var combineValue = "";
    values.forEach((value) => {
      switch (value) {
        case 1:
          combineValue = combineValue.concat("1");
          break;
        case 2:
          combineValue = combineValue.concat("1");
          break;
        case 0:
          combineValue = combineValue.concat("0");
          break;
        case -1:
          combineValue = combineValue.concat("0");
          break;
        default:
          break;
      }
    });
    return combineValue;
}

export function getHexagramOriginalName(values) {
    var combineValue = "";
    values.forEach((value) => {
      combineValue += value;
    });
    switch (combineValue) {
        case "111":
            return 'CÀN';            
        case "000":
            return 'KHÔN';
        case "100":
            return "CẤN";
        case "110":
            return "TỐN";
        case "101":
            return "LY";
        case "001":
            return "CHẤN";
        case "010":
            return "KHẢM";
        case "011":
            return "ĐOÀI";
        default:
            return '';
    };
}

export function createHexagram() {
    var h1 = generateSingleHexagram();
    var h2 = generateSingleHexagram();
    var h3 = generateSingleHexagram();
    var h4 = generateSingleHexagram();
    var h5 = generateSingleHexagram();
    var h6 = generateSingleHexagram();
    return [[h1, h2, h3],[h4, h5, h6]];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateSingleHexagram() {
  var h1 = getRandomInt(2);
  var h2 = getRandomInt(2);
  var h3 = getRandomInt(2);

  if (h1 + h2 + h3 == 0) {
    return -1;
  }
  if (h1 + h2 + h3 == 1) {
    return 0;
  }
  if (h1 + h2 + h3 == 2) {
    return 1;
  }
  if (h1 + h2 + h3 == 3) {
    return 2;
  }
}

export function getCombineHexagramName(hex1, hex2){
    var hex1String = convertValueArrayToString(hex1);
    var hex2String = convertValueArrayToString(hex2);
    var combineHexString = hex2String.concat(hex1String).split("").reverse().join(""); 
    var data = combineHexagramData.find(function (hexagram) {
      if (hexagram.code == combineHexString) return true;
    });

    return data;
}

function convertTranformHexagramValues(values) {
    var tranformValues = [];
    values.forEach((value) => {
      switch (value) {
        case 1:
          tranformValues.push(1);
          break;
        case 2:
          tranformValues.push(0);
          break;
        case 0:
          tranformValues.push(0);
          break;
        case -1:
          tranformValues.push(1);
          break;
        default:
          break;
      }
    });
    return tranformValues;
}

export function getTranformCombineHexagram(values) {
    var hex1 = values[0];
    var hex2 = values[1];
    var joinHex = hex1.concat(hex2);
    if ((!joinHex.includes(2)) && (!joinHex.includes(-1))) {
      return [];
    }
    var hex1Values = convertTranformHexagramValues(hex1);
    var hex2Values = convertTranformHexagramValues(hex2);

    return [hex1Values, hex2Values];
}