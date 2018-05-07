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
    let nodeArray = [root];
    nodeArray.push('s')
    
    let counters = [0];

    while (nodeArray.length > 1) {
        let node = nodeArray.shift();
        if (node === 's') {
            counters.push(0);
            //we have finished the current level, move end of level indicator to end of array
            nodeArray.push('s');

        } else {
            nodeArray.push(...node.children);
            counters[counters.length - 1]++;
        }
    }

    return counters;
}



module.exports = levelWidth;
