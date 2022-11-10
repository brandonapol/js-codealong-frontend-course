//! User-defined data structures

//* Common data structures:
// Arrays
// Objects

// User defined data structures - 
// Stacks
// Queues
// Linked lists

let arr = [23, 4, 6, 15, 5, 7] // Declaring this is O(1)

// Constant time - 
let indexing = arr[3] // Instantaneous - adds 3 to the arr memory location

// Linear time O(n) and constant space O(1)
for (let i = 0; i < arr.length; i++) {
    console.log(i)
}

// Linear time and linear space O(n)
let arr_copy = [...arr]

// Let's make it bad - O(n**2)
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         console.log(`i is ${i}, j is ${j}`)
//     }
// }
// if arr.length is 5, it will run 25 times; if arr.length = 5000, this will end up running 25,000,000

//! Stacks
// ** Stacks ** as the name suggests is a data structure that allows for data to
//* follow the Last In First Out priciple(LIFO). 
//* Think of a stack of pancakes for example. 
//* To get the first pancake you would start with the top and go down.

// Searching through a stack will be Linear Time O(n) - Constant Space O(1)
// Selecting the last item will be done in Constant Time O(1) - Constant Space O(1)
// Adding to the stack should take Constant Time O(1) - Constant Space O(1)

let stack = [];
stack.push(10);
stack.push(20);
stack.push(30);
//? how to access the last value
// let last_item = stack.pop()

// Searching stack in linear time O(n) and constant space O(1)
for (let i = stack.length; i >= 0; i--) {
    console.log(stack[i])
}

//! Queue
//* Queues are similar but in this case follow the 
//* First In First Out principle(FIFO). Think of this as a line in a black 
//* friday sale. The first person camped out for the big screen tv is the first to get it.
// Searching through a queue will be Linear Time O(n) - Constant Space O(1)
// Selecting the first item will be done in Constant Time O(1) - Constant Space O(1)
// Adding to the queue should take Constant Time O(1) - Constant Space O(1)

let queue = []
queue.push(1);
queue.push(2);
queue.push(3);

// Accessing the first value takes constant time and space 
let first_item = queue.pop(0);

// Looping through stack in linear time and constant space
for (let i = 0; i < stack.length; i++) {
    console.log(stack[i])
}

class LinkedListNode {
    constructor(value){
        this.value = value; // this is our value!
        this.next = null; // this is our pointer!
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        // create a new node
        let node = new LinkedListNode(element); // This becomes our value in our node
        // store current node
        let current;

        // if list is empty, add the element and make it the head
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            // iterate to the end of the list
            while (current.next) {
                current = current.next;
            }

            // add node after it gets to the end of the existing list of nodes
            current.next = node;
        }
        this.size++;
    }

    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.value + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

console.log('Linked List:');

let myLL = new LinkedList();
myLL.add(5);
myLL.add(8);
myLL.add(75);
myLL.printList();