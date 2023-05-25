const sumList = (head) => {
    let sum = 0;
    let current = head;
    while (current !== null) {
        sum += current.val;
        current = current.next
    }
    return sum
};


const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(sumList(a));