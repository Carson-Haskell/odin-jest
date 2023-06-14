const isLetter = char => char.match(/[A-Za-z]/);

const isUpperCase = char => char === char.toUpperCase();

const caesarCipher = (string, shiftKey) => {
  const stringArray = [...string];
  let cipheredArray = [];

  for (let char of stringArray) {
    if (isLetter(char)) {
      const charCode = char.toLowerCase().charCodeAt(0);
      const shiftedCode = ((charCode - 97 + shiftKey) % 26) + 97;
      const newLetter = String.fromCharCode(shiftedCode);

      if (isUpperCase(char)) {
        cipheredArray.push(newLetter.toUpperCase());
      } else {
        cipheredArray.push(newLetter);
      }
    } else {
      cipheredArray.push(char);
    }
  }
  return cipheredArray.join("");
};

module.exports = caesarCipher;
