// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      let currentNode = this.top;
      this.top = newNode;
      this.top.next = currentNode;
    }
    this.length++;
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      let currentNode = this.top;
      this.top = null;
      this.length--;
      return currentNode.value;
    } else {
      let currentNode = this.top;
      let newTop = currentNode.next;
      this.top = newTop;
      this.length--;
      return currentNode.value;
    }

  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
