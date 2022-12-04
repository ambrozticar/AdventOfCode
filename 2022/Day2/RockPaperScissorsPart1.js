var fs = require("fs");

var test = false;
var inputArray = null;
if(test){
    inputArray = fs.readFileSync("2022/Day2/input/test.txt").toString().split(/\r?\n/);
}else{
    inputArray = fs.readFileSync("2022/Day2/input/puzzle.txt").toString().split(/\r?\n/);
}

var score = 0;

for (var i = 0; i < inputArray.length; i++) {
    var theirs = inputArray[i].split(' ')[0];
    var mine = inputArray[i].split(' ')[1];

    var result = "";

    switch (theirs) {
        case "A":
            if (mine == "X") {
                result = "tie";
            } else if (mine == "Y") {
                result = "win"
            } else if (mine == "Z") {
                result = "loss";
            }
            break;
        case "B":
            if (mine == "X") {
                result = "loss";
            } else if (mine == "Y") {
                result = "tie";
            } else if (mine == "Z") {
                result = "win"
            }
            break;
        case "C":
            if (mine == "X") {
                result = "win"
            } else if (mine == "Y") {
                result = "loss";
            } else if (mine == "Z") {
                result = "tie";
            }
            break;
    }

    if (mine == "X") {
        score += 1
    } else if (mine == "Y") {
        score += 2;
    } else if (mine == "Z") {
        score += 3;
    }

    if (result == "tie") {
        score += 3;
    } else if (result == "win") {
        score += 6;
    }

    console.log(score);
}
console.log(score);