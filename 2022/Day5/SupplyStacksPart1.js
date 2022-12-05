var fs = require("fs");

var test = false;
var inputArray = null;
if(test){
    inputArray = fs.readFileSync("2022/Day5/input/test.txt").toString().split(/\r?\n/);
}else{
    inputArray = fs.readFileSync("2022/Day5/input/puzzle.txt").toString().split(/\r?\n/);
}

var columns = [];
var instructions = false;

for(var i = 0 ; i < inputArray.length; i++){
    // matches row of numbers below the stack (not needed)
    if(inputArray[i].replaceAll(' ','').match(/^[0-9]+$/)){
        // at this point reverse the columns and remove any '0' items denoting empty space
        for(var j = 0; j < columns.length; j++){
            columns[j] = columns[j].reverse();
            columns[j] = columns[j].filter(function(a){return a !== '0'});
        }

        // output parsed input for checking
        for(var j = 0; j < columns.length;j++){
            console.log(columns[j].toString());
        }
        console.log("\n");
        
        continue;
    }
    // matches empty row between the stack and the instructions
    if(inputArray[i] == ""){
        instructions = true;
        continue;
    }
    if(instructions){
        // begin parsing instructions
        var howMany = parseInt(inputArray[i].split(' ')[1]);
        var fromWhere = parseInt(inputArray[i].split(' ')[3])-1;
        var toWhere = parseInt(inputArray[i].split(' ')[5])-1;

        // pop element from origin column and push it to destination column
        for(var j = 0 ; j < howMany; j++){
            var el = columns[fromWhere].pop();
            columns[toWhere].push(el);
        }


    }else{
        // remove [ ] from row and split into characters
        var row = inputArray[i].replaceAll('[','').replaceAll(']','').split("");
        for(var j = 0; j < row.length; j++){
            // replaces three consecutive spaces with '0' char denoting empty item and removes following space
            if(j+2 < row.length && row[j] == ' ' && row[j+1] == ' ' && row[j+2] == ' '){
                row.splice(j,3,'0');
                if(j+1 < row.length && row[j+1] == ' '){
                    row.splice(j+1, 1);
                }
                continue;
            }
            // removes preceding space
            if(j-1 >= 0 && (row[j-1].match(/[a-z0-9]/i) == row[j-1] || row[j-1] == '0') && row[j] == ' '){
                row.splice(j, 1);
                j--;
                continue;
            }

        }

        for(var j = 0; j < row.length;j++){
            // maps rows into columns
            if(typeof(columns[j]) == 'undefined'){
                columns.push([row[j]]);
            }else{
                columns[j].push(row[j]);
            }
        }
    }
}
for(var i = 0; i < columns.length;i++){
    console.log(columns[i].toString());
}

console.log("\n");

var solution = "";
for(var i = 0 ; i < columns.length; i++){
    solution += columns[i][columns[i].length -1];
}

console.log("SOLUTION: " + solution);
