import fs from 'fs';

function analyzeTree(node, level) {

    let sum = 0;
    let maxDepth = level;
    let count = 0;

    if (node) {
        sum = node.value;
        count = 1;

        let leftResult = analyzeTree(node.left, level + 1);
        let rightResult = analyzeTree(node.right, level + 1);

        sum += leftResult.sum + rightResult.sum;
        count += leftResult.count + rightResult.count;

        if (leftResult.maxDepth > maxDepth) {
            maxDepth = leftResult.maxDepth;
        }
        if (rightResult.maxDepth > maxDepth) {
            maxDepth = rightResult.maxDepth;
        }
    }

    return { sum, maxDepth, count };
}

const rawData = fs.readFileSync('./nodes.json', 'utf8');
const tree = JSON.parse(rawData);

const result = analyzeTree(tree, 1);

console.log("Sum:", result.sum);
console.log("Deepest Level:", result.maxDepth);
console.log("Number of Nodes:", result.count);
