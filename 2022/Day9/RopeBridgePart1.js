class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    equals(a){
        if(this.x == a.x && this.y==a.y){
            return true;
        }
        return false;
    }
    copy(){
        return new Point(this.x,this.y);
    }
}

var fs = require("fs");

var test = false;
var inputArray = null;
if (test) {
    inputArray = fs.readFileSync("2022/Day9/input/test.txt").toString().split(/\r?\n/);
} else {
    inputArray = fs.readFileSync("2022/Day9/input/puzzle.txt").toString().split(/\r?\n/);
}

var steps = [];

var head = new Point(0,0);
var tail = new Point(0,0);

var max = new Point(0,0);
var min = new Point(0,0);

var maxX = 14;
var maxY = 15;
var minX = -11;
var minY = -5;

var tailPositions = [];


for (var i = 0; i < inputArray.length; i++) {
    var where = inputArray[i].split(" ")[0];
    var howMany = inputArray[i].split(" ")[1];


    for (var j = 0; j < howMany; j++) {
        // move head
        switch (where) {
            case "U":
                head.y++;
                break;
            case "D":
                head.y--;
                break;
            case "R":
                head.x++;
                break;
            case "L":
                head.x--;
                break;
        }
        if (distanceBetween(head,tail) == 2) {
            if (Math.abs(head.x - tail.x) > 1) {
                // move horizontally
                tail.x += (head.x - tail.x) >= 1 ? 1 : -1;
            }
            if (Math.abs(head.y - tail.y) > 1) {
                // move vertically
                tail.y += (head.y - tail.y) >= 1 ? 1 : -1;
            }

        } else if (distanceBetween(head,tail) > 2) {
            tail.x += (head.x - tail.x) >= 1 ? 1 : -1;
            tail.y += (head.y - tail.y) >= 1 ? 1 : -1;
        }



        if(head.x > max.x){
            max.x = head.x;
        }
        if(head.x < min.x){
            min.x = head.x;
        }

        if(tail.x > max.x){
            max.x = tail.x;
        }
        if(tail.x < min.x){
            min.x = tail.x;
        }

        if(head.y > max.y){
            max.y = head.y;
        }
        if(head.y < min.y){
            min.y = head.y;
        }

        if(tail.y > max.y){
            max.y = tail.y;
        }
        if(tail.y < min.y){
            min.y = tail.y;
        }


        var contains = false;

        for (var k = 0; k < tailPositions.length; k++) {
            if (tail.equals(tailPositions[k])) {
                contains = true;
                break;
            }
        }
        if (!contains) {
            tailPositions.push(tail.copy());
        }

        steps.push([tail.copy(),head.copy()]);
    }

}


for(var i = 0; i < steps.length; i++){
    //renderMove(steps[i][0],steps[i][1]);
}


console.log(tailPositions.length);



function distanceBetween(a, b) {
    return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
}

function renderMove(tail, head) {
    for (var y = max.y; y >= min.y; y--) {
        var out = "";
        for (var x = min.x; x <= max.x; x++) {
            if (x == head.x && y == head.y) {
                out += "H";
            }
            else if (x == tail.x && y == tail.y) {
                out += "T";
            } else {
                out += ".";
            }
        }
        console.log(out);
    }
    console.log("\n");
}

