// Day 23: LeetCode Hard

// Tasks/Activities:
// Activity 1: Median of Two Sorted Arrays
// • Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// • Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// • Log the median for a few test cases, including edge cases.

// File: medianOfTwoSortedArrays.js

// function findMedianSortedArrays(nums1, nums2) {
//     if (nums1.length > nums2.length) {
//         return findMedianSortedArrays(nums2, nums1);
//     }
    
//     const x = nums1.length;
//     const y = nums2.length;
    
//     let low = 0;
//     let high = x;
    
//     while (low <= high) {
//         const partitionX = Math.floor((low + high) / 2);
//         const partitionY = Math.floor((x + y + 1) / 2) - partitionX;
        
//         const maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
//         const minX = (partitionX === x) ? Infinity : nums1[partitionX];
        
//         const maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
//         const minY = (partitionY === y) ? Infinity : nums2[partitionY];
        
//         if (maxX <= minY && maxY <= minX) {
//             if ((x + y) % 2 === 0) {
//                 return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
//             } else {
//                 return Math.max(maxX, maxY);
//             }
//         } else if (maxX > minY) {
//             high = partitionX - 1;
//         } else {
//             low = partitionX + 1;
//         }
//     }
    
//     throw new Error("Input arrays are not sorted.");
// }

// // Test cases
// console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
// console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
// console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.0
// console.log(findMedianSortedArrays([], [1])); // Output: 1.0
// console.log(findMedianSortedArrays([2], [])); // Output: 2.0


// Activity 2: Merge k Sorted Lists
// • Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// • Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked
// list.
// • Create a few test cases with linked lists and log the merged list.

// File: mergeKSortedLists.js

// File: mergeKSortedLists.js

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (!lists.length) return null;

    while (lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        const merged = mergeTwoLists(a, b);
        lists.push(merged);
    }
    
    return lists[0];
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
    
    if (l1) {
        current.next = l1;
    } else {
        current.next = l2;
    }
    
    return dummy.next;
}

// Helper function to create linked lists from arrays
function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Test cases
const lists = [
    arrayToList([1, 4, 5]),
    arrayToList([1, 3, 4]),
    arrayToList([2, 6])
];
console.log(mergeKLists(lists)); // Output: [1, 1, 2, 3, 4, 4, 5, 6]




// Activity 3: Trapping Rain Water
// • Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// • Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how
// much water it can trap after raining.
// • Log the amount of trapped water for a few test cases.
// File: trappingRainWater.js

function trap(height) {
    if (height.length === 0) return 0;
    
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let trappedWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                trappedWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                trappedWater += rightMax - height[right];
            }
            right--;
        }
    }

    return trappedWater;
}

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
console.log(trap([2, 0, 2])); // Output: 2




// Activity 4: N-Queens
// • Task 4: Solve the "N-Queens" problem on LeetCode.
// • Write a function that places n queens on an xn chessboard such that no two queens attack each other, and returns all distinct solutions to then queens puzzle.
// • Log the distinct solutions for a few test cases.

// File: nQueens.js

function solveNQueens(n) {
    const solutions = [];
    const board = new Array(n).fill().map(() => new Array(n).fill('.'));
    
    function isValid(board, row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }
    
    function solve(board, row) {
        if (row === n) {
            const solution = board.map(r => r.join(''));
            solutions.push(solution);
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q';
                solve(board, row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    solve(board, 0);
    return solutions;
}

// Test cases
console.log(solveNQueens(4)); 
// Output: [
//   [".Q..","...Q","Q...","..Q."],
//   ["..Q.","Q...","...Q",".Q.."]
// ]





// Activity 5: Word Ladder
// Task 5: Solve the "Word Ladder" problem on LeetCode. • Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// • Log the length of the shortest transformation sequence for a few test cases.

// File: wordLadder.js

function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue = [[beginWord, 1]];

    while (queue.length) {
        const [currentWord, level] = queue.shift();

        if (currentWord === endWord) return level;

        for (let i = 0; i < currentWord.length; i++) {
            for (let c = 97; c <= 122; c++) { // 'a' to 'z'
                const newWord = currentWord.slice(0, i) + String.fromCharCode(c) + currentWord.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }

    return 0;
}

// Test cases
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Output: 0
