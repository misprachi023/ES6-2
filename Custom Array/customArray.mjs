class CustomArray {
    constructor(...args) {
      this.array = [...args];
      this.size = args.length;
    }
  
    push(element) {
      this.array.push(element);
      this.size++;
    }
  
    pop() {
      if (this.size === 0) {
        console.log('Stack is empty. Cannot pop.');
        return;
      }
      const poppedElement = this.array.pop();
      this.size--;
      return poppedElement;
    }
  
    top() {
      if (this.size === 0) {
        console.log('Stack is empty. No top element.');
        return;
      }
      return this.array[this.size - 1];
    }
  
    print() {
      console.log(`[${this.array.join(',')}]`);
    }
  
    printReverse() {
      console.log(`[${this.array.slice().reverse().join(',')}]`);
    }
  
    getSize() {
      return this.size;
    }
  }
  
  export default CustomArray;
  