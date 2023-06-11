/**
 * A Stack works on the principle of "Last-in, first-out". Also known as "LIFO", 
 * it allows access to only the last element inserted hence, the last element 
 * inserted is the first one to be removed.
 **/

class Stack {
    constructor() {
        this.items = [];
    }

    // Push element to the stack
    push(element) {
        this.items.push(element);
    }

    // Pop element from the stack
    pop() {
        if (this.isEmpty())
            return "Stack is empty";
        return this.items.pop();
    }

    // Peek the top element of the stack
    peek() {
        if (this.isEmpty())
            return "Stack is empty";
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return !this.items.length;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }
}

const stack = new Stack();
stack.push("Apple");
stack.push("Banana");
stack.push("Cherry");

console.log(stack.peek()); // Output: Cherry
console.log(stack.pop()); // Output: Cherry
console.log(stack.peek()); // Output: Banana

