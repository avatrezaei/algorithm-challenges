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

    bfs(start) {
        let visited = new Map();
        let queue = [start];

        while(queue.length > 0) {
            let vertex = queue.shift();

            if(!visited.get(vertex)) {
                console.log(vertex);
                visited.set(vertex, true);

                let neighbours = this.adjacencyList.get(vertex);
                if(neighbours) {
                    queue.push(...neighbours.filter(n => !visited.get(n)));
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

g.bfs('A');  // It will print: A B C D E F G H I
