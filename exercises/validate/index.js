// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

//solution one
function validate(node, min = null, max = null) {
    if(max!==null && node.data > max){
        return false;
    }
    if(min!==null && node.data < min) {
        return false;
    }
    if(node.left && !validate(node.left, min, node.data)){
        return false;
    }
    if(node.right && !validate(node.right, node.data, max)){
        return false;
    }

    return true;
}

//my solution
// function validate(node, min = null, max = null) {
//     if(node.left){
//         max = node.data;
//         if(node.left.data < max){
//             return validate(node.left, min, max);
//         } else {
//             return false;
//         }
//     }
//     if(node.right){
//         min = node.data;
//         if(node.right.data > min){
//             return validate(node.right, min, max);
//         } else {
//             return false;
//         }
//     }

//     return true;
// }

module.exports = validate;
