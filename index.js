//Task two

function doMath(x, y, znak) {
  x = parseFloat(prompt("Перше число", ""));
  y = parseFloat(prompt("Перше число", ""));
  znak = prompt("Введіть дію", "+ - * / ^");

  if (znak === "/") {
    return x / y;
  } else if (znak === "*") {
    return x * y;
  } else if (znak === "-") {
    return x - y;
  } else if (znak === "+") {
    return x + y;
  } else if (znak === "^") {
    return Math.pow(x, y);
  } else {
    return;
  }
}

result = doMath();
console.log(result);

//Task one

const arr = [23, "one", 3.14, "cucumber", "ssd", 11, 256];

const transit = arr.filter(arrMedium);

function arrMedium(number) {
  return Number(number);
}

let resultTwo = transit.reduce((a, b) => a + b, 0) / transit.length;

console.log(resultTwo);

//Task three

function twoDimArr(a, b) {
  let arr = [];

  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i] = [];
    }
  }

  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i][j] = prompt("Value");
    }
  }
  return arr;
}

const x = parseInt(prompt("Довжина масива"));
const y = parseInt(prompt("Довжина вкладеного"));

const resultArr = twoDimArr(x, y);
console.log(resultArr);

//Task four

function charClear(str, symbol, newStr) {
  str = prompt("Enter string?");
  symbol = prompt("Symbols?", "ex.[x,y,..]");
  let c = symbol.replace(/,/g, "");
  let re = new RegExp(c, "g");
  newStr = str.replaceAll(re, "");

  return newStr;
}

let resultFour = charClear();
console.log(resultFour);
