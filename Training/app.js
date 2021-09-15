function rot13(str) {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (!/[^a-zA-Z]/.test(str[i])) {
      let code = str.charCodeAt(i) + 13;
      if (code > 90) {
        code = 65 + 13 - (91 - str.charCodeAt(i));
      }
      newStr.push(String.fromCharCode(code));
    } else {
      newStr.push(str[i]);
    }
  }
  return newStr.join('');
}

console.log(rot13('SERR CVMMN!'));
