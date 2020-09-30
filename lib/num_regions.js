function numRegions(graph) {
    if (graph === {}) {
        return 0;
    } else {
        let numOfRegions = 0;
        let neighborsValues = [];
        for (let nodeVal in graph) {
            graph[nodeVal].forEach((neighbor) => {
                neighborsValues.push(neighbor);
            })
            if (neighborsValues.includes(nodeVal)) {
                continue;
            } else {
                numOfRegions ++;
                neighborsValues = graph[nodeVal];
            }
        }
        return numOfRegions;
    }

}

//iterate each nodeVal(key) to get neighbor array
//store neighbor array[i] to new array and numofregions++
//iterate to new nodeVal(key)
//check if nodeVal is in region array
//      if included = continue
//      if not - create new region array; numregion ++

module.exports = {
    numRegions
};
