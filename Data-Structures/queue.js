/**
 * A Queue works on the principle of "First-in, first-out". Also known as "FIFO",
 * it is exactly the same way as waiting in a line for a movie theater, the first one to stand 
 * in line is the first one to buy a ticket and enjoy the movie.
 **/

class Queue {
    constructor() {
        this.items = [];
    }
    
    // Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove an element from the front of the queue
    dequeue() {
        if(this.isEmpty()) 
            return "Queue is empty";
        return this.items.shift();
    }

    // Check if the queue is empty
    isEmpty() {
        return !this.items.length;
    }

    // Get the length of the queue
    length() {
        return this.items.length;
    }

    // Get the element at the front of the queue
    front() {
        if(this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }
}

const queue = new Queue();
queue.enqueue("Apple");
queue.enqueue("Banana");
queue.enqueue("Cherry");

console.log(queue.front()); // Output: Apple
console.log(queue.dequeue()); // Output: Apple
console.log(queue.front()); // Output: Banana
