function palindrome(str) {
  const regex = /[^A-Za-z0-9]/g;
  str = str.replace(regex, '');
  str = str.toLowerCase();

  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  if (str === newStr) {
    return true;
  } else {
    return false;
  }
}

palindrome('five|_/|four');
