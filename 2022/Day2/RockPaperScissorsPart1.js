/*var inputArray = [
    "A Y",
    "B X",
    "C Z"
]*/


var inputArray = [
    "B Y",
    "A Y",
    "B Z",
    "A Z",
    "A Y",
    "B Z",
    "C X",
    "C X",
    "C X",
    "C Y",
    "C Z",
    "B Y",
    "C Y",
    "C Z",
    "A Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "B Z",
    "A X",
    "A Z",
    "C Z",
    "C Y",
    "C Y",
    "B Y",
    "B X",
    "C Z",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Z",
    "B Z",
    "B Y",
    "A Y",
    "A Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "A Y",
    "B Y",
    "C Z",
    "B Y",
    "B Y",
    "A Z",
    "B Y",
    "A Y",
    "B Y",
    "B Z",
    "C Y",
    "C Z",
    "A Z",
    "C Z",
    "B Y",
    "A X",
    "C Z",
    "A X",
    "A Z",
    "B Y",
    "B Y",
    "A Y",
    "C Z",
    "B Y",
    "B Z",
    "B Z",
    "B X",
    "C Y",
    "B Y",
    "A Y",
    "A Y",
    "B Y",
    "A Z",
    "B X",
    "B Y",
    "B Y",
    "C Y",
    "C Z",
    "A Z",
    "B Y",
    "A Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "C Y",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "C X",
    "B Y",
    "B Y",
    "C Z",
    "C Z",
    "A X",
    "A X",
    "A X",
    "A X",
    "B Y",
    "C Z",
    "B Z",
    "B Y",
    "C Z",
    "B Y",
    "B Z",
    "B Y",
    "C X",
    "B Y",
    "C X",
    "C Z",
    "B Z",
    "C Z",
    "C Y",
    "B Y",
    "B Y",
    "A Z",
    "C Z",
    "C Y",
    "C Y",
    "B Y",
    "B X",
    "C Y",
    "B Z",
    "C Z",
    "C Z",
    "A Z",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "C X",
    "A Z",
    "A Y",
    "B Y",
    "C Y",
    "B X",
    "C Y",
    "C X",
    "C Y",
    "A Y",
    "B Y",
    "A Y",
    "A Z",
    "C Z",
    "C Z",
    "A Z",
    "C Y",
    "B Y",
    "C Z",
    "C Y",
    "B Y",
    "B Y",
    "C X",
    "B Y",
    "B Y",
    "C Y",
    "C X",
    "B X",
    "C Y",
    "A Z",
    "B Y",
    "A Z",
    "C Y",
    "C Z",
    "B Y",
    "A Z",
    "C X",
    "C X",
    "B Y",
    "B Y",
    "C Z",
    "B Y",
    "A Y",
    "B Y",
    "A Z",
    "A X",
    "A Y",
    "B Y",
    "B Y",
    "A Y",
    "C Z",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "C Z",
    "C Y",
    "B Y",
    "A Y",
    "A Z",
    "C Y",
    "B Y",
    "B Y",
    "B Z",
    "B Z",
    "B Z",
    "A Y",
    "B Z",
    "B Y",
    "C Y",
    "B Y",
    "C X",
    "C Y",
    "C Y",
    "B Y",
    "A Y",
    "A Z",
    "B Y",
    "B Y",
    "A Y",
    "C X",
    "C X",
    "B Y",
    "A Z",
    "A X",
    "C Y",
    "C Y",
    "C Y",
    "C X",
    "C Y",
    "B Y",
    "B Z",
    "B Y",
    "B X",
    "A Z",
    "B Y",
    "B Z",
    "A X",
    "B Y",
    "C Z",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B X",
    "C Z",
    "C Z",
    "A Y",
    "B Y",
    "C Y",
    "A Y",
    "C X",
    "C Z",
    "A Z",
    "C Y",
    "B Y",
    "B Y",
    "C Z",
    "A Z",
    "C Y",
    "C X",
    "C Z",
    "B X",
    "B Y",
    "C Y",
    "B Y",
    "C X",
    "B Y",
    "A X",
    "B Y",
    "B Y",
    "A Z",
    "B Y",
    "B Y",
    "C X",
    "B Y",
    "A X",
    "A Y",
    "B Y",
    "A Y",
    "C Y",
    "C X",
    "C X",
    "B Z",
    "B Y",
    "C Y",
    "C Y",
    "C Y",
    "B Y",
    "A Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "A Z",
    "B Y",
    "B Y",
    "A Z",
    "B Y",
    "C Z",
    "C Y",
    "B Y",
    "B Z",
    "A Y",
    "B Y",
    "A Z",
    "C Z",
    "B Y",
    "C Z",
    "B Z",
    "B Z",
    "A X",
    "A Z",
    "C Z",
    "B Y",
    "A Y",
    "C Z",
    "C Y",
    "B Y",
    "B X",
    "B Y",
    "C Y",
    "C Y",
    "C Y",
    "C X",
    "C Y",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "C Z",
    "C Z",
    "B Y",
    "A Y",
    "C Y",
    "B Z",
    "C X",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "C Z",
    "B Z",
    "B Y",
    "A Y",
    "B Y",
    "A Z",
    "B Y",
    "B Z",
    "B Y",
    "B Z",
    "B Y",
    "B Z",
    "C Z",
    "C Z",
    "A X",
    "A Y",
    "B Y",
    "C Z",
    "C Y",
    "B Z",
    "A Y",
    "A X",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "A Z",
    "C Z",
    "C Z",
    "C Z",
    "A Z",
    "B Y",
    "B Z",
    "B Y",
    "A Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "A X",
    "C Y",
    "B Y",
    "C Z",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "A Z",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "B Z",
    "A Z",
    "C Y",
    "C X",
    "C X",
    "B Y",
    "C Z",
    "B Z",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "A Z",
    "B Z",
    "A Z",
    "B Z",
    "A Z",
    "B Y",
    "B X",
    "B Y",
    "C Z",
    "C Y",
    "B Y",
    "A Z",
    "A Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "A Z",
    "B Z",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "C Z",
    "B Y",
    "C Y",
    "B Y",
    "C Y",
    "B Y",
    "A Z",
    "B Y",
    "A Z",
    "C Z",
    "C Y",
    "A Z",
    "A Y",
    "A Y",
    "A X",
    "A Y",
    "B Y",
    "B Z",
    "A X",
    "C X",
    "C Z",
    "B Y",
    "A Z",
    "A X",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "C Y",
    "C X",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "A Z",
    "C Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "A X",
    "B Z",
    "A Y",
    "C Z",
    "B Z",
    "B Y",
    "B Y",
    "C Y",
    "A Y",
    "C Y",
    "B Y",
    "B Y",
    "A X",
    "C X",
    "B Z",
    "C Y",
    "B Y",
    "B Z",
    "C Y",
    "B Y",
    "B Z",
    "B X",
    "B Y",
    "A Z",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "A Z",
    "A X",
    "A Z",
    "B Z",
    "A X",
    "C Y",
    "B Z",
    "B Y",
    "B X",
    "A X",
    "C Y",
    "C X",
    "A Y",
    "B Z",
    "B Y",
    "A X",
    "A Z",
    "C X",
    "C Z",
    "B Z",
    "C X",
    "C X",
    "B Y",
    "A Y",
    "B Y",
    "B Y",
    "C Z",
    "A X",
    "C X",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "B Z",
    "B Y",
    "B Y",
    "C X",
    "B X",
    "B Y",
    "C X",
    "A Z",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "C Z",
    "B Y",
    "C X",
    "C X",
    "B Z",
    "B Z",
    "B Z",
    "B X",
    "B Y",
    "C Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "C Z",
    "A Y",
    "C Y",
    "B Y",
    "B Y",
    "A Z",
    "C Z",
    "B Y",
    "B Y",
    "A Y",
    "B Y",
    "C Z",
    "C Z",
    "B Y",
    "A Y",
    "A Y",
    "C Y",
    "B Z",
    "B Z",
    "C X",
    "B Y",
    "C X",
    "B Z",
    "C Z",
    "A Z",
    "A Y",
    "B Z",
    "C X",
    "B Y",
    "A X",
    "A Z",
    "A Y",
    "B Y",
    "B X",
    "B Z",
    "A Z",
    "B Z",
    "A X",
    "A X",
    "A Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "C Z",
    "B Y",
    "A X",
    "B Y",
    "C Y",
    "B Z",
    "C X",
    "B Y",
    "B Y",
    "B Z",
    "A Z",
    "B Y",
    "C Z",
    "B Y",
    "C Y",
    "B Y",
    "A Y",
    "B Y",
    "B Y",
    "A Z",
    "A Y",
    "C Y",
    "B Y",
    "B Z",
    "C Y",
    "B Y",
    "B Y",
    "C Z",
    "B Y",
    "C Z",
    "A X",
    "A Z",
    "B Y",
    "B Y",
    "C Z",
    "B Y",
    "B Y",
    "C Y",
    "A X",
    "C Z",
    "B Y",
    "A Y",
    "B Y",
    "A X",
    "A Z",
    "B Z",
    "B Z",
    "B Y",
    "B Y",
    "C Y",
    "A Y",
    "C X",
    "B Y",
    "A Z",
    "C Y",
    "C X",
    "A Y",
    "A Z",
    "C X",
    "C Z",
    "A Y",
    "B Y",
    "B Y",
    "C X",
    "B Y",
    "A Y",
    "B Z",
    "A X",
    "C Z",
    "A X",
    "B Z",
    "A Z",
    "A Z",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "A X",
    "A Y",
    "A Y",
    "B Y",
    "B Y",
    "C Z",
    "A Y",
    "B Z",
    "B Y",
    "C Y",
    "A X",
    "B Y",
    "A X",
    "A X",
    "A Z",
    "C Y",
    "A Z",
    "C Z",
    "B Y",
    "B Y",
    "B Y",
    "A X",
    "B Z",
    "C Z",
    "A X",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "C Y",
    "C Y",
    "C Z",
    "A Y",
    "C Y",
    "B Z",
    "B Y",
    "C Y",
    "B Y",
    "C Y",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "A Z",
    "A X",
    "B Y",
    "B Z",
    "A Z",
    "A Z",
    "B Y",
    "B Y",
    "A Z",
    "A Y",
    "A Z",
    "A Z",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "B Z",
    "B Y",
    "C Z",
    "A Z",
    "A Y",
    "B Y",
    "B X",
    "C Y",
    "C Y",
    "A Z",
    "A X",
    "B Y",
    "A X",
    "B Y",
    "C Z",
    "B Y",
    "C X",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "A Y",
    "B Y",
    "C X",
    "B Z",
    "B Y",
    "B Y",
    "C Z",
    "B Y",
    "B Y",
    "A Z",
    "B Z",
    "B Y",
    "B Z",
    "B X",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "C Y",
    "B Y",
    "A Z",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "C Z",
    "A X",
    "B Y",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "A Y",
    "B Z",
    "B Y",
    "B Y",
    "C Y",
    "A X",
    "A X",
    "B X",
    "C Y",
    "B Y",
    "A Y",
    "B Y",
    "B Z",
    "B Y",
    "C Y",
    "B Z",
    "B Z",
    "A Y",
    "A Y",
    "C Z",
    "B Y",
    "C Z",
    "C X",
    "A Y",
    "B Y",
    "A Y",
    "A X",
    "B Y",
    "C Y",
    "A Z",
    "B Y",
    "B Y",
    "B Y",
    "A Z",
    "B Y",
    "A X",
    "C X",
    "A X",
    "B Z",
    "C Y",
    "A X",
    "C Y",
    "A Z",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "C Z",
    "A Z",
    "B Z",
    "B Z",
    "C Z",
    "B Y",
    "A Y",
    "B Z",
    "B Z",
    "A Y",
    "B Z",
    "C Z",
    "C Y",
    "C X",
    "C Z",
    "C X",
    "B Y",
    "A X",
    "B Z",
    "B Y",
    "A X",
    "B Y",
    "B Y",
    "B Z",
    "C Y",
    "C Z",
    "C Y",
    "B Y",
    "B Y",
    "B Z",
    "A X",
    "B Y",
    "A X",
    "B Z",
    "A Z",
    "A Z",
    "B Y",
    "C Y",
    "C Y",
    "C Y",
    "B Y",
    "A Z",
    "B Z",
    "B Z",
    "C Y",
    "A Y",
    "A Y",
    "A Z",
    "B Y",
    "A X",
    "B Z",
    "C X",
    "B Z",
    "B Y",
    "A Y",
    "A Y",
    "C Y",
    "A Z",
    "B X",
    "A X",
    "C Y",
    "B Y",
    "B Y",
    "C Y",
    "B Z",
    "C X",
    "C Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "C Y",
    "B X",
    "A Z",
    "B Z",
    "B Y",
    "A Z",
    "B Z",
    "B Y",
    "A Z",
    "C Y",
    "C Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "C Y",
    "C Z",
    "B Y",
    "B Y",
    "A Z",
    "B Y",
    "B Z",
    "A Y",
    "A Y",
    "C Y",
    "A Z",
    "C Y",
    "B Z",
    "B Y",
    "C Y",
    "B Z",
    "C Y",
    "A Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C Z",
    "A Y",
    "A X",
    "C X",
    "A Y",
    "C Y",
    "C X",
    "B Y",
    "C Y",
    "A Y",
    "B Y",
    "C Y",
    "B Y",
    "A X",
    "B Y",
    "B Y",
    "B Z",
    "C Y",
    "C Y",
    "A X",
    "B Z",
    "A Z",
    "B Y",
    "B Y",
    "B Y",
    "B X",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "C X",
    "A Y",
    "B Y",
    "B Y",
    "A Z",
    "C X",
    "A X",
    "A X",
    "C X",
    "B Y",
    "C Z",
    "B Y",
    "A Z",
    "C Y",
    "B Y",
    "B Y",
    "C X",
    "B Z",
    "C Y",
    "A X",
    "A Y",
    "C Y",
    "A Z",
    "B Y",
    "B Z",
    "C Y",
    "A Z",
    "A Y",
    "A Y",
    "B Y",
    "A X",
    "B Z",
    "B X",
    "B Z",
    "B Y",
    "B Y",
    "A Y",
    "C Y",
    "B Y",
    "B Z",
    "B Y",
    "A Y",
    "C Y",
    "C Y",
    "A X",
    "B Y",
    "A X",
    "C X",
    "A Z",
    "A Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "A X",
    "B Z",
    "A X",
    "C Y",
    "C Z",
    "A X",
    "B Z",
    "C X",
    "B Y",
    "B Y",
    "A Y",
    "B Z",
    "B X",
    "B Y",
    "B Y",
    "A Z",
    "C Y",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "A X",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "A Y",
    "A Z",
    "B Y",
    "B Y",
    "A Y",
    "A Z",
    "A Z",
    "A Y",
    "B Y",
    "A Y",
    "B Z",
    "B Y",
    "B Y",
    "A Z",
    "B Y",
    "B Y",
    "B X",
    "A X",
    "B Y",
    "B Y",
    "C Z",
    "C X",
    "A Y",
    "B Z",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "A X",
    "A Y",
    "B Y",
    "C Z",
    "B Y",
    "B Y",
    "B Y",
    "C Z",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "C Y",
    "C Y",
    "A X",
    "C Y",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "A Y",
    "A Y",
    "C X",
    "B Y",
    "C Z",
    "A X",
    "B X",
    "C Z",
    "C Y",
    "B Y",
    "B Y",
    "B X",
    "B Z",
    "C Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C Z",
    "C Y",
    "C Y",
    "A Y",
    "B Y",
    "B Z",
    "B Y",
    "C Z",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Z",
    "B Z",
    "B Y",
    "C Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "A Y",
    "C X",
    "A Z",
    "A Y",
    "B Y",
    "C X",
    "B Z",
    "B Y",
    "C Y",
    "B Y",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "A Z",
    "A Z",
    "B Y",
    "B Y",
    "B Z",
    "A Z",
    "C Y",
    "C Y",
    "C Y",
    "C Z",
    "B Y",
    "C Y",
    "C X",
    "A Z",
    "B Z",
    "B X",
    "B X",
    "C Y",
    "B Y",
    "A Z",
    "B Z",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "B X",
    "B Y",
    "B Y",
    "A Z",
    "A Z",
    "A Y",
    "B Z",
    "B Y",
    "A Y",
    "B Y",
    "A Z",
    "B Y",
    "B Y",
    "A X",
    "B Z",
    "C Y",
    "A Z",
    "C Y",
    "C Y",
    "B Y",
    "C X",
    "C Y",
    "A X",
    "A Z",
    "C Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "C Y",
    "C Y",
    "C Y",
    "B Y",
    "B Y",
    "C Y",
    "C Y",
    "A X",
    "B X",
    "C X",
    "C Z",
    "B Y",
    "A Y",
    "A Z",
    "B Y",
    "C Y",
    "C Z",
    "B Y",
    "A Y",
    "C Y",
    "B Y",
    "A Y",
    "B Y",
    "A Y",
    "C Z",
    "C Y",
    "A Y",
    "A Z",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "C Z",
    "B Y",
    "B Y",
    "C Z",
    "A Y",
    "B Y",
    "C Y",
    "B Y",
    "A X",
    "B Y",
    "B Y",
    "A Y",
    "B Y",
    "B Y",
    "A X",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "C Z",
    "C Y",
    "A Z",
    "B Y",
    "C Y",
    "C Z",
    "B Y",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "B Z",
    "C Y",
    "C X",
    "A X",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "C Y",
    "B Y",
    "C X",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "A Y",
    "A Y",
    "A Z",
    "B Y",
    "C Y",
    "A Y",
    "A X",
    "B Z",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "A Y",
    "B Y",
    "C Y",
    "C Z",
    "B X",
    "B Z",
    "B Y",
    "B Y",
    "C Y",
    "B X",
    "A Y",
    "C Y",
    "B Y",
    "C Y",
    "C X",
    "A Y",
    "B Y",
    "B Z",
    "C Z",
    "B Y",
    "B Y",
    "C Z",
    "A Z",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Z",
    "B Z",
    "C Y",
    "B Y",
    "A Z",
    "C Y",
    "C Y",
    "B Y",
    "A Z",
    "B Y",
    "B Y",
    "B Y",
    "A Y",
    "A X",
    "C Y",
    "C Z",
    "C Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "C X",
    "C Y",
    "A Z",
    "C X",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "A X",
    "A X",
    "C X",
    "B Y",
    "B Y",
    "B Y",
    "A Z",
    "B Z",
    "B Z",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "C Y",
    "A Z",
    "C Y",
    "B Y",
    "B Z",
    "A Z",
    "A Y",
    "B Z",
    "A Z",
    "B Y",
    "B Y",
    "A Z",
    "B Y",
    "C Z",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "A Z",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "A Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "C Z",
    "C Y",
    "C X",
    "B Y",
    "A X",
    "C Y",
    "B Z",
    "C Y",
    "B Y",
    "C X",
    "A Y",
    "B Y",
    "A Z",
    "A X",
    "B Z",
    "C Y",
    "C Y",
    "A Z",
    "C Z",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "A Y",
    "A Z",
    "B Y",
    "B Y",
    "A Y",
    "C X",
    "B Y",
    "B Y",
    "C Y",
    "C X",
    "B X",
    "C Y",
    "B Y",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "A Z",
    "B Y",
    "A Z",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "C Y",
    "B Y",
    "A Y",
    "B Y",
    "A Y",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "C X",
    "B Y",
    "B Y",
    "C X",
    "C Z",
    "C Z",
    "B Y",
    "B Z",
    "B Y",
    "A Y",
    "B Y",
    "A Y",
    "B Y",
    "C Y",
    "A Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "A Y",
    "C Y",
    "C Z",
    "C X",
    "C Y",
    "C X",
    "C Y",
    "B Y",
    "C Z",
    "C Z",
    "B Y",
    "A Z",
    "B Z",
    "B X",
    "C Y",
    "A Y",
    "C Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "B Y",
    "C Y",
    "C X",
    "C Y",
    "C X",
    "B Y",
    "A Y",
    "A Y",
    "B Y",
    "C X",
    "C X",
    "C X",
    "C X",
    "C X",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "C Z",
    "C Y",
    "B Y",
    "A Y",
    "C Z",
    "B Y",
    "B Y",
    "A Y",
    "B Y",
    "C Y",
    "A Z",
    "B Y",
    "A Z",
    "C X",
    "C Y",
    "C Y",
    "A X",
    "C Y",
    "C Z",
    "B Y",
    "B Y",
    "C Y",
    "B Z",
    "B Z",
    "B Y",
    "A Z",
    "A X",
    "B Y",
    "B Y",
    "A Z",
    "C Y",
    "C Z",
    "A Z",
    "C Z",
    "B Y",
    "C Y",
    "B Z",
    "C Z",
    "C Y",
    "A X",
    "A Y",
    "B Z",
    "C Z",
    "B Y",
    "B Y",
    "C Z",
    "C X",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "A Y",
    "A Z",
    "B Y",
    "A Y",
    "B Y",
    "B Y",
    "A Z",
    "C X",
    "C Y",
    "B Y",
    "B Y",
    "A X",
    "B Y",
    "B Z",
    "C Y",
    "A Y",
    "C Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "B X",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "B Z",
    "B Y",
    "B X",
    "B Y",
    "B X",
    "B Z",
    "A X",
    "C X",
    "B Y",
    "B Y",
    "A Z",
    "C X",
    "A Y",
    "B Y",
    "B Z",
    "C Z",
    "B Y",
    "B Z",
    "A Y",
    "A Z",
    "B Y",
    "C Z",
    "B Y",
    "A Z",
    "B Y",
    "A Z",
    "A Y",
    "C Y",
    "B Y",
    "B Y",
    "A X",
    "C Y",
    "B Y",
    "A X",
    "B Y",
    "C Z",
    "A Z",
    "B Y",
    "B X",
    "A Y",
    "C Y",
    "B Z",
    "C Y",
    "B Y",
    "B Z",
    "A Y",
    "A Z",
    "B Y",
    "B Y",
    "A Z",
    "A X",
    "C Y",
    "B Z",
    "B Z",
    "B Y",
    "C Z",
    "C Y",
    "C Z",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "A X",
    "B Y",
    "B Y",
    "C X",
    "C Z",
    "B Y",
    "B Y",
    "A X",
    "B Y",
    "B Z",
    "C Z",
    "B Z",
    "A Y",
    "B Y",
    "B Z",
    "B Y",
    "C Y",
    "C Y",
    "B Y",
    "B Y",
    "B Z",
    "A X",
    "B Z",
    "B Y",
    "C Y",
    "A X",
    "B Y",
    "A Y",
    "B Z",
    "A Y",
    "B Y",
    "B Y",
    "B Z",
    "C Y",
    "C Y",
    "B Z",
    "C Y",
    "B Y",
    "C Y",
    "B Y",
    "A Z",
    "A Z",
    "C Z",
    "B Y",
    "B Y",
    "A Z",
    "B Z",
    "B Z",
    "C Y",
    "B Y",
    "B Y",
    "B Z",
    "C Y",
    "A Z",
    "C Y",
    "C Z",
    "C Z",
    "A Y",
    "B Y",
    "C Y",
    "B Z",
    "B Y",
    "C Z",
    "B Y",
    "B Y",
    "A X",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "A Z",
    "C Y",
    "A Y",
    "B Y",
    "B Y",
    "C Z",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "B X",
    "C Y",
    "B Y",
    "B Y",
    "A X",
    "C X",
    "A X",
    "B Z",
    "A Z",
    "B Y",
    "B Y",
    "C X",
    "B Z",
    "B Y",
    "B Z",
    "B Y",
    "C Z",
    "A X",
    "B Z",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "A Y",
    "B Y",
    "A X",
    "B Z",
    "C X",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "C Z",
    "B Y",
    "A Y",
    "A X",
    "C Y",
    "B Z",
    "B Z",
    "B Y",
    "B Y",
    "A Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "B X",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "C Z",
    "C Z",
    "A Z",
    "A Y",
    "C Y",
    "B Y",
    "C Z",
    "C Y",
    "C X",
    "B Y",
    "B Y",
    "A X",
    "A Y",
    "C X",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "C Z",
    "B Y",
    "C Z",
    "C Y",
    "B Z",
    "B Y",
    "B Y",
    "A X",
    "C Z",
    "C Y",
    "B Y",
    "B Y",
    "C Y",
    "C Y",
    "B Z",
    "B Y",
    "B Z",
    "B Y",
    "C Y",
    "B Y",
    "C Y",
    "B Y",
    "C Y",
    "C X",
    "B Y",
    "C Y",
    "B Y",
    "A Z",
    "B Y",
    "A Y",
    "C Y",
    "C Y",
    "B Y",
    "B Y",
    "C X",
    "A Z",
    "A X",
    "B Z",
    "B Y",
    "B Z",
    "A Z",
    "C Y",
    "A Y",
    "A X",
    "C Y",
    "A Y",
    "A Y",
    "C Z",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "B Y",
    "A X",
    "B Y",
    "B Y",
    "B Y",
    "A Z",
    "A X",
    "B Y",
    "C Y",
    "B Y",
    "A X",
    "B Z",
    "A Y",
    "A X",
    "A Z",
    "C Z",
    "B Z",
    "C X",
    "B Y",
    "A X",
    "B Z",
    "A Z",
    "B Y",
    "A Z",
    "B Y",
    "A Z",
    "C Z",
    "A Y",
    "B Y",
    "B Y",
    "A X",
    "B Y",
    "A X",
    "B Y",
    "A Z",
    "C Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "A Y",
    "C X",
    "C Y",
    "C Z",
    "B Y",
    "B Y",
    "A X",
    "C Z",
    "A Y",
    "B Y",
    "B Y",
    "C Z",
    "B Z",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "A Y",
    "C Z",
    "B Y",
    "A X",
    "B Y",
    "C Y",
    "B Y",
    "A X",
    "A X",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "A Y",
    "C X",
    "C Y",
    "C X",
    "A Y",
    "B Y",
    "B Y",
    "A Y",
    "B Y",
    "C Y",
    "C Z",
    "B Z",
    "B Y",
    "B Y",
    "C Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "C Y",
    "B Y",
    "C Z",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "A Z",
    "B Y",
    "B Z",
    "B Y",
    "B Z",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "A Y",
    "C X",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "C Z",
    "B Y",
    "A Z",
    "C Y",
    "C Z",
    "B Y",
    "B Y",
    "C Y",
    "B Z",
    "B Y",
    "A Y",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "B X",
    "B Z",
    "A X",
    "C Z",
    "B Z",
    "A Z",
    "B Y",
    "B Y",
    "A X",
    "A Y",
    "C Y",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "C Z",
    "C Z",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "A Z",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "A X",
    "B Y",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "C Z",
    "B Z",
    "C Y",
    "B Y",
    "B Z",
    "C Y",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "A Z",
    "C Z",
    "C Y",
    "B Y",
    "C X",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "B Y",
    "A Y",
    "B Z",
    "C Y",
    "C Y",
    "A Y",
    "B Z",
    "C X",
    "C Y",
    "C X",
    "A Z",
    "A X",
    "B Y",
    "C X",
    "B Y",
    "B Y",
    "B Z",
    "A Z",
    "B Z",
    "B X",
    "B Y",
    "B Z",
    "B Y",
    "B X",
    "A Y",
    "B Y",
    "C X",
    "A Z",
    "A X",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "A X",
    "C Z",
    "B Z",
    "B Z",
    "B Z",
    "A Y",
    "B Y",
    "B Y",
    "C X",
    "B Y",
    "A Y",
    "A Z",
    "B Z",
    "B Z",
    "B Y",
    "B Y",
    "C Y",
    "C Y",
    "C X",
    "B Y",
    "C Z",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "C X",
    "C X",
    "B Y",
    "B Y",
    "B Z",
    "B Y",
    "A Y",
    "B Y",
    "B Y",
    "A X",
    "B Y",
    "B Y",
    "B Z",
    "A Y",
    "B Y",
    "A X",
    "B X",
    "A Y",
    "C Y",
    "B Y",
    "B X",
    "A X",
    "B Y",
    "B Z",
    "A Y",
    "B Z",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "A Y",
    "B Y",
    "A Y",
    "B Y",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "A X",
    "A Y",
    "A Y",
    "A X",
    "B Z",
    "A X",
    "C Y",
    "C Y",
    "B Y",
    "A X",
    "B Y",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "C X",
    "C Y",
    "B Y",
    "C X",
    "C Y",
    "B Y",
    "B Y",
    "C Y",
    "B Y",
    "B Y",
    "B Y",
    "B Z",
    "A Z",
    "B Y",
    "B Z",
    "B Z",
    "A X",
    "C Z",
    "B Y",
    "C Z",
    "B Y",
    "C Z",
    "B Y",
    "A X",
    "C Y",
    "C Z",
    "A Z",
    "A Y",
    "B Y",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "A Y",
    "C Y",
    "C Y",
    "B Z",
    "B Y",
    "B Y",
    "B Z",
    "A Z",
    "A X",
    "C Z",
    "B Y",
    "B Y",
    "A X",
    "C Y",
    "A Y",
    "B Y",
    "A Y",
    "B Y",
    "B Z",
    "C Y",
    "C Z",
    "B Y",
    "A Y",
    "B Y",
    "C Z",
    "C Z",
    "A X",
    "A X",
    "C Z",
    "A X",
    "A Z",
    "B Y",
    "B Y",
    "C Z",
    "C Y",
    "C Z",
    "A X",
    "A X",
    "B Z",
    "B Y",
    "B Y",
    "A X",
    "B Y",
    "B Z",
    "C Y",
    "C X",
    "B Y",
    "C Z",
    "B Y",
    "C Z",
    "B Y",
    "B Z",
    "B Y",
    "C Y",
    "A Z",
    "B Y",
    "B Y",
    "A X",
    "A Z",
    "A X",
    "C Y",
    "B Y",
    "B Y",
    "C Z",
    "B Z",
    "C X",
    "B Y",
    "C Y",
    "C Y",
    "A Z",
    "C Z",
    "B Z",
    "B Y",
    "B Z",
    "B Y",
    "A Z",
    "A Y",
    "A Y",
    "A X",
    "B Z",
    "C Z",
    "C X",
    "B Y",
    "A X",
    "C X",
    "A Y",
    "B Y",
    "B Y",
    "B Y",
    "A Z",
    "B Y",
    "C X",
    "B Y",
    "A Z",
    "B Z",
    "B Z",
    "C Y",
    "B Y",
    "C X",
    "C X",
    "C Y",
    "C Y",
    "C Z",
    "C X",
    "B Y",
    "C Y",
    "C Y",
    "B Z",
    "B Y",
    "A Y",
    "B Z",
    "A X",
    "B Y",
    "A Z",
    "C Y",
    "B Y",
    "C Z",
    "B Y",
    "A X",
    "C Z",
    "B Z",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "B Y",
    "C Z",
    "A Z",
    "C Y",
    "A Z",
    "B Y",
    "C X",
    "C X",
    "A X",
    "A Y",
    "B Z",
    "C Y",
    "C X",
    "C X",
    "C Y",
    "C X",
    "B Y",
    "C X",
    "A Y",
    "C Z",
    "B Y",
    "B Z",
    "B Y",
    "A X",
    "B Y",
    "A Z",
    "A Y",
    "C X",
    "A X",
    "B X",
    "C X",
    "C Z",
    "C X",
    "A Y",
    "A Z",
    "B Y",
    "A Y"
];



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