/*
Suppose we represent our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

dir
    subdir1
    subdir2
        file.ext
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

Note:

The name of a file contains at least a period and an extension.

The name of a directory or sub-directory will not contain a period.
*/

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    
    add(data) {
        this.children.push(new Node(data));
    }
    
    getLastChild() {
        return this.children[this.children.length - 1];
    }
    
    print(level = 0) {
        let tabs = '';
        for(let i = 0; i < level; i++) {
            tabs += '\t';
        }
        console.log(`${tabs}${this.data}\n`);
        for(let child of this.children) {
            child.print(level + 1);
        }
    }
    
    size() {
        return this.data.length + 1;
    }
    
    maxSize() {
        if(!this.children) {
            return this.size();
        } else {
            let maxSize = 0;
            for(let child of this.children) {
                let childSize = child.maxSize();
                if(childSize > maxSize) {
                    maxSize = childSize;
                }
            }
            return this.size() + maxSize;
        }
    }
}

function pathSize(files) {
    const arr = files.replace(/\n/g,'').split(/(\t)/g).filter((str) => str != '');
    let root = null;
    let node = null;
    let levelIndex = 0;
    
    for(let str of arr) {
        if(str === '\t') {
            levelIndex++;
        } else {
            if(root === null) {
                root = new Node(str);
            } else {
                node = root;
                for(let i = 1; i < levelIndex; i++) {
                    node = node.getLastChild();
                }
                node.add(str);
                levelIndex = 0;
            }
        }
    }
    
    root.print();
    return root.maxSize() - 1;
}

module.exports = pathSize;