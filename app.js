function findReachable(graph, startAt) {
    let set = new Set([startAt]);
    let startFound = false;
    for (let item of set) {
        for (let node of graph.edges) {
            if (node.from === item) {
                set.add(node.to);
                if (node.to === startAt) startFound = true
            }
        }
    }
    if (!startFound) set.delete(startAt);
    return set;
}

/*
 ASCII representation of graph:
 (1) ----> (2)       (6) ----> (5)
 ^          |         |
 |          |         |
 v          v         v
 (3) <---> (4) <---- (7)
*/

const graph = {
    "nodes": [
        {"id": 1},
        {"id": 2},
        {"id": 3},
        {"id": 4},
        {"id": 5},
        {"id": 6},
        {"id": 7}
    ],
    "edges": [
        {
            "from": 1,
            "to": 2
        },
        {
            "from": 2,
            "to": 4
        },
        {
            "from": 4,
            "to": 3
        },
        {
            "from": 3,
            "to": 1
        },
        {
            "from": 3,
            "to": 4
        },
        {
            "from": 1,
            "to": 3
        },
        {
            "from": 7,
            "to": 4
        },
        {
            "from": 6,
            "to": 5
        },
        {
            "from": 6,
            "to": 7
        }
    ]
};

const reached = findReachable(graph, 1);

module.exports.graph = graph;
module.exports.findReachable = findReachable;
