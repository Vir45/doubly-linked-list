const Node = require('./node');

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {

    let node = new Node(data);
    if (!this._head) {
      this._head = node;
      this._tail = node;
      this.length++;
    } else {
      node.prev = this._tail;
      this._tail.next = node;
      this._tail = node;
      this.length++;
    }
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  at(index) {
    let currentNode = this._head;
    let counter = 1;
    while (counter <= index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode.data;
  }

  insertAt(index, data) {
  let current = this._head;
   let counter = 1;
   let node = new Node(data);
   if( index == 0 ) {
     this._head.prev = node;
     node.next = this._head;
     this._head = node;
   } else {
     while(counter <= this.length) {
      current = current.next;
      if( counter == index ) {
        node.prev = current.prev
        current.prev.next = node
        node.next = current
        current.prev = node
      }
      counter++
    }
  }
  }

  isEmpty() {
    if (this.length === 0) {
      return true
    } else {
      return false;
    }
  }

  clear() {
    let current = this._head;
    let counter = 1;
    if(this.length === 0) {
      return;
    } else if (this.length === 1) {
      this._head.data = null;
      this._tail.data = null;
      this.length = 0;
    } else {
      while(current) {
        current = current.next;
        this._head.data = null;
        this._tail.data = null;
        this.length--;
      }
    }
  }

  deleteAt(index) {
    let current = this._head;
    let counter = 2;
    if (index == 0) {
      this._head = this._head.next;
      this._head.prev = null;
    } else {
      while (current) {
        current = current.next;
        if (current == this._tail) {
          this._tail = this._tail.prev;
          this._tail.next = null;
        } else if (counter == index) {
          current.prev.next = current.next;
          current.next.prev = current.prev;
          break;
        }
        counter++;
      }
    }
  }

  reverse() {
  }

  indexOf(data) {
    let current = this._head;
    let counter = 0;
    while (current) {
      if (current.data == data) {
        return counter;
      }
      current = current.next
      counter++
    }
    return -1;
  }
}

module.exports = LinkedList;