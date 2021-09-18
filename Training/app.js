function checkCashRegister(price, cash, cid) {
  let moneyBack = cash - price;
  let change = null;
  let finalArr = [];

  console.log(moneyBack);

  console.log(`final change: ${getTheMoney(moneyBack, change, cid, finalArr)}`);
  return change;
}

function getTheMoney(moneyBack, change, cid, arr) {
  // case 100
  if (moneyBack >= 100 && cid[8][1] !== 0) {
    // change values
    change += 100;
    moneyBack -= 100;
    cid[8][1] -= 100;

    // push the coresponding arr or only the value
    if (!foundArr(arr, cid[8])) {
      arr.push([cid[8][0], 100]);
    } else {
      arr = pushValue(arr, 'ONE HUNDRED', 100);
    }
  }
  // case 20
  else if (moneyBack >= 20 && cid[7][1] !== 0) {
    change += 20;
    moneyBack -= 20;
    cid[7][1] -= 20;

    if (!foundArr(arr, cid[7])) {
      arr.push([cid[7][0], 20]);
    } else {
      arr = pushValue(arr, 'TWENTY', 20);
    }
  }
  // case 10
  else if (moneyBack >= 10 && cid[6][1] !== 0) {
    change += 10;
    moneyBack -= 10;
    cid[6][1] -= 10;

    if (!foundArr(arr, cid[6])) {
      arr.push([cid[6][0], 10]);
    } else {
      arr = pushValue(arr, 'TEN', 10);
    }
  }
  // case 5
  else if (moneyBack >= 5 && cid[5][1] !== 0) {
    change += 5;
    moneyBack -= 5;
    cid[5][1] -= 5;

    if (!foundArr(arr, cid[5])) {
      arr.push([cid[5][0], 5]);
    } else {
      arr = pushValue(arr, 'FIVE', 5);
    }
  }
  // case 1
  else if (moneyBack >= 1 && cid[4][1] !== 0) {
    change += 1;
    moneyBack -= 1;
    cid[4][1] -= 1;

    if (!foundArr(arr, cid[4])) {
      arr.push([cid[4][0], 1]);
    } else {
      arr = pushValue(arr, 'ONE', 1);
    }
  }
  // case 0.25
  else if (moneyBack >= 0.25 && cid[3][1] !== 0) {
    change += 0.25;
    moneyBack -= 0.25;
    cid[3][1] -= 0.25;

    if (!foundArr(arr, cid[3])) {
      arr.push([cid[3][0], 0.25]);
    } else {
      arr = pushValue(arr, 'QUARTER', 0.25);
    }
  }
  // case 0.1
  else if (moneyBack >= 0.1 && cid[2][1] !== 0) {
    change += 0.1;
    moneyBack -= 0.1;
    cid[2][1] -= 0.1;

    if (!foundArr(arr, cid[2])) {
      arr.push([cid[2][0], 0.1]);
    } else {
      arr = pushValue(arr, 'DIME', 0.1);
    }
  }
  // case 0.05
  else if (moneyBack >= 0.05 && cid[1][1] !== 0) {
    change += 0.05;
    moneyBack -= 0.05;
    cid[1][1] -= 0.05;

    if (!foundArr(arr, cid[1])) {
      arr.push([cid[1][0], 0.05]);
    } else {
      arr = pushValue(arr, 'NICKEL', 0.05);
    }
  }
  // case 0.01
  else if (moneyBack >= 0.01 && cid[0][1] !== 0) {
    change += 0.01;
    moneyBack -= 0.01;
    cid[0][1] -= 0.01;

    if (!foundArr(arr, cid[0])) {
      arr.push([cid[0][0], 0.01]);
    } else {
      arr = pushValue(arr, 'PENNY', 0.01);
    }
  }

  console.log(arr);

  // if the change is correct
  if (moneyBack === 0) {
    return change.toFixed(2);
  }
  // else run the func again
  else {
    return getTheMoney(moneyBack.toFixed(2), change, cid, arr);
  }
}

checkCashRegister(3.26, 100, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);

let arr1 = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
];

function foundArr(arr, arr2) {
  return arr.some((arr) => arr[0] == arr2[0]);
}
function pushValue(arr, money, number) {
  arr.forEach((item) => {
    if (item.includes(money)) {
      item[1] += number;
    }
  });
  return arr;
}
