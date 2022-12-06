var fs = require("fs");

var test = false;
var inputArray = null;
if(test){
    inputArray = fs.readFileSync("2022/Day6/input/test.txt").toString().split(/\r?\n/);
}else{
    inputArray = fs.readFileSync("2022/Day6/input/puzzle.txt").toString().split(/\r?\n/);
}

var input = inputArray[0];

var window = [];
var counter = 4;
var flag = false;
for(var i = 0; i < input.length; i++){
    window = [input[i],input[i+1],input[i+2],input[i+3]];
    flag = false;
    var clone = [...window];
    clone.splice(0,1);
    if(clone.includes(input[i])){
        flag = true;
    }
    clone = [...window];
    clone.splice(1,1)
    if(clone.includes(input[i+1])){
        flag = true;
    }
    clone = [...window];
    clone.splice(2,1)
    if(clone.includes(input[i+2])){
        flag = true;
    }
    clone = [...window];
    clone.splice(3,1);
    if(clone.includes(input[i+3])){
        flag = true;
    }
    if(!flag){
        break;
    }
    counter++;
}

console.log(counter);