// Day 21: LeetCode Easy
// Tasks/Activities:
// Activity 1: Two Sum
// • Task 1: Solve the "Two Sum" problem on LeetCode.
// • Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// • Log the indices for a few test cases.

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); 

// Activity 2: Reverse Integer
// • Task 2: Solve the "Reverse Integer" problem on LeetCode.
// • Write a function that takes an integer and returns it with its digits reversed.
// • Handle edge cases like negative numbers and numbers ending in zero.
// • Log the reversed integers for a few test cases.
function reverseInteger(x) {
    let negative = x < 0;
    x = Math.abs(x);
    let reversedX = 0;

    while (x !== 0) {
        reversedX = reversedX * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    if (reversedX > 2**31 - 1) {
        return 0;
    }

    return negative ? -reversedX : reversedX;
}
console.log(reverseInteger(123));   
 
// Activity 3: Palindrome Number
// • Task 3: Solve the "Palindrome Number" problem on LeetCode.
// • Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// • Log the result for a few test cases, including edge cases like negative numbers.
function isPalindrome(x) {
    if (x < 0) return false;
    let original = x;
    let reversedX = 0;

    while (x !== 0) {
        reversedX = reversedX * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return original === reversedX;
}
console.log(isPalindrome(121));  

// Activity 4: Merge Two Sorted Lists
// • Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// • Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// • Create a few test cases with linked lists and log the merged list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 || l2;
    return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print a linked list
function printLinkedList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}

// Test cases
let l1 = createLinkedList([1, 2, 4]);
let l2 = createLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList);  


// Activity 5: Valid Parentheses
// • Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// • Write a function that takes a string containing just the characters (, ), [, 3, [' and ]', and determines if the input string is valid.
// • A string is valid if open brackets are closed in the correct order.
// • Log the result for a few test cases.

function isValid(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in mapping) {
            const topElement = stack.length ? stack.pop() : '#';
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"));       
console.log(isValid("()[]{}"));   

