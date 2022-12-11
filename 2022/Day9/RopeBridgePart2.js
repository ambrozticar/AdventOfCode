class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    equals(a) {
        if (this.x == a.x && this.y == a.y) {
            return true;
        }
        return false;
    }
    copy() {
        return new Point(this.x, this.y);
    }
}

var fs = require("fs");

var test = false;
var inputArray = null;
if (test) {
    inputArray = fs.readFileSync("2022/Day9/input/test2.txt").toString().split(/\r?\n/);
} else {
    inputArray = fs.readFileSync("2022/Day9/input/puzzle.txt").toString().split(/\r?\n/);
}

var steps = [];

var snake = [new Point(0, 0),new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0)];

//var snake = [new Point(0,0), new Point(0,0)];


var max = new Point(0, 0);
var min = new Point(0, 0);

var tailPositions = [];


for (var i = 0; i < inputArray.length; i++) {
    var where = inputArray[i].split(" ")[0];
    var howMany = inputArray[i].split(" ")[1];


    for (var j = 0; j < howMany; j++) {
        // move head of the snake
        switch (where) {
            case "U":
                snake[0].y++;
                //head.y++;
                break;
            case "D":
                snake[0].y--;
                //head.y--;
                break;
            case "R":
                snake[0].x++;
                //head.x++;
                break;
            case "L":
                snake[0].x--;
                //head.x--;
                break;
        }
        for (var k = 0; k < snake.length - 1; k++) {
            if (distanceBetween(snake[k], snake[k + 1]) == 2) {
                if (Math.abs(snake[k].x - snake[k + 1].x) > 1) {
                    // move horizontally
                    snake[k + 1].x += (snake[k].x - snake[k + 1].x) >= 1 ? 1 : -1;
                }
                if (Math.abs(snake[k].y - snake[k + 1].y) > 1) {
                    // move vertically
                    snake[k + 1].y += (snake[k].y - snake[k + 1].y) >= 1 ? 1 : -1;
                }

            } else if (distanceBetween(snake[k], snake[k + 1]) > 2) {
                snake[k + 1].x += (snake[k].x - snake[k + 1].x) >= 1 ? 1 : -1;
                snake[k + 1].y += (snake[k].y - snake[k + 1].y) >= 1 ? 1 : -1;
            }



            if (snake[k].x > max.x) {
                max.x = snake[k].x;
            }
            if (snake[k].x < min.x) {
                min.x = snake[k].x;
            }

            if (snake[k + 1].x > max.x) {
                max.x = snake[k + 1].x;
            }
            if (snake[k + 1].x < min.x) {
                min.x = snake[k + 1].x;
            }

            if (snake[k].y > max.y) {
                max.y = snake[k].y;
            }
            if (snake[k].y < min.y) {
                min.y = snake[k].y;
            }

            if (snake[k + 1].y > max.y) {
                max.y = snake[k + 1].y;
            }
            if (snake[k + 1].y < min.y) {
                min.y = snake[k + 1].y;
            }


            var contains = false;
            if (k == snake.length - 2) {
                for (var l = 0; l < tailPositions.length; l++) {
                    if (snake[k + 1].equals(tailPositions[l])) {
                        contains = true;
                        break;
                    }
                }
                if (!contains) {
                    tailPositions.push(snake[k + 1].copy());
                }
            }



        }

        var snakeCopy = [];
        for(var k = 0; k < snake.length; k++){
            snakeCopy.push(snake[k].copy());
        }
        steps.push(snakeCopy);

    }

}


for (var i = 0; i < steps.length; i++) {
    //renderMove(steps[i]);
}


console.log(tailPositions.length);



function distanceBetween(a, b) {
    return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
}

function renderMove(snake) {
    for (var y = max.y; y >= min.y; y--) {
        var out = "";
        for (var x = min.x; x <= max.x; x++) {
            var add = "."
            for (var i = snake.length - 1; i >= 0; i--) {
                var tag = "";
                if (i == 0) {
                    tag = "H";
                } else {
                    tag = i.toString();
                }

                if (x == snake[i].x && y == snake[i].y) {
                    add = tag;
                }
            }
            out += add;

        }
        console.log(out);
    }
    console.log("\n");
}

