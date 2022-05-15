class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  add(value) {
    let node = new Node(value);

    if (this.head == null) this.head = node;
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  rotate(k) {
    let previousHead = this.head,
      previous = this.head,
      current = this.head;

    let i = 1;
    while (current.next) {
      if (i == k + 1) {
        this.head = current;
        previous.next = null;
      }

      previous = current;
      current = current.next;
      i++;
    }
    current.next = previousHead;
    return this;
  }
}

let ll = new LinkedList();

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.add(60);
ll.add(70);

let rotate = ll.rotate(3);
console.log(JSON.stringify(rotate));
