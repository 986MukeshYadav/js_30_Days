// Day 16: Recursion
// Tasks/Activities:
// Activity 1: Basic Recursion
// • Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(5));
console.log(factorial(0));

// • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fab(n){
    if(n<=1){
        return n;
    }
    return fab(n-1)+fab(n-2);
}
console.log(fab(5));
console.log(fab(10));



// Activity 2: Recursion with Arrays
// • Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr,n=arr.length){
    if(n===0){
        return 0;
    }
    return arr[n-1]+sumArray(arr,n-1);
}

console.log(sumArray([1,2,3,4,5]));
console.log(sumArray([10,20,30,40,50]));

// • Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr, n = arr.length) {
    if (n === 1) {
        return arr[0];
    }
    return Math.max(arr[n - 1], maxArray(arr, n - 1));
}
console.log(maxArray([1, 2, 3, 4, 5]));
console.log(maxArray([7, 14, 21, 28]));

// Activity 3: String Manipulation with Recursion
// • Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str) {
    if (str === "") {
        return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello")); 
console.log(reverseString("recursion"));



// • Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));


// Activity 4: Recursive Search
// • Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, right);
}


console.log(binarySearch([1, 2, 3, 4, 5], 3)); 
console.log(binarySearch([7, 14, 21, 28, 35], 28)); 

// • Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target, index = 0) {
    if (index === arr.length) {
        return 0;
    }
    return (arr[index] === target ? 1 : 0) + countOccurrences(arr, target, index + 1);
}

console.log(countOccurrences([1, 2, 3, 4, 5, 3], 3));
console.log(countOccurrences([7, 14, 21, 28, 35], 14));




// Activity 5: Tree Traversal (Optional)
// • Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}


const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6, new TreeNode(5), new TreeNode(7)));
inOrderTraversal(root); 

// • Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function treeDepth(node) {
    if (node === null) {
        return 0;
    }
    return 1 + Math.max(treeDepth(node.left), treeDepth(node.right));
}

const treeRoot = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6, new TreeNode(5), new TreeNode(7)));
console.log(treeDepth(treeRoot));
