
var fs = require("fs");

var test = false;
var inputArray = null;
if (test) {
    inputArray = fs.readFileSync("2022/Day8/input/test.txt").toString().split(/\r?\n/);
} else {
    inputArray = fs.readFileSync("2022/Day8/input/puzzle.txt").toString().split(/\r?\n/);
}
var visible = 0;
var grid = [];
for(var i = 0; i < inputArray.length; i++){
    grid.push(inputArray[i].split('').map(Number));
}
var maxScore = 0;;
for(var i = 0; i < grid.length; i++){
    if(i == 0 || i == grid.length-1){
        visible += grid[i].length;
    }else{
        for(var j = 0; j < grid[i].length; j++){
            if(j == 0 || j == grid[i].length-1){
                visible++;
            }else{
                var score = checkLeft(i,j,grid) * checkRight(i,j,grid) * checkUp(i,j,grid) * checkDown(i,j,grid);

                if(score > maxScore){
                    maxScore = score;
                }
            }
        }
    }
}

console.log(maxScore);

function checkLeft(x, y, array){
    var counter = 0;
    for(var k = y-1; k >= 0; k--){
        if(array[x][k] >= array[x][y]){
            counter++;
            break;
        }else{
            counter++;
        }
    }
    return counter;
}

function checkRight(x, y, array){
    var counter = 0;
    for(var k = y+1; k < array[x].length; k++){
        if(array[x][k] >= array[x][y]){
            counter++;
            break;
        }else{
            counter++;
        }
    }
    return counter;
}

function checkUp(x, y, array){
    var counter = 0;
    for(var k = x-1; k >= 0; k--){
        if(array[k][y] >= array[x][y]){
            counter++;
            break;
        }else{
            counter++;
        }
    }
    return counter;
}

function checkDown(x, y, array){
    var counter = 0;
    for(var k = x+1; k < array.length; k++){
        if(array[k][y] >= array[x][y]){
            counter++;
            break;
        }else{
            counter++;
        }
    }
    return counter;
}