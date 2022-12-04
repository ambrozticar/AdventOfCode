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
    var result = inputArray[i].split(' ')[1];

    var mine = "";

    switch (theirs) {
        case "A":
            if (result == "X") {
                mine = "scissors";
            } else if (result == "Y") {
                mine = "rock"
            } else if (result == "Z") {
                mine = "paper";
            }
            break;
        case "B":
            if (result == "X") {
                mine = "rock";
            } else if (result == "Y") {
                mine = "paper";
            } else if (result == "Z") {
                mine = "scissors"
            }
            break;
        case "C":
            if (result == "X") {
                mine = "paper"
            } else if (result == "Y") {
                mine = "scissors";
            } else if (result == "Z") {
                mine = "rock";
            }
            break;
    }

    if (mine == "rock") {
        score += 1
    } else if (mine == "paper") {
        score += 2;
    } else if (mine == "scissors") {
        score += 3;
    }

    if (result == "Y") {
        score += 3;
    } else if (result == "Z") {
        score += 6;
    }

    console.log(score);
}
console.log(score);