// main.mjs
import CustomArray from './customArray.mjs';


const stack = new CustomArray(1, 2, 3, 4);
stack.print();  // Output: [1,2,3,4]
stack.push(5);
stack.print();  // Output: [1,2,3,4,5]
stack.pop();
stack.print();  // Output: [1,2,3,4]
stack.printReverse();  // Output: [4,3,2,1]
console.log('Size:', stack.getSize());  // Output: Size: 4
console.log('Top element:', stack.top());  // Output: Top element: 4
