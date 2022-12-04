var fs = require("fs");

var test = false;
var inputArray = null;
if(test){
    inputArray = fs.readFileSync("2022/Day4/input/test.txt").toString().split(/\r?\n/);
}else{
    inputArray = fs.readFileSync("2022/Day4/input/puzzle.txt").toString().split(/\r?\n/);
}

var counter = 0;

for (var i = 0; i < inputArray.length; i++) {
    var range1 = inputArray[i].split(',')[0];
    var range2 = inputArray[i].split(',')[1];

    var range11 = parseInt(range1.split('-')[0]);
    var range12 = parseInt(range1.split('-')[1]);

    var range21 = parseInt(range2.split('-')[0]);
    var range22 = parseInt(range2.split('-')[1]);

    var array1 = Array.from({ length: range12 - range11 + 1 }, (_, j) => j + range11);
    var array2 = Array.from({ length: range22 - range21 + 1 }, (_, k) => k + range21);

    var intersection = array1.filter(value => array2.includes(value));

    if(JSON.stringify(intersection) == JSON.stringify(array1) || JSON.stringify(intersection) == JSON.stringify(array2)){
        counter++;
    }
}

console.log(counter);