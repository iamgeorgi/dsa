// left - decreases
// right - increases
/// a node can have only two childrens
// a node can have only one parent

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    let isValueInserted = false;

    if (this.root !== null) {
      if (this.root.left !== null) {
        let currentLeftNode = this.root.left;
        while (true) {
          if (currentLeftNode.left !== null && currentLeftNode.left.value > newNode.value) {
            currentLeftNode = currentLeftNode.left;
          } else if (currentLeftNode.value < newNode.value) {
            break;
          } else {
            const prevLeftValue = currentLeftNode.left;
            newNode.left = prevLeftValue;
            currentLeftNode.left = newNode;
            isValueInserted = true;
            break;
          }
        }
      } else {
        this.root.left = newNode;
        isValueInserted = true;
      }

      if (!isValueInserted) {
        if (this.root.right !== null) {
          let currentRightNode = this.root.right;
          while (true) {
            if (currentRightNode.right !== null && currentRightNode.right.value < newNode.value) {
              currentRightNode = currentRightNode.right;
            } else if (currentRightNode.value > newNode.value) {
              break;
            } else {
              const prevRightValue = currentRightNode.right;
              newNode.right = prevRightValue;
              currentRightNode.right = newNode;
              break;
            }
          }
        }

        if (this.root.right === null && !isValueInserted) {
          this.root.right = newNode;
          isValueInserted = true;
        }
      }
    }

    if (this.root === null) {
      this.root = newNode;
    }
  }
  lookup(value) {
    //Code here there
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.insert(2)
JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  console.log(node);
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}