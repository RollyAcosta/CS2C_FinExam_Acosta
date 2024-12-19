class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.currentSize = 0;
  }

  append(value) {
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
    this.currentSize++;
    this.print(); 
  }

  print() {
    let output = "";
    let current = this.head;
    while (current) {
      output += current.value + " ";
      current = current.next;
    }
    console.log("Linked List: " + output);
  }
}


const myList = new LinkedList();
myList.append("Data Structures - Array");
myList.append("Variable Type - Integer");
myList.append("Sorting Algorithm - Bubble Sort");

