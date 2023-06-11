/**
 * A linked list is a linear data structure, in which the elements are not stored 
 * at contiguous memory locations. The elements in a linked list are linked using pointers
 * as shown in the below image:
 **/

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    // Insert last node
    insertLast(value) {
        let node = new Node(value);
        let current;

        // If empty, make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    // Print linked list values
    printListValues() {
        let current = this.head;

        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertLast(300);

linkedList.printListValues(); // 200, 100, 300
