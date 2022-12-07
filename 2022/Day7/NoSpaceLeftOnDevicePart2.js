class TreeNode {
    constructor(key, value = key, parent = null, type, size) {
        this.key = key;
        this.parent = parent;
        this.value = parent ? (parent.value + "/") : "" + key;
        this.children = [];
        this.type = type;
        this.size = size;

        this.updateParentSize();
    }

    get isLeaf() {
        return this.children.length === 0;
    }

    get hasChildren() {
        return !this.isLeaf;
    }

    updateParentSize() {
        var current = this;
        var parent = this.parent;
        while (parent != null) {
            if (current.size != null || typeof (current.size) != "undefined" || current.size != 'NaN') {
                parent.size += current.size;
            } else {
                parent.size = current.size;
            }

            current = parent;
            parent = current.parent;
        }
    }
}

class Tree {
    constructor(key, value = key, type, size) {
        this.root = new TreeNode(key, value, null, type, size);
    }

    *preOrderTraversal(node = this.root) {
        yield node;
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.preOrderTraversal(child);
            }
        }
    }

    *preOrderTraversalDir(node = this.root) {
        yield node;
        if (node.type == "dir") {
            console.log(node.key + " " + node.size);
        }
        if (node.children.length) {
            for (let child of node.children) {

                yield* this.preOrderTraversal(child);
            }
        }
    }

    *postOrderTraversal(node = this.root) {
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.postOrderTraversal(child);
            }
        }
        yield node;
    }

    insert(parentNodeKey, key, value = key, type, size) {
        for (let node of this.preOrderTraversal()) {
            if (type == "file") {
                if (node.key === parentNodeKey && node.type == "dir") {
                    node.children.push(new TreeNode(key, value, node, type, size));
                    return true;
                }
            } else {
                if (node.key === parentNodeKey) {
                    node.children.push(new TreeNode(key, value, node, type, size));
                    return true;
                }
            }

        }
        return false;
    }

    remove(key) {
        for (let node of this.preOrderTraversal()) {
            const filtered = node.children.filter(c => c.key !== key);
            if (filtered.length !== node.children.length) {
                node.children = filtered;
                return true;
            }
        }
        return false;
    }

    find(key) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === key) return node;
        }
        return undefined;
    }
    outputDirs(node = this.root) {
        /*if (node.type == "dir" && node.size <= 100000) {
            totalSize += node.size;
            console.log(node.key + " " + node.size);
        }*/

        if (node.children.length) {
            for (let child of node.children) {
                this.outputDirs(child);
            }
        }
    }
    outputStructure(node = this.root, level) {
        var output = "";
        for (var k = 0; k < level; k++) {
            output += "\t";
        }
        output += "- " + node.key + " (" + node.type + "," + node.size + ")";
        console.log(output);

        if (node.children.length) {
            for (let child of node.children) {
                this.outputStructure(child, level + 1);
            }
        }
    }
    recalcSizes(node = this.root) {
        var dirSize = 0;
        if (node.children.length) {
            for (let child of node.children) {
                if (child.type == "dir") {
                    dirSize += this.recalcSizes(child);
                } else {
                    dirSize += child.size;
                }

            }
        }
        node.size = dirSize;
        if (node.type == "dir") {
            directories.push({ key: node.key, size: node.size });

        }
        return dirSize;
    }
}

class Filedef {
    constructor(fileName, size) {
        this.fileName = fileName;
        this.size = size;
    }
}



var fs = require("fs");

var test = false;
var inputArray = null;
if (test) {
    inputArray = fs.readFileSync("2022/Day7/input/test.txt").toString().split(/\r?\n/);
} else {
    inputArray = fs.readFileSync("2022/Day7/input/puzzle.txt").toString().split(/\r?\n/);
}

var directories = [];

var tree = new Tree("/", "/", "dir", 0);
var currentDir = tree.root;
var lsmode = false;

var totalSize = 0;
for (var i = 0; i < inputArray.length; i++) {
    var line = inputArray[i];

    if (line.startsWith("$ cd")) {
        lsMode = false;
        var whereTo = line.split(' ')[2];
        if (whereTo == '..') {
            currentDir = currentDir.parent ? currentDir.parent : currentDir;
        } else {
            var children = currentDir.children;
            for (var j = 0; j < children.length; j++) {
                if (children[j].key == whereTo && children[j].type == "dir") {
                    currentDir = children[j];
                    break;
                }
            }
        }
    } else if (line.startsWith("$ ls")) {
        lsMode = true;
    } else {
        if (lsMode) {
            if (line.startsWith("dir")) {
                var whatDir = line.split(' ')[1];
                var children = currentDir.children;
                var addDir = true;
                if (children != null) {
                    for (var j = 0; j < children.length; j++) {
                        if (children[j].key == whatDir) {
                            addDir = false;
                        }
                    }
                    if (addDir) {
                        var child = new TreeNode(whatDir, null, currentDir, "dir", 0);
                        currentDir.children.push(child);
                        //tree.insert(currentDir.key, whatDir, null, "dir", 0);
                    }
                }
            } else {
                var fileSize = parseInt(line.split(' ')[0]);
                var fileName = line.split(' ')[1];
                var child = new TreeNode(fileName, null, currentDir, "file", fileSize);
                currentDir.children.push(child);
                //tree.insert(currentDir.key, fileName, null, "file", fileSize);
            }
        }
    }
}


tree.recalcSizes();
//tree.outputStructure(tree.root, 0);;
//console.log(tree.root.size);

directories.sort((a, b) => { return a.size - b.size });



for (var i = 0; i < directories.length; i++) {
    //console.log(directories[i].key + " " + directories[i].size);
    if (70000000 - tree.root.size + directories[i].size >= 30000000) {
        console.log(directories[i].size);
        break;
    }
}