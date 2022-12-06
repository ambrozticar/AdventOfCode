var fs = require("fs");

var test = false;
var inputArray = null;
if (test) {
    inputArray = fs.readFileSync("2022/Day6/input/test.txt").toString().split(/\r?\n/);
} else {
    inputArray = fs.readFileSync("2022/Day6/input/puzzle.txt").toString().split(/\r?\n/);
}

var input = inputArray[0];

var window = [];
var counter = 14;
var flag = false;
for (var i = 0; i < input.length; i++) {
    window = [input[i], input[i + 1], input[i + 2], input[i + 3], input[i + 4], input[i + 5], input[i + 6], input[i + 7], input[i + 8], input[i + 9], input[i + 10], input[i + 11], input[i + 12], input[i + 13]];
    flag = false;
    var clone = [...window];
    clone.splice(0, 1);
    if (clone.includes(input[i])) {
        flag = true;
    }
    clone = [...window];
    clone.splice(1, 1)
    if (clone.includes(input[i + 1])) {
        flag = true;
    }
    clone = [...window];
    clone.splice(2, 1)
    if (clone.includes(input[i + 2])) {
        flag = true;
    }
    clone = [...window];
    clone.splice(3, 1);
    if (clone.includes(input[i + 3])) {
        flag = true;
    }
    clone = [...window];
    clone.splice(4, 1);
    if (clone.includes(input[i + 4])) {
        flag = true;
    }
    clone = [...window];
    clone.splice(5, 1);
    if (clone.includes(input[i + 5])) {
        flag = true;
    }
    clone = [...window];
    clone.splice(6, 1);
    if (clone.includes(input[i + 6])) {
        flag = true;
    }
    clone = [...window];
    clone.splice(7, 1);
    if (clone.includes(input[i + 7])) {
        flag = true;
    }
    clone = [...window];
    clone.splice(8, 1);
    if (clone.includes(input[i + 8])) {
        flag = true;
    }
    clone = [...window];
    clone.splice(9, 1);
    if (clone.includes(input[i + 9])) {
        flag = true;
    }
    clone = [...window];
    clone.splice(10, 1);
    if (clone.includes(input[i + 10])) {
        flag = true;
    }
    clone = [...window];
    clone.splice(11, 1);
    if (clone.includes(input[i + 11])) {
        flag = true;
    }
    clone = [...window];
    clone.splice(12, 1);
    if (clone.includes(input[i + 12])) {
        flag = true;
    }
    clone = [...window];
    clone.splice(13, 1);
    if (clone.includes(input[i + 13])) {
        flag = true;
    }
    if (!flag) {
        break;
    }
    counter++;
}

console.log(counter);