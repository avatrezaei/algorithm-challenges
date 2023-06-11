class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addEdge(v, w) {
        if(!this.adjacencyList.has(v)) {
            this.adjacencyList.set(v, []);
        }
        this.adjacencyList.get(v).push(w);
    }

    dfs(start) {
        let visited = new Map();
        this._dfsRecursive(start, visited);
    }

    _dfsRecursive(vertex, visited) {
        visited.set(vertex, true);
        console.log(vertex);

        let neighbours = this.adjacencyList.get(vertex);
        if(neighbours) {
            for(let neighbour of neighbours) {
                if(!visited.get(neighbour)) {
                    this._dfsRecursive(neighbour, visited);
                }
            }
        }
    }
}

// Create graph
let g = new Graph();

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('B', 'E');
g.addEdge('C', 'F');
g.addEdge('C', 'G');
g.addEdge('E', 'H');
g.addEdge('E', 'I');

g.dfs('A');  // It will print: A B D E H I C F G
