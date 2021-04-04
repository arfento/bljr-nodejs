const validator = require('validator');

const chalk = require('chalk');

console.log(validator.isEmail('pinto@gmail.com'));
console.log(validator.isMobilePhone('0823345436', 'id-ID'));
console.log(validator.isNumeric('0823345436', ));
console.log(chalk.bgWhite.black.bold.italic.inverse.strikethrough('0823345436'));


const pesan = chalk`Lorem ipsum dolor {bgMagenta.bold sit, amet} consectetur {bgBlue.italic.black adipisicing} elit. Est, minima!`
console.log(pesan);