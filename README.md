This package is only responsible to Encrpyt and Decrpyt a string.

Example: 

let originalText = "hello World!";
let encryptedText = encrypt(originalText, 5);    //here 5 is nohting but a shift.
let decryptedText = decrypt(encryptedText, 5);

console.log(encryptedText);
console.log(decryptedText);


