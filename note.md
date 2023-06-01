Stack 
Last In First Out
.push()
.pop()

Queue 
First In First Out

Insert a new element at the end of the queue, which is called enqueue.
Remove an element from the front of the queue, which is called dequeue.

O(1)

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

Tree

Binary Tree
(이진 트리(binary tree)는 최대 2개까지의 자식을 가질 수 있다.)
Full Binary Tree
(포화 이진 트리는 리프 노드를 제외한 모든 노드가 두 자식을 가지고 있는 트리다.)
Complete Binary Tree
(완전 이진 트리는 모든 노드가 왼쪽 자식부터 차근차근 채워진 트리다)

Height Balanced Tree
(왼쪽 자식 트리와 오른쪽 자식 트리의 높이가 1 이상 차이 나지 않는 트리다)

Heap O(logN)
max Heap (부모 노드의 키 값이 자식 노드의 키 값보다 항상 크다. 루트 노드가 가장 크며, 값이 큰 데이터가 우선순위를 가진다)
min Heap (부모 노드의 키 값이 자식 노드의 키 값보다 항상 작다. 루트 노드가 가장 작으며, 값이 작은 데이터가 우선순위를 가진다)

npm install priorityqueuejs

var PriorityQueue = require('priorityqueuejs');

var queue = new PriorityQueue(function(a, b) {
  return a.cash - b.cash;
});

queue.enq({ cash: 250, name: 'Valentina' });
queue.enq({ cash: 300, name: 'Jano' });
queue.enq({ cash: 150, name: 'Fran' });
queue.size(); // 3
queue.peek(); // { cash: 300g, name: 'Jano' }
queue.deq(); // { cash: 300, name: 'Jano' }
queue.size(); // 2