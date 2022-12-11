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
var crtRow = "#";

for (var i = 0; i < inputArray.length; i++) {
    var operationCycles = 0;
    var term = null;
    if (inputArray[i] == "noop") {
        operationCycles = 1;
    } else {
        term = parseInt(inputArray[i].split(" ")[1]);
        operationCycles = 2;
    }

    for (var j = 0; j < operationCycles; j++) {
        cycleCount++;
        if (operationCycles - 1 == j) {
            if (term != null) {
                register += term;
            }
        }
        if (cycleCount%40 == register || cycleCount%40 == register - 1 || cycleCount%40 == register + 1) {
            if (register + 1 % 40 == 0) {
                crtRow += "."
            } else {
                crtRow += "#"
            }

        } else {
            crtRow += "."
        }
        if (cycleCount % 40 == 39) {
            console.log(crtRow);
            crtRow = "";
        }
    }

}
