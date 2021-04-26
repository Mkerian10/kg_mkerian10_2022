export function digitToWord(inputDigit){
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

export function numToPhonetics(inputNum){
    if(!Number.isInteger(inputNum)){
        return "ERR";
    }

    var phoneticList = [];

    while(inputNum > 0){
        let digit = inputNum % 10;
        let phonetic = digitToWord(digit);

        if(phonetic === "ERR"){
            return "ERR";
        }

        // Add to beginning of list as we're taking the least significant digit
        phoneticList.unshift(phonetic);
        inputNum /= 10;
    }
    return phoneticList.length > 0 ? phoneticList.join("") : "ERR";
}