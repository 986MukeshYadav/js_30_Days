// Day 17: Data Structures
// Tasks/Activities:
// Activity 1: Linked List
// • Task 1: Implement a Node class to represent an element in a linked list with properties value and next .
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// • Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove() {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display();
list.remove();
list.display(); 




// Activity 2: Stack
// • Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop()); 
console.log(stack.peek()); 


// • Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversedStr = '';
    while (stack.peek() !== null) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

// Example usage
console.log(reverseString("hello")); 


// Activity 3: Queue
// • Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.shift();
    }

    front() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[0];
    }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front()); 
console.log(queue.dequeue()); 
console.log(queue.front()); 


// • Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
function simulatePrinterQueue(jobs) {
    const printerQueue = new Queue();
    for (let job of jobs) {
        printerQueue.enqueue(job);
    }
    while (printerQueue.front() !== null) {
        console.log(`Printing job: ${printerQueue.dequeue()}`);
    }
}

simulatePrinterQueue(["job1", "job2", "job3"]);


// Activity 4: Binary Tree
// • Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// • Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.inOrder(); 

// Activity 5: Graph (Optional)
// • Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    bfs(startingNode) {
        const visited = new Set();
        const queue = [startingNode];

        while (queue.length > 0) {
            const currentNode = queue.shift();
            if (!visited.has(currentNode)) {
                console.log(currentNode);
                visited.add(currentNode);
                const neighbors = this.adjacencyList.get(currentNode);
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }
    }
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.bfs('A'); 


// • Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.