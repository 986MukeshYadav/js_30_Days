// Activity 5: Group Anagrams
// • Task 5: Solve the "Group Anagrams" problem on LeetCode.
// • Write a function that takes an array of strings and groups anagrams together.
// • Log the grouped anagrams for a few test cases.

function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        let sorted = str.split('').sort().join('');
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(str);
    }

    return Array.from(map.values());
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));  
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""]));                 
// Output: [[""]]
console.log(groupAnagrams(["a"]));                
// Output: [["a"]]
