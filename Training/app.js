function checkCashRegister(price, cash, cid) {
  let moneyBack = cash - price;
  let change = null;

  console.log(getTheMoney(moneyBack, change, cid));
  return change;
}

function getTheMoney(moneyBack, change, cid) {
  // case 100
  if (moneyBack >= 100) {
    // if the cid is not null
    if (cid[8][1] !== 0) {
      change += 100;
      moneyBack -= 100;
      cid[8][1] = cid[8][1] - 100;
    }
  }
  // case 20
  else if (moneyBack >= 20) {
    // if the cid is not null
    if (cid[7][1] !== 0) {
      change += 20;
      moneyBack -= 20;
      cid[7][1] = cid[7][1] - 20;
    }
  }
  // case 10
  else if (moneyBack >= 10) {
    // if the cid is not null
    if (cid[6][1] !== 0) {
      change += 10;
      moneyBack -= 10;
      cid[6][1] = cid[6][1] - 10;
    }
  }
  // case 5
  else if (moneyBack >= 5) {
    // if the cid is not null
    if (cid[5][1] !== 0) {
      change += 5;
      moneyBack -= 5;
      cid[5][1] = cid[5][1] - 5;
    }
  }
  // case 1
  else if (moneyBack >= 1) {
    // if the cid is not null
    if (cid[4][1] !== 0) {
      change += 1;
      moneyBack -= 1;
      cid[4][1] = cid[4][1] - 1;
    }
  }
  // case 0.25
  else if (moneyBack >= 0.25) {
    // if the cid is not null
    if (cid[3][1] !== 0) {
      change += 0.25;
      moneyBack -= 0.25;
      cid[3][1] = cid[3][1] - 0.25;
    }
  }
  // case 0.1
  else if (moneyBack >= 0.01) {
    // if the cid is not null
    if (cid[2][1] !== 0) {
      change += 0.1;
      moneyBack -= 0.1;
      cid[2][1] = cid[2][1] - 0.1;
    }
  }
  // case 0.05
  else if (moneyBack >= 0.05) {
    // if the cid is not null
    if (cid[1][1] !== 0) {
      change += 0.05;
      moneyBack -= 0.05;
      cid[1][1] = cid[1][1] - 0.05;
    }
  } else if (moneyBack >= 0.01) {
    // if the cid is not null
    if (cid[0][1] !== 0) {
      change += 0.01;
      moneyBack -= 0.01;
      cid[0][1] = cid[0][1] - 0.01;
    }
  }

  console.log(change);
  // if the change is correct
  if (moneyBack === 0) {
    return change;
  }
  // else run the func again
  else {
    return getTheMoney(moneyBack, change, cid);
  }
}

checkCashRegister(19.5, 20, [
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
