var num_phonetics = require("../num_phonetics")

function testDigitToWord(){
    let testSamples = [
        [0, "Zero"],
        [1, "One"],
        [2, "Two"],
        [3, "Three"],
        [4, "Four"],
        [5, "Five"],
        [6, "Six"],
        [7, "Seven"],
        [8, "Eight"],
        [9, "Nine"],
        [13, "ERR"],
        [1.2, "ERR"],
        ["str", "ERR"],
        [{}, "ERR"],
        [[1,2], "ERR"]
    ];

    testFunc(testSamples, num_phonetics.digitToWord)
}

function testNumToPhonetics(){
    let testSamples = [
        [1234567890, "OneTwoThreeFourFiveSixSevenEightNineZero"],
        [2424, "TwoFourTwoFour"],
        [[1,2], "ERR"],
        [13.2, "ERR"],
        ["str", "ERR"],
        [{}, "ERR"]
    ];

    testFunc(testSamples, num_phonetics.numToPhonetics)
}

function testFunc(list, func){
    var passed = 0;
    var failed = 0;
    for (const v in list) {
        let ret = func(v[0]);
        let result = ret === v[1];
        if(!result){
            failed++;
            console.log(`Test failed for ${v[0]} ran on ${func.name}, expected ${v[1]} but got ${ret}`)
        }else{
            passed++;
        }
    }

    console.log(`${passed + failed} tests ran with ${passed} successes and ${failed} failures.`)
}

testDigitToWord();
testNumToPhonetics();