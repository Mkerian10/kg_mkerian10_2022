
/*
One thing to note, the pdf doesn't give any information on whether negative numbers are allowed, and what to
do in the case of them. Because they also don't show up in any examples I don't use them in my program.

In addition to that I wasn't sure what to do about invalid inputs. The solution will replace the input with ERR if
it's just a string, however if the string contains any numbers then because parseInt ignores them the program will
also ignore them.
 */
const phonetics = require("./num_phonetics/num_phonetics")

let args = process.argv.slice(2);

let mappedDigits = args.map(x => phonetics.numToPhonetics(parseInt(x)));
console.log(mappedDigits);