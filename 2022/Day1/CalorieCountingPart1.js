var fs = require("fs");

var test = false;
var inputArray = null;
if(test){
    inputArray = fs.readFileSync("2022/Day1/input/test.txt").toString().split(/\r?\n/);
}else{
    inputArray = fs.readFileSync("2022/Day1/input/puzzle.txt").toString().split(/\r?\n/);
}

var elfCalories = 0;
var elves = [];
for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == "") {
        elves.push(elfCalories);
        elfCalories = 0;
    } else {
        elfCalories += parseInt(inputArray[i]);
    }
}

elves.sort(function (a, b) {
    return a - b;
});

console.log(elves[elves.length - 1]);