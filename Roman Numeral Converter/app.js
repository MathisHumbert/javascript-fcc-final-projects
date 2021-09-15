// My Way, could have gone with a switch
function convertToRoman(num) {
  let romanNumber = '';
  let arr;
  function whichNumer(num) {
    if (num / 1000 >= 1) {
      num -= 1000;
      romanNumber += 'M';
    } else if (num / 900 >= 1) {
      num -= 900;
      romanNumber += 'CM';
    } else if (num / 800 >= 1) {
      num -= 800;
      romanNumber += 'DCCC';
    } else if (num / 700 >= 1) {
      num -= 700;
      romanNumber += 'DCC';
    } else if (num / 600 >= 1) {
      num -= 600;
      romanNumber += 'DC';
    } else if (num / 500 >= 1) {
      num -= 500;
      romanNumber += 'D';
    } else if (num / 400 >= 1) {
      num -= 400;
      romanNumber += 'CD';
    } else if (num / 300 >= 1) {
      num -= 300;
      romanNumber += 'CCC';
    } else if (num / 200 >= 1) {
      num -= 200;
      romanNumber += 'CC';
    } else if (num / 100 >= 1) {
      num -= 100;
      romanNumber += 'C';
    } else if (num / 90 >= 1) {
      num -= 90;
      romanNumber += 'XC';
    } else if (num / 80 >= 1) {
      num -= 80;
      romanNumber += 'LXXX';
    } else if (num / 70 >= 1) {
      num -= 70;
      romanNumber += 'LXX';
    } else if (num / 60 >= 1) {
      num -= 60;
      romanNumber += 'LX';
    } else if (num / 50 >= 1) {
      num -= 50;
      romanNumber += 'LX';
    } else if (num / 40 >= 1) {
      num -= 40;
      romanNumber += 'XL';
    } else if (num / 30 >= 1) {
      num -= 30;
      romanNumber += 'XXX';
    } else if (num / 20 >= 1) {
      num -= 20;
      romanNumber += 'XX';
    } else if (num / 10 >= 1) {
      num -= 10;
      romanNumber += 'X';
    } else if (num / 9 >= 1) {
      num -= 9;
      romanNumber += 'IX';
    } else if (num / 8 >= 1) {
      num -= 8;
      romanNumber += 'VIII';
    } else if (num / 7 >= 1) {
      num -= 7;
      romanNumber += 'VII';
    } else if (num / 6 >= 1) {
      num -= 6;
      romanNumber += 'VI';
    } else if (num / 5 >= 1) {
      num -= 5;
      romanNumber += 'V';
    } else if (num / 4 >= 1) {
      num -= 4;
      romanNumber += 'IV';
    } else if (num / 3 >= 1) {
      num -= 3;
      romanNumber += 'III';
    } else if (num / 2 >= 1) {
      num -= 2;
      romanNumber += 'II';
    } else {
      num -= 1;
      romanNumber += 'I';
    }
    return [num, romanNumber];
  }
  arr = whichNumer(num);

  while (arr[0] !== 0) {
    arr = whichNumer(arr[0]);
    console.log(arr[0]);
  }
  return romanNumber;
}

console.log(convertToRoman(29));
