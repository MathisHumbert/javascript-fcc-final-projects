function telephoneCheck(str) {
  let testStr;
  if (str[0] === '1') {
    console.log('1');
    testStr = testWithOne(str);
  } else {
    console.log('no 1');
    testStr = testWithNoOne(str);
  }
  console.log(isTrue(testStr));
  return isTrue(testStr);
}

function testWithNoOne(str) {
  let testStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' && (i === 3 || i === 7)) {
    } else if (
      (str[i] === '(' || str[i] === ')') &&
      str[0] === '(' &&
      str[4] === ')'
    ) {
    } else if (str[i] === '-' && str[0] === '(') {
    } else {
      testStr.push(str[i]);
    }
  }
  return testStr;
}

function testWithOne(str) {
  let testStr = [];
  for (let i = 1; i < str.length; i++) {
    if (
      (str[i] === '(' || str[i] === ')') &&
      (str[1] === '(' || str[2] === '(') &&
      (str[5] === ')' || str[6] === ')')
    ) {
    } else if (
      (str[i] == ' ' && i === 1) ||
      (str[i] == ' ' && i === 5) ||
      (str[i] == ' ' && i === 7) ||
      (str[i] == ' ' && i === 9)
    ) {
    } else if (
      (str[i] === '-' && i === 5) ||
      (str[i] === '-' && i === 9) ||
      (str[i] === '-' && i === 11)
    ) {
    } else {
      testStr.push(str[i]);
    }
  }
  return testStr;
}

function isTrue(str) {
  console.log(str);
  if (!(str.length === 10)) return false;
  let test = str.every((item) => {
    return !/[^0-9]/.test(item);
  });
  return test;
}

telephoneCheck('1 (555) 555-5555');
