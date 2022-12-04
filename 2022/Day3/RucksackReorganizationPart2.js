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

for (var i = 0; i < inputArray.length; i += 3) {
    var first = inputArray[i]
    var second = inputArray[i + 1]
    var third = inputArray[i + 2];

    var done = false;

    for (var j = 0; j < first.length; j++) {
        if (resultChars.length > i / 3) {
            break;
        }
        for (var k = 0; k < second.length; k++) {
            if (resultChars.length > i / 3) {
                break;
            }
            for (var l = 0; l < third.length; l++) {
                if (resultChars.length > i / 3) {
                    break;
                }
                if (first[j] == second[k] && first[j] == third[l]) {
                    //console.log(first[j]);
                    if (first[j] == first[j].toUpperCase()) {
                        var value = first[j].charCodeAt(0);
                        value -= 38;
                        score += value;
                        resultChars.push(first[j]);
                        resultValues.push(value);

                        //console.log(value);
                    } else if (first[j] == first[j].toLowerCase()) {
                        var value = first[j].charCodeAt(0);
                        value -= 96;
                        score += value;
                        //console.log(value);
                        resultChars.push(first[j]);
                        resultValues.push(value);
                    }
                }
            }

        }
    }
}
console.log(resultChars);
console.log(resultValues);
console.log(score);