// You are given two non - empty linked lists representing two non - negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
var addTwoNumbers = function (l1, l2) {
    while(l1 || l2) {
    // while either l1 is not null or l2 is not null        
    // l1 or l2 could be null before applying update condition we need if statement to set next node
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))
