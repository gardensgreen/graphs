function breadthFirstSearch(startingNode, targetVal) {
    let queue = [startingNode];
    let visited = new Set();
    while (queue.length) {
        let node = queue.shift();
        if (visited.has(node)) {
            continue;
        } else {
            visited.add(node);
        }
        if (node.val === targetVal) return node;
        queue.push(...node.neighbors);
    }
    return null;
    // for (let i = 0; i < current.neighbors.length; i++) {
    //     for (let j = 0; j < current.neighbors.length; j++) {
    //         if (current.neighbors[j].val === targetVal) {
    //             console.log(current.neighbors[j]);
    //             console.log(targetVal);
    //             return current.neighbors[j];
    //         }
    //     }
    //     current = current.neighbors[i];
    // }
    // return null;
}

// it('should return the GraphNode that has the targetVal', () => {
//     let a = new GraphNode('a');
//     let b = new GraphNode('b');
//     let c = new GraphNode('c');
//     a.neighbors = [b, c];
//     expect(breadthFirstSearch(a, 'c')).to.equal(c);
//     expect(breadthFirstSearch(a, 'a')).to.equal(a);

module.exports = {
    breadthFirstSearch,
};

// {
//     a: [b, c];
//     b: [];
//     c: [];
// }

// breadthFirstSearch(a, "c");
// targetVertex = { val: c, neighbors: [] };
