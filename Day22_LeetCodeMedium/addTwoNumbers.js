// Activity 1: Add Two Numbers
// • Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// • Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node
// contains a single digit. Add the two numbers and return the sum as a linked list.
// • Create a few test cases with linked lists and log the sum as a linked list.


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

// Helper function to print linked list
function printList(node) {
    let output = [];
    while (node !== null) {
        output.push(node.val);
        node = node.next;
    }
    console.log(output.join(' -> '));
}

// Test cases
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);
printList(result);  // Output: 7 -> 0 -> 8

l1 = new ListNode(0);
l2 = new ListNode(0);
result = addTwoNumbers(l1, l2);
printList(result);  // Output: 0

l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
result = addTwoNumbers(l1, l2);
printList(result);  // Output: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1
