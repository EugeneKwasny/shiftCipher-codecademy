const ShiftCipher = require('./ShiftCipher.js');

const shiftCipherInst = new ShiftCipher(2);



console.log(shiftCipherInst.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(shiftCipherInst.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'