function maxValue(node, visited=new Set()) {
    let queue = [node];
    while (queue.length) {
        let storedNode = queue.shift();
        if (visited.has(storedNode)) {
            continue;
        } else {
            visited.add(storedNode);
        }
        queue.push(...storedNode.neighbors);
    }

    let max = 0;
    for (let item of visited) {
        if (item.val > max) {
            max = item.val;
        }
    } return max;
}

module.exports = {
    maxValue
};
