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
    if(inputArray[i].replaceAll(' ','').match(/^[0-9]+$/)){
        for(var j = 0; j < columns.length; j++){
            columns[j] = columns[j].reverse();
            columns[j] = columns[j].filter(function(a){return a !== '0'});
        }

        for(var j = 0; j < columns.length;j++){
            console.log(columns[j].toString());
        }
        console.log("\n");
        
        continue;
    }
    if(inputArray[i] == ""){
        instructions = true;
        continue;
    }
    if(instructions){
        
        var howMany = parseInt(inputArray[i].split(' ')[1]);
        var fromWhere = parseInt(inputArray[i].split(' ')[3])-1;
        var toWhere = parseInt(inputArray[i].split(' ')[5])-1;
        //console.log(howMany + " " + (fromWhere +1) + " " + (toWhere+1));

        for(var j = 0 ; j < howMany; j++){
            var el = columns[fromWhere].pop();
            columns[toWhere].push(el);
        }


    }else{
        var row = inputArray[i].replaceAll('[','').replaceAll(']','').split("");
        for(var j = 0; j < row.length; j++){
            if(j+2 < row.length && row[j] == ' ' && row[j+1] == ' ' && row[j+2] == ' '){
                row.splice(j,3,'0');
                if(j+1 < row.length && row[j+1] == ' '){
                    row.splice(j+1, 1);
                }
                continue;
            }
            if(j-1 >= 0 && (row[j-1].match(/[a-z0-9]/i) == row[j-1] || row[j-1] == '0') && row[j] == ' '){
                row.splice(j, 1);
                j--;
                continue;
            }

        }

        for(var j = 0; j < row.length;j++){
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
