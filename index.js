function encrypt(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        let code = text.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      result += char;
    }
    return result;
  }
  
  // Function to decrypt a string using the Caesar cipher
  function decrypt(text, shift) {
    return encrypt(text, 26 - shift);
  }
//   let originalText = "hello World!";
//   let encryptedText = encrypt(originalText, 5);
//   let decryptedText = decrypt(encryptedText, 5);


  module.exports = {encrypt,decrypt};