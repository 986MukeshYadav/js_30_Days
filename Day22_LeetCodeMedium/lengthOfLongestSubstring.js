// Activity 2: Longest Substring Without Repeating Characters
// • Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// • Write a function that takes a string and returns the length of the longest substring without repeating characters.
// • Log the length for a few test cases, including edge cases.


function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb"));  // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));     // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));    // Output: 3
console.log(lengthOfLongestSubstring(""));          // Output: 0
console.log(lengthOfLongestSubstring("au"));        // Output: 2
