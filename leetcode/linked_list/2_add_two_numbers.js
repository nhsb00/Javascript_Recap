// You are given two non - empty linked lists representing two non - negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    };
}; 

var addTwoNumbers = function (l1, l2) {
    let carry = 0;
  
    while(l1 || l2 || carry) {
    // while either l1 is not null or l2 is not null        
    // l1 or l2 could be null before applying update condition we need if statement to set next node
        let val1 = 0;
        let val2 = 0;
        // save value of l1 and l2
        if (l1) {
            val1 = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            val2 = l2.val;
            l2 = l2.next;
        }
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);//sum > 9 ? 1 : 0 handle carried over
        let digit = sum % 10;
       
    }
    return headNode.next;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))
