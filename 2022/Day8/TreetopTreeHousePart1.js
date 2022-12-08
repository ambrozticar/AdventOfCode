
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
var canCount = false;
for(var i = 0; i < grid.length; i++){
    if(i == 0 || i == grid.length-1){
        visible += grid[i].length;
    }else{
        for(var j = 0; j < grid[i].length; j++){
            if(j == 0 || j == grid[i].length-1){
                visible++;
            }else{
                canCount = false;
                canCount = checkLeft(i,j,grid) || checkRight(i,j,grid) || checkUp(i,j,grid) || checkDown(i,j,grid);

                if(canCount){
                    visible++;
                }
            }
        }
    }
}

console.log(visible);

function checkLeft(x, y, array){
    for(var k = 0; k < y; k++){
        if(array[x][k] >= array[x][y]){
            return false;
        }
    }
    return true;
}

function checkRight(x, y, array){
    for(var k = y+1; k < array[x].length; k++){
        if(array[x][k] >= array[x][y]){
            return false;
        }
    }
    return true;
}

function checkUp(x, y, array){
    for(var k = 0; k < x; k++){
        if(array[k][y] >= array[x][y]){
            return false;
        }
    }
    return true;
}

function checkDown(x, y, array){
    for(var k = x+1; k < array.length; k++){
        if(array[k][y] >= array[x][y]){
            return false;
        }
    }
    return true;
}