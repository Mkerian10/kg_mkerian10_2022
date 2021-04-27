module.exports = {
    digitToWord: digitToWord,
    numToPhonetics: numToPhonetics
}

/**
 * Takes a digit and returns it as its word.
 *
 * e.g. 0 -> "Zero", 3 -> "Three"
 *
 * This only accepts integers [0,9] and returns "ERR" for anything else
 *
 * @param inputDigit The input digit, as an integer
 * @returns {string} The word of the digit, or "ERR"
 */
function digitToWord(inputDigit){
    switch (inputDigit){
        case 0:
            return "Zero";
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
    }
    return "ERR";
}

/**
 * Receives an input number, and returns a string being the named digits instead of numeric digits.
 *
 * e.g. 1234 -> OneTwoThreeFour
 *
 * This only works on positive integers, anything else will return "ERR"
 *
 * @param inputNum The input number, as an integer
 * @returns {string} Named digits, or ERR on error
 */
function numToPhonetics(inputNum){
    if(!Number.isInteger(inputNum) || inputNum < 0){
        return "ERR";
    }

    let phoneticList = [];

    while(inputNum > 0){
        let digit = inputNum % 10;
        let phonetic = digitToWord(digit);

        if(phonetic === "ERR"){
            return "ERR";
        }

        // Add to beginning of list as we're taking the least significant digit
        phoneticList.unshift(phonetic);
        inputNum /= 10;
        inputNum = Math.floor(inputNum); // Ensure integer division, this won't work on negative nums
    }
    return phoneticList.length > 0 ? phoneticList.join("") : "ERR";
}