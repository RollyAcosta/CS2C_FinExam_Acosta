// groceryStacks.js

let groceryStack = ['milk', 'waffles', 'bread', 'cheese', 'apples', 'crackers', 'meats'];
const stackSize = 5;

function peek() {
  if (groceryStack.length === 0) {
    return "Stack is empty";
  }
  return groceryStack[groceryStack.length - 1];
}

function push(item) {
  if (groceryStack.length >= stackSize) {
    console.log("Stack is full!");
    return;
  }
  groceryStack.push(item);
  console.log("Stack after push:", groceryStack);
}

function pop() {
  if (groceryStack.length === 0) {
    return "Stack is empty";
  }
  return groceryStack.pop();
}

push("Milk");
push("Eggs");
push("Bread");
push("Cheese");
push("Apples");
push("Oranges"); 

console.log("Top item:", peek());
console.log("Popped item:", pop());
console.log("Stack after pop:", groceryStack);

