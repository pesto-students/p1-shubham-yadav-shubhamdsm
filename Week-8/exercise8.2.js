class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  isValidBST(node, min = null, max = null) {
    if (!node) return true;
    if (max !== null && node.data >= max) {
      return false;
    }
    if (min !== null && node.data <= min) {
      return false;
    }
    const leftSide = this.isValidBST(node.left, min, node.data);
    const rightSide = this.isValidBST(node.right, node.val, max);

    return leftSide && rightSide;
  }
}

const t = new Node(10);
t.left = new Node(0);
t.left.left = new Node(7);
t.left.right = new Node(4);
t.right = new Node(12);
const t1 = new Tree();
t1.root = t;
console.log(t1.isValidBST(t));
