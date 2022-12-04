var fs = require("fs");

var test = false;
var inputArray = null;
if(test){
    inputArray = fs.readFileSync("2022/Day3/input/test.txt").toString().split(/\r?\n/);
}else{
    inputArray = fs.readFileSync("2022/Day3/input/puzzle.txt").toString().split(/\r?\n/);
}

var score = 0;

var resultChars = [];
var resultValues = [];

for (var i = 0; i < inputArray.length; i++) {
    var firstHalf = inputArray[i].slice(0, inputArray[i].length / 2);
    var secondHalf = inputArray[i].slice(inputArray[i].length / 2, inputArray[i].length);

    var done = false;

    for (var j = 0; j < firstHalf.length; j++) {
        if (resultChars.length > i) {
            break;
        }
        for (var k = 0; k < secondHalf.length; k++) {
            if (resultChars.length > i) {
                break;
            }
            if (firstHalf[j] == secondHalf[k]) {
                console.log(firstHalf[j]);
                if (firstHalf[j] == firstHalf[j].toUpperCase()) {
                    var value = firstHalf[j].charCodeAt(0);
                    value -= 38;
                    score += value;
                    resultChars.push(firstHalf[j]);
                    resultValues.push(value);

                    //console.log(value);
                } else if (firstHalf[j] == firstHalf[j].toLowerCase()) {
                    var value = firstHalf[j].charCodeAt(0);
                    value -= 96;
                    score += value;
                    //console.log(value);
                    resultChars.push(firstHalf[j]);
                    resultValues.push(value);
                }
            }
        }
    }
}
console.log(score);