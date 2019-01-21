// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const nodes = [root, 'end'], width = [0]; 

    while(nodes.length) {
        let node = nodes.shift();
        if(node !== 'end') {
            nodes.push(...node.children);
            width[width.length - 1]++;
        } else if(nodes.length > 0) {
            nodes.push('end');
            width.push(0);
        }
    }
    return width;
}

module.exports = levelWidth;
