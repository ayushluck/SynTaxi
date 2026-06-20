export class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export class GraphNode {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

export function arrayToTree(values) {
    if (!Array.isArray(values) || values.length === 0 || values[0] == null) {
        return null;
    }

    const root = new TreeNode(values[0]);
    const queue = [root];
    let valueIndex = 1;
    let queueIndex = 0;

    while (queueIndex < queue.length && valueIndex < values.length) {
        const node = queue[queueIndex++];
        const leftValue = values[valueIndex++];

        if (leftValue != null) {
            node.left = new TreeNode(leftValue);
            queue.push(node.left);
        }

        if (valueIndex >= values.length) break;

        const rightValue = values[valueIndex++];
        if (rightValue != null) {
            node.right = new TreeNode(rightValue);
            queue.push(node.right);
        }
    }

    return root;
}

export function treeToArray(root) {
    if (!root) return [];

    const values = [];
    const queue = [root];
    let queueIndex = 0;

    while (queueIndex < queue.length) {
        const node = queue[queueIndex++];

        if (!node) {
            values.push(null);
            continue;
        }

        values.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
    }

    while (values.at(-1) == null) values.pop();
    return values;
}

export function adjacencyListToGraph(adjacencyList) {
    if (!Array.isArray(adjacencyList) || adjacencyList.length === 0) {
        return null;
    }

    const nodes = adjacencyList.map((_, index) => new GraphNode(index + 1));

    adjacencyList.forEach((neighbors, index) => {
        nodes[index].neighbors = neighbors
            .map((value) => nodes[value - 1])
            .filter(Boolean);
    });

    return nodes[0];
}

export function graphToAdjacencyList(node) {
    if (!node) return [];

    const nodesByValue = new Map();
    const queue = [node];
    let queueIndex = 0;

    while (queueIndex < queue.length) {
        const current = queue[queueIndex++];
        if (nodesByValue.has(current.val)) continue;

        nodesByValue.set(current.val, current);
        current.neighbors.forEach((neighbor) => {
            if (!nodesByValue.has(neighbor.val)) queue.push(neighbor);
        });
    }

    const maxValue = Math.max(...nodesByValue.keys());
    return Array.from({ length: maxValue }, (_, index) => {
        const current = nodesByValue.get(index + 1);
        return current ? current.neighbors.map((neighbor) => neighbor.val) : [];
    });
}
