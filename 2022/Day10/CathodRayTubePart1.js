var fs = require("fs");

var test = false;
var inputArray = null;
if (test) {
    inputArray = fs.readFileSync("2022/Day10/input/test.txt").toString().split(/\r?\n/);
} else {
    inputArray = fs.readFileSync("2022/Day10/input/puzzle.txt").toString().split(/\r?\n/);
}

var cycleCount = 0;
var register = 1;
var sum = 0;

for (var i = 0; i < inputArray.length; i++) {
    var operationCycles = 0;
    var term = null;
    if(inputArray[i] == "noop"){
        operationCycles = 1;
    }else{
        term = parseInt(inputArray[i].split(" ")[1]);
        operationCycles = 2;
    }

    for(var j = 0; j < operationCycles; j++){
        cycleCount++;
        if(cycleCount == 20 || cycleCount == 60 || cycleCount == 100 || cycleCount == 140 || cycleCount == 180 || cycleCount == 220){
            console.log(cycleCount*register);
            sum += cycleCount*register;
        }
    }
    if(term != null){
        register += term;
    }

}

console.log(sum);