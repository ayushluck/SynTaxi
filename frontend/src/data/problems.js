export const PROBLEMS = {
    "two-sum": {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "Easy",
        category: "Array • Hash Table",
        description: {
            text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
            notes: [
                "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
                "You can return the answer in any order.",
            ],
        },
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "[1,2]",
            },
            {
                input: "nums = [3,3], target = 6",
                output: "[0,1]",
            },
            {
                input: "nums = [2,5,5,11], target = 10",
                output: "[1,2]",
            }
        ],
        constraints: [
            "2 ≤ nums.length ≤ 10⁴",
            "-10⁹ ≤ nums[i] ≤ 10⁹",
            "-10⁹ ≤ target ≤ 10⁹",
            "Only one valid answer exists",
        ],
        starterCode: {
            javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(twoSum([2, 7, 11, 15], 9))); // Expected: [0,1]
console.log(JSON.stringify(twoSum([3, 2, 4], 6))); // Expected: [1,2]
console.log(JSON.stringify(twoSum([3, 3], 6))); // Expected: [0,1]
console.log(JSON.stringify(twoSum([2, 5, 5, 11], 10))); // Expected: [1,2]`,
        },
        expectedOutput: {
            javascript: "[0,1]\n[1,2]\n[0,1]\n[1,2]",
        },
    },

    "reverse-string": {
        id: "reverse-string",
        title: "Reverse String",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "Write a function that reverses a string. The input string is given as an array of characters s.",
            notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
        },
        examples: [
            {
                input: 's = ["h","e","l","l","o"]',
                output: '["o","l","l","e","h"]',
            },
            {
                input: 's = ["H","a","n","n","a","h"]',
                output: '["h","a","n","n","a","H"]',
            },
            {
                input: 's = ["a"]',
                output: '["a"]',
            },
            {
                input: 's = ["a","b"]',
                output: '["b","a"]',
            }
        ],
        constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
        starterCode: {
            javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(JSON.stringify(test1)); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(JSON.stringify(test2)); // Expected: ["h","a","n","n","a","H"]

let test3 = ["a"];
reverseString(test3);
console.log(JSON.stringify(test3)); // Expected: ["a"]

let test4 = ["a","b"];
reverseString(test4);
console.log(JSON.stringify(test4)); // Expected: ["b","a"]`,
        },
        expectedOutput: {
            javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]\n["a"]\n["b","a"]',
        },
    },

    "valid-palindrome": {
        id: "valid-palindrome",
        title: "Valid Palindrome",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
            notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
        },
        examples: [
            {
                input: 's = "A man, a plan, a canal: Panama"',
                output: "true",
                explanation: '"amanaplanacanalpanama" is a palindrome.',
            },
            {
                input: 's = "race a car"',
                output: "false",
                explanation: '"raceacar" is not a palindrome.',
            },
            {
                input: 's = " "',
                output: "true",
                explanation: 's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
            },
            {
                input: 's = "0P"',
                output: "false",
            }
        ],
        constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
        starterCode: {
            javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true
console.log(isPalindrome("0P")); // Expected: false`,
        },
        expectedOutput: {
            javascript: "true\nfalse\ntrue\nfalse",
        },
    },

    "maximum-subarray": {
        id: "maximum-subarray",
        title: "Maximum Subarray",
        difficulty: "Medium",
        category: "Array • Dynamic Programming",
        description: {
            text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
            notes: [],
        },
        examples: [
            {
                input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
                output: "6",
                explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
            },
            {
                input: "nums = [1]",
                output: "1",
                explanation: "The subarray [1] has the largest sum 1.",
            },
            {
                input: "nums = [5,4,-1,7,8]",
                output: "23",
                explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
            },
            {
                input: "nums = [-1]",
                output: "-1",
            }
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23
console.log(maxSubArray([-1])); // Expected: -1`,
        },
        expectedOutput: {
            javascript: "6\n1\n23\n-1",
        },
    },

    "container-with-most-water": {
        id: "container-with-most-water",
        title: "Container With Most Water",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        description: {
            text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
            notes: [
                "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
                "Return the maximum amount of water a container can store.",
                "Notice that you may not slant the container.",
            ],
        },
        examples: [
            {
                input: "height = [1,8,6,2,5,4,8,3,7]",
                output: "49",
                explanation: "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
            },
            {
                input: "height = [1,1]",
                output: "1",
            },
            {
                input: "height = [4,3,2,1,4]",
                output: "16",
            },
            {
                input: "height = [1,2,1]",
                output: "2",
            }
        ],
        constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1
console.log(maxArea([4,3,2,1,4])); // Expected: 16
console.log(maxArea([1,2,1])); // Expected: 2`,
        },
        expectedOutput: {
            javascript: "49\n1\n16\n2",
        },
    },
    "fizz-buzz": {
        id: "fizz-buzz",
        title: "Fizz Buzz",
        difficulty: "Easy",
        category: "Array • Simulation",
        description: {
            text: "Given an integer n, return a string array answer (1-indexed) where answer[i] is 'FizzBuzz' if i is divisible by 3 and 5, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, and i as a string if none are true.",
            notes: [],
        },
        examples: [
            {
                input: "n = 3",
                output: '["1","2","Fizz"]',
            },
            {
                input: "n = 5",
                output: '["1","2","Fizz","4","Buzz"]',
            }
        ],
        constraints: ["1 ≤ n ≤ 10⁴"],
        starterCode: {
            javascript: `function fizzBuzz(n) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(fizzBuzz(3))); // Expected: ["1","2","Fizz"]
console.log(JSON.stringify(fizzBuzz(5))); // Expected: ["1","2","Fizz","4","Buzz"]
console.log(JSON.stringify(fizzBuzz(1))); // Expected: ["1"]
console.log(JSON.stringify(fizzBuzz(15))); // Expected: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]`,
        },
        expectedOutput: {
            javascript: '["1","2","Fizz"]\n["1","2","Fizz","4","Buzz"]\n["1"]\n["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]',
        },
    },

    "single-number": {
        id: "single-number",
        title: "Single Number",
        difficulty: "Easy",
        category: "Array • Bit Manipulation",
        description: {
            text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
            notes: ["You must implement a solution with a linear runtime complexity and use only constant extra space."],
        },
        examples: [
            {
                input: "nums = [2,2,1]",
                output: "1",
            },
            {
                input: "nums = [4,1,2,1,2]",
                output: "4",
            }
        ],
        constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴"],
        starterCode: {
            javascript: `function singleNumber(nums) {
  // Write your solution here
  
}

// Test cases
console.log(singleNumber([2,2,1])); // Expected: 1
console.log(singleNumber([4,1,2,1,2])); // Expected: 4
console.log(singleNumber([1])); // Expected: 1
console.log(singleNumber([7,3,5,3,5])); // Expected: 7`,
        },
        expectedOutput: {
            javascript: "1\n4\n1\n7",
        },
    },

    "majority-element": {
        id: "majority-element",
        title: "Majority Element",
        difficulty: "Easy",
        category: "Array • Hash Table",
        description: {
            text: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.",
            notes: ["You may assume that the majority element always exists in the array."],
        },
        examples: [
            {
                input: "nums = [3,2,3]",
                output: "3",
            },
            {
                input: "nums = [2,2,1,1,1,2,2]",
                output: "2",
            }
        ],
        constraints: ["n == nums.length", "1 ≤ n ≤ 5 * 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹"],
        starterCode: {
            javascript: `function majorityElement(nums) {
  // Write your solution here
  
}

// Test cases
console.log(majorityElement([3,2,3])); // Expected: 3
console.log(majorityElement([2,2,1,1,1,2,2])); // Expected: 2
console.log(majorityElement([1])); // Expected: 1
console.log(majorityElement([6,6,6,7,7])); // Expected: 6`,
        },
        expectedOutput: {
            javascript: "3\n2\n1\n6",
        },
    },

    "move-zeroes": {
        id: "move-zeroes",
        title: "Move Zeroes",
        difficulty: "Easy",
        category: "Array • Two Pointers",
        description: {
            text: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
            notes: ["You must do this in-place without making a copy of the array."],
        },
        examples: [
            {
                input: "nums = [0,1,0,3,12]",
                output: "[1,3,12,0,0]",
            },
            {
                input: "nums = [0]",
                output: "[0]",
            }
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁴", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
        starterCode: {
            javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}

// Test cases
let t1 = [0,1,0,3,12]; moveZeroes(t1); console.log(JSON.stringify(t1)); // Expected: [1,3,12,0,0]
let t2 = [0]; moveZeroes(t2); console.log(JSON.stringify(t2)); // Expected: [0]
let t3 = [2,1]; moveZeroes(t3); console.log(JSON.stringify(t3)); // Expected: [2,1]
let t4 = [0,0,1]; moveZeroes(t4); console.log(JSON.stringify(t4)); // Expected: [1,0,0]`,
        },
        expectedOutput: {
            javascript: "[1,3,12,0,0]\n[0]\n[2,1]\n[1,0,0]",
        },
    },

    "best-time-to-buy-and-sell-stock": {
        id: "best-time-to-buy-and-sell-stock",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        category: "Array • Dynamic Programming",
        description: {
            text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
            notes: ["You can only choose a single day to buy one stock and choose a different day in the future to sell that stock."],
        },
        examples: [
            {
                input: "prices = [7,1,5,3,6,4]",
                output: "5",
            },
            {
                input: "prices = [7,6,4,3,1]",
                output: "0",
            }
        ],
        constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0
console.log(maxProfit([1,2])); // Expected: 1
console.log(maxProfit([2,4,1])); // Expected: 2`,
        },
        expectedOutput: {
            javascript: "5\n0\n1\n2",
        },
    },

    "valid-anagram": {
        id: "valid-anagram",
        title: "Valid Anagram",
        difficulty: "Easy",
        category: "String • Hash Table",
        description: {
            text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
            notes: ["An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."],
        },
        examples: [
            {
                input: 's = "anagram", t = "nagaram"',
                output: "true",
            },
            {
                input: 's = "rat", t = "car"',
                output: "false",
            }
        ],
        constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴", "s and t consist of lowercase English letters."],
        starterCode: {
            javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false
console.log(isAnagram("a", "ab")); // Expected: false
console.log(isAnagram("listen", "silent")); // Expected: true`,
        },
        expectedOutput: {
            javascript: "true\nfalse\nfalse\ntrue",
        },
    },

    "contains-duplicate": {
        id: "contains-duplicate",
        title: "Contains Duplicate",
        difficulty: "Easy",
        category: "Array • Hash Table",
        description: {
            text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
            notes: [],
        },
        examples: [
            {
                input: "nums = [1,2,3,1]",
                output: "true",
            },
            {
                input: "nums = [1,2,3,4]",
                output: "false",
            }
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
        starterCode: {
            javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false
console.log(containsDuplicate([])); // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
        },
        expectedOutput: {
            javascript: "true\nfalse\nfalse\ntrue",
        },
    },

    "merge-sorted-array": {
        id: "merge-sorted-array",
        title: "Merge Sorted Array",
        difficulty: "Easy",
        category: "Array • Two Pointers",
        description: {
            text: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums2 into nums1 as one sorted array.",
            notes: ["The long-term storage array nums1 has a length of m + n where the last n elements are set to 0 and should be ignored."],
        },
        examples: [
            {
                input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
                output: "[1,2,2,3,5,6]",
            }
        ],
        constraints: ["nums1.length == m + n", "nums2.length == n", "0 ≤ m, n ≤ 200"],
        starterCode: {
            javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here
  
}

// Test cases
let n1 = [1,2,3,0,0,0]; merge(n1, 3, [2,5,6], 3); console.log(JSON.stringify(n1)); // Expected: [1,2,2,3,5,6]
let n2 = [1]; merge(n2, 1, [], 0); console.log(JSON.stringify(n2)); // Expected: [1]
let n3 = [0]; merge(n3, 0, [1], 1); console.log(JSON.stringify(n3)); // Expected: [1]
let n4 = [4,5,6,0,0,0]; merge(n4, 3, [1,2,3], 3); console.log(JSON.stringify(n4)); // Expected: [1,2,3,4,5,6]`,
        },
        expectedOutput: {
            javascript: "[1,2,2,3,5,6]\n[1]\n[1]\n[1,2,3,4,5,6]",
        },
    },

    "climbing-stairs": {
        id: "climbing-stairs",
        title: "Climbing Stairs",
        difficulty: "Easy",
        category: "Math • Dynamic Programming",
        description: {
            text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
            notes: [],
        },
        examples: [
            {
                input: "n = 2",
                output: "2",
            },
            {
                input: "n = 3",
                output: "3",
            }
        ],
        constraints: ["1 ≤ n ≤ 45"],
        starterCode: {
            javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3
console.log(climbStairs(1)); // Expected: 1
console.log(climbStairs(5)); // Expected: 8`,
        },
        expectedOutput: {
            javascript: "2\n3\n1\n8",
        },
    },

    "longest-common-prefix": {
        id: "longest-common-prefix",
        title: "Longest Common Prefix",
        difficulty: "Easy",
        category: "String • Trie-Like Simulation",
        description: {
            text: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ''.",
            notes: [],
        },
        examples: [
            {
                input: 'strs = ["flower","flow","flight"]',
                output: '"fl"',
            },
            {
                input: 'strs = ["dog","racecar","car"]',
                output: '""',
            }
        ],
        constraints: ["1 ≤ strs.length ≤ 200", "0 ≤ strs[i].length ≤ 200", "strs[i] consists of only lowercase English letters."],
        starterCode: {
            javascript: `function longestCommonPrefix(strs) {
  // Write your solution here
  
}

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // Expected: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // Expected: ""
console.log(longestCommonPrefix(["interstellar","interstate","interview"])); // Expected: "inter"
console.log(longestCommonPrefix(["throne","throne"])); // Expected: "throne"`,
        },
        expectedOutput: {
            javascript: '"fl"\n""\n"inter"\n"throne"',
        },
    },

    "three-sum": {
        id: "three-sum",
        title: "3Sum",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        description: {
            text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
            notes: ["Notice that the solution set must not contain duplicate triplets. Order of triplets inside your return matrix does not matter."],
        },
        examples: [
            {
                input: "nums = [-1,0,1,2,-1,-4]",
                output: "[[-1,-1,2],[-1,0,1]]",
            }
        ],
        constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
        starterCode: {
            javascript: `function threeSum(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4]).sort())); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(JSON.stringify(threeSum([0,1,1]))); // Expected: []
console.log(JSON.stringify(threeSum([0,0,0]))); // Expected: [[0,0,0]]
console.log(JSON.stringify(threeSum([-2,0,0,2,2]))); // Expected: [[-2,0,2]]`,
        },
        expectedOutput: {
            javascript: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]\n[[-2,0,2]]",
        },
    },

    "longest-substring-without-repeating-characters": {
        id: "longest-substring-without-repeating-characters",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        category: "String • Sliding Window",
        description: {
            text: "Given a string s, find the length of the longest substring without repeating characters.",
            notes: [],
        },
        examples: [
            {
                input: 's = "abcabcbb"',
                output: "3",
            },
            {
                input: 's = "bbbbb"',
                output: "1",
            }
        ],
        constraints: ["0 ≤ s.length ≤ 5 * 10⁴", "s consists of English letters, digits, symbols and spaces."],
        starterCode: {
            javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3
console.log(lengthOfLongestSubstring("")); // Expected: 0`,
        },
        expectedOutput: {
            javascript: "3\n1\n3\n0",
        },
    },

    "group-anagrams": {
        id: "group-anagrams",
        title: "Group Anagrams",
        difficulty: "Medium",
        category: "Array • Hash Table",
        description: {
            text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
            notes: [],
        },
        examples: [
            {
                input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
                output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
            }
        ],
        constraints: ["1 ≤ strs.length ≤ 10⁴", "0 ≤ strs[i].length ≤ 100", "strs[i] consists of lowercase English letters."],
        starterCode: {
            javascript: `function groupAnagrams(strs) {
  // Write your solution here
  
}

// Test cases
const sortSub = arr => arr.map(s => s.sort()).sort((a,b) => a.length - b.length);
console.log(JSON.stringify(sortSub(groupAnagrams(["eat","tea","tan","ate","nat","bat"])))); // Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(JSON.stringify(groupAnagrams([""]))); // Expected: [[""]]
console.log(JSON.stringify(groupAnagrams(["a"]))); // Expected: [["a"]]
console.log(JSON.stringify(sortSub(groupAnagrams(["a","b","ab","ba"])))); // Expected: [["a"],["b"],["ab","ba"]]`,
        },
        expectedOutput: {
            javascript: '[["bat"],["nat","tan"],["ate","eat","tea"]]\n[[""]]\n[["a"]]\n[["a"],["b"],["ab","ba"]]',
        },
    },

    "product-of-array-except-self": {
        id: "product-of-array-except-self",
        title: "Product of Array Except Self",
        difficulty: "Medium",
        category: "Array • Prefix Suffix Matrix",
        description: {
            text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
            notes: ["You must write an algorithm that runs in O(n) time and without using the division operation."],
        },
        examples: [
            {
                input: "nums = [1,2,3,4]",
                output: "[24,12,8,6]",
            }
        ],
        constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30", "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer."],
        starterCode: {
            javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(productExceptSelf([1,2,3,4]))); // Expected: [24,12,8,6]
console.log(JSON.stringify(productExceptSelf([-1,1,0,-3,3]))); // Expected: [0,0,9,0,0]
console.log(JSON.stringify(productExceptSelf([2,3]))); // Expected: [3,2]
console.log(JSON.stringify(productExceptSelf([4,1,2]))); // Expected: [2,8,4]`,
        },
        expectedOutput: {
            javascript: "[24,12,8,6]\n[0,0,9,0,0]\n[3,2]\n[2,8,4]",
        },
    },

    "subarray-sum-equals-k": {
        id: "subarray-sum-equals-k",
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        category: "Array • Prefix Sum Hash Map",
        description: {
            text: "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.",
            notes: ["A subarray is a contiguous non-empty sequence of elements within an array."],
        },
        examples: [
            {
                input: "nums = [1,1,1], k = 2",
                output: "2",
            }
        ],
        constraints: ["1 ≤ nums.length ≤ 2 * 10⁴", "-1000 ≤ nums[i] ≤ 1000", "-10⁷ ≤ k ≤ 10⁷"],
        starterCode: {
            javascript: `function subarraySum(nums, k) {
  // Write your solution here
  
}

// Test cases
console.log(subarraySum([1,1,1], 2)); // Expected: 2
console.log(subarraySum([1,2,3], 3)); // Expected: 2
console.log(subarraySum([1], 0)); // Expected: 0
console.log(subarraySum([-1,-1,1], 0)); // Expected: 1`,
        },
        expectedOutput: {
            javascript: "2\n2\n0\n1",
        },
    },

    "rotate-array": {
        id: "rotate-array",
        title: "Rotate Array",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        description: {
            text: "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
            notes: ["Try to come up with as many solutions as you can! There are at least three different ways to solve this problem in-place with O(1) extra space."],
        },
        examples: [
            {
                input: "nums = [1,2,3,4,5,6,7], k = 3",
                output: "[5,6,7,1,2,3,4]",
            }
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1", "0 ≤ k ≤ 10⁵"],
        starterCode: {
            javascript: `function rotate(nums, k) {
  // Write your solution here
  
}

// Test cases
let r1 = [1,2,3,4,5,6,7]; rotate(r1, 3); console.log(JSON.stringify(r1)); // Expected: [5,6,7,1,2,3,4]
let r2 = [-1,-100,3,99]; rotate(r2, 2); console.log(JSON.stringify(r2)); // Expected: [3,99,-1,-100]
let r3 = [1,2]; rotate(r3, 3); console.log(JSON.stringify(r3)); // Expected: [2,1]
let r4 = [1]; rotate(r4, 0); console.log(JSON.stringify(r4)); // Expected: [1]`,
        },
        expectedOutput: {
            javascript: "[5,6,7,1,2,3,4]\n[3,99,-1,-100]\n[2,1]\n[1]",
        },
    },

    "search-in-rotated-sorted-array": {
        id: "search-in-rotated-sorted-array",
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        category: "Array • Binary Search",
        description: {
            text: "Given the array nums after a possible rotation at an unknown pivot index, and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
            notes: ["You must write an algorithm with O(log n) runtime complexity."],
        },
        examples: [
            {
                input: "nums = [4,5,6,7,0,1,2], target = 0",
                output: "4",
            }
        ],
        constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴", "All values of nums are unique.", "-10⁴ ≤ target ≤ 10⁴"],
        starterCode: {
            javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log(search([1], 0)); // Expected: -1
console.log(search([5,1,3], 3)); // Expected: 2`,
        },
        expectedOutput: {
            javascript: "4\n-1\n-1\n2",
        },
    },

    "find-all-anagrams-in-a-string": {
        id: "find-all-anagrams-in-a-string",
        title: "Find All Anagrams in a String",
        difficulty: "Medium",
        category: "String • Sliding Window",
        description: {
            text: "Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.",
            notes: [],
        },
        examples: [
            {
                input: 's = "cbaebabacd", p = "abc"',
                output: "[0,6]",
            }
        ],
        constraints: ["1 ≤ s.length, p.length ≤ 3 * 10⁴", "s and p consist of lowercase English letters."],
        starterCode: {
            javascript: `function findAnagrams(s, p) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(findAnagrams("cbaebabacd", "abc"))); // Expected: [0,6]
console.log(JSON.stringify(findAnagrams("abab", "ab"))); // Expected: [0,1,2]
console.log(JSON.stringify(findAnagrams("a", "b"))); // Expected: []
console.log(JSON.stringify(findAnagrams("baa", "aa"))); // Expected: [1]`,
        },
        expectedOutput: {
            javascript: "[0,6]\n[0,1,2]\n[]\n[1]",
        },
    },

    "longest-palindromic-substring": {
        id: "longest-palindromic-substring",
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        category: "String • Two Pointers",
        description: {
            text: "Given a string s, return the longest palindromic substring in s.",
            notes: [],
        },
        examples: [
            {
                input: 's = "babad"',
                output: '"bab"',
                explanation: '"aba" is also a valid answer.'
            }
        ],
        constraints: ["1 ≤ s.length ≤ 1000", "s consists of only digits and English letters."],
        starterCode: {
            javascript: `function longestPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(["bab", "aba"].includes(longestPalindrome("babad"))); // Expected: true
console.log(longestPalindrome("cbbd")); // Expected: "bb"
console.log(longestPalindrome("a")); // Expected: "a"
console.log(longestPalindrome("racecar")); // Expected: "racecar"`,
        },
        expectedOutput: {
            javascript: "true\n\"bb\"\n\"a\"\n\"racecar\"",
        },
    },

    "spiral-matrix": {
        id: "spiral-matrix",
        title: "Spiral Matrix",
        difficulty: "Medium",
        category: "Array • Simulation Matrix",
        description: {
            text: "Given an m x n matrix, return all elements of the matrix in spiral order.",
            notes: [],
        },
        examples: [
            {
                input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
                output: "[1,2,3,6,9,8,7,4,5]",
            }
        ],
        constraints: ["m == matrix.length", "n == matrix[i].length", "1 ≤ m, n ≤ 10", "-100 ≤ matrix[i][j] ≤ 100"],
        starterCode: {
            javascript: `function spiralOrder(matrix) {
            // Write your solution here 
                }

// Test cases
console.log(JSON.stringify(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))); // Expected: [1,2,3,6,9,8,7,4,5]
console.log(JSON.stringify(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(JSON.stringify(spiralOrder([[5]]))); // Expected: [5]
console.log(JSON.stringify(spiralOrder([[1,2],[3,4]]))); // Expected: [1,2,4,3]`,
        },
        expectedOutput: {
            javascript: "[1,2,3,6,9,8,7,4,5]\n[1,2,3,4,8,12,11,10,9,5,6,7]\n[5]\n[1,2,4,3]",
        },
    },
    "subsets": {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Array • Backtracking",
    description: {
      text: "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10", "All the numbers of nums are unique."],
    starterCode: {
      javascript: `function subsets(nums) {
  // Write your solution here
  
}

// Test cases
const sortMatrix = arr => arr.map(a => a.sort((x,y) => x-y)).sort((a,b) => a.length - b.length || a[0] - b[0]);
console.log(JSON.stringify(sortMatrix(subsets([1,2,3])))); // Expected: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
console.log(JSON.stringify(sortMatrix(subsets([0])))); // Expected: [[],[0]]
console.log(JSON.stringify(sortMatrix(subsets([])))); // Expected: [[]]
console.log(JSON.stringify(sortMatrix(subsets([1,2])))); // Expected: [[],[1],[2],[1,2]]`,
    },
    expectedOutput: {
      javascript: "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]\n[[],[0]]\n[[]]\n[[],[1],[2],[1,2]]",
    },
  },

  "permutations": {
    id: "permutations",
    title: "Permutations",
    difficulty: "Medium",
    category: "Array • Backtracking",
    description: {
      text: "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 6", "-10 ≤ nums[i] ≤ 10", "All the integers of nums are unique."],
    starterCode: {
      javascript: `function permute(nums) {
  // Write your solution here
  
}

// Test cases
const sortPerms = arr => arr.sort((a,b) => a.join('').localeCompare(b.join('')));
console.log(JSON.stringify(sortPerms(permute([1,2,3])))); // Expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(JSON.stringify(sortPerms(permute([0,1])))); // Expected: [[0,1],[1,0]]
console.log(JSON.stringify(sortPerms(permute([1])))); // Expected: [[1]]
console.log(JSON.stringify(sortPerms(permute([5,6])))); // Expected: [[5,6],[6,5]]`,
    },
    expectedOutput: {
      javascript: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n[[0,1],[1,0]]\n[[1]]\n[[5,6],[6,5]]",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack Simulation",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: ["An input string is valid if open brackets are closed by the same type of brackets and in the correct order."],
    },
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      }
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'."],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("([)]")); // Expected: false`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse\nfalse",
    },
  },

  "two-sum-ii-input-array-is-sorted": {
    id: "two-sum-ii-input-array-is-sorted",
    title: "Two Sum II - Input Array Is Sorted",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return their indices incremented by 1.",
      notes: ["The tests are generated such that there is exactly one solution. You may not use the same element twice."],
    },
    examples: [
      {
        input: "numbers = [2,7,11,15], target = 9",
        output: "[1,2]",
      }
    ],
    constraints: ["2 ≤ numbers.length ≤ 3 * 10⁴", "-1000 ≤ numbers[i] ≤ 1000", "numbers is sorted in non-decreasing order.", "-1000 ≤ target ≤ 1000"],
    starterCode: {
      javascript: `function twoSumSorted(numbers, target) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(twoSumSorted([2,7,11,15], 9))); // Expected: [1,2]
console.log(JSON.stringify(twoSumSorted([2,3,4], 6))); // Expected: [1,3]
console.log(JSON.stringify(twoSumSorted([-1,0], -1))); // Expected: [1,2]
console.log(JSON.stringify(twoSumSorted([5,25,75], 100))); // Expected: [2,3]`,
    },
    expectedOutput: {
      javascript: "[1,2]\n[1,3]\n[1,2]\n[2,3]",
    },
  },

  "minimum-size-subarray-sum": {
    id: "minimum-size-subarray-sum",
    title: "Minimum Size Subarray Sum",
    difficulty: "Medium",
    category: "Array • Sliding Window",
    description: {
      text: "Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.",
      notes: [],
    },
    examples: [
      {
        input: "target = 7, nums = [2,3,1,2,4,3]",
        output: "2",
      }
    ],
    constraints: ["1 ≤ target ≤ 10⁹", "1 ≤ nums.length ≤ 10⁵", "1 ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function minSubArrayLen(target, nums) {
  // Write your solution here
  
}

// Test cases
console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // Expected: 2
console.log(minSubArrayLen(4, [1,4,4])); // Expected: 1
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])); // Expected: 0
console.log(minSubArrayLen(5, [2,3,1,1,1])); // Expected: 2`,
    },
    expectedOutput: {
      javascript: "2\n1\n0\n2",
    },
  },

  "3sum-closest": {
    id: "3sum-closest",
    title: "3Sum Closest",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers.",
      notes: ["You may assume that each input would have exactly one solution."],
    },
    examples: [
      {
        input: "nums = [-1,2,1,-4], target = 1",
        output: "2",
      }
    ],
    constraints: ["3 ≤ nums.length ≤ 500", "-1000 ≤ nums[i] ≤ 1000", "-10⁴ ≤ target ≤ 10⁴"],
    starterCode: {
      javascript: `function threeSumClosest(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(threeSumClosest([-1,2,1,-4], 1)); // Expected: 2
console.log(threeSumClosest([0,0,0], 1)); // Expected: 0
console.log(threeSumClosest([1,1,1,0], -100)); // Expected: 2
console.log(threeSumClosest([1,1,1,1], 3)); // Expected: 3`,
    },
    expectedOutput: {
      javascript: "2\n0\n2\n3",
    },
  },

  "house-robber": {
    id: "house-robber",
    title: "House Robber",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected. Return the maximum amount of money you can rob tonight without alerting the police.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "4",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 400"],
    starterCode: {
      javascript: `function rob(nums) {
  // Write your solution here
  
}

// Test cases
console.log(rob([1,2,3,1])); // Expected: 4
console.log(rob([2,7,9,3,1])); // Expected: 12
console.log(rob([0])); // Expected: 0
console.log(rob([2,1,1,2])); // Expected: 4`,
    },
    expectedOutput: {
      javascript: "4\n12\n0\n4",
    },
  },

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
      notes: ["You may assume that you have an infinite number of each kind of coin."],
    },
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
      }
    ],
    constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹ - 1", "0 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
  
}

// Test cases
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1
console.log(coinChange([1], 0)); // Expected: 0
console.log(coinChange([186,419,83,408], 6249)); // Expected: 20`,
    },
    expectedOutput: {
      javascript: "3\n-1\n0\n20",
    },
  },

  "find-the-duplicate-number": {
    id: "find-the-duplicate-number",
    title: "Find the Duplicate Number",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number.",
      notes: ["You must solve the problem without modifying the array nums and uses only constant extra space."],
    },
    examples: [
      {
        input: "nums = [1,3,4,2,2]",
        output: "2",
      }
    ],
    constraints: ["1 ≤ n ≤ 10⁵", "nums.length == n + n", "1 ≤ nums[i] ≤ n", "All the integers in nums appear only once except for precisely one integer which appears two or more times."],
    starterCode: {
      javascript: `function findDuplicate(nums) {
  // Write your solution here
  
}

// Test cases
console.log(findDuplicate([1,3,4,2,2])); // Expected: 2
console.log(findDuplicate([3,1,3,4,2])); // Expected: 3
console.log(findDuplicate([3,3,3,3,3])); // Expected: 3
console.log(findDuplicate([2,1,2])); // Expected: 2`,
    },
    expectedOutput: {
      javascript: "2\n3\n3\n2",
    },
  },

  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Array • Sorting Matrix",
    description: {
      text: "Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
      notes: [],
    },
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      }
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2", "0 ≤ start_i ≤ end_i ≤ 10⁴"],
    starterCode: {
      javascript: `function merge(intervals) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(merge([[1,3],[2,6],[8,10],[15,18]]))); // Expected: [[1,6],[8,10],[15,18]]
console.log(JSON.stringify(merge([[1,4],[4,5]]))); // Expected: [[1,5]]
console.log(JSON.stringify(merge([[1,4],[2,3]]))); // Expected: [[1,4]]
console.log(JSON.stringify(merge([[5,5]]))); // Expected: [[5,5]]`,
    },
    expectedOutput: {
      javascript: "[[1,6],[8,10],[15,18]]\n[[1,5]]\n[[1,4]]\n[[5,5]]",
    },
  },

  "insert-interval": {
    id: "insert-interval",
    title: "Insert Interval",
    difficulty: "Medium",
    category: "Array • Simulation Matrix",
    description: {
      text: "You are given an array of non-overlapping intervals sorted by their start time. Insert a newInterval into the intervals such that the intervals are still sorted and non-overlapping.",
      notes: [],
    },
    examples: [
      {
        input: "intervals = [[1,3],[6,9]], newInterval = [2,5]",
        output: "[[1,5],[6,9]]",
      }
    ],
    constraints: ["0 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2", "intervals is sorted by start time.", "newInterval.length == 2"],
    starterCode: {
      javascript: `function insert(intervals, newInterval) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(insert([[1,3],[6,9]], [2,5]))); // Expected: [[1,5],[6,9]]
console.log(JSON.stringify(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))); // Expected: [[1,2],[3,10],[12,16]]
console.log(JSON.stringify(insert([], [5,7]))); // Expected: [[5,7]]
console.log(JSON.stringify(insert([[1,5]], [2,3]))); // Expected: [[1,5]]`,
    },
    expectedOutput: {
      javascript: "[[1,5],[6,9]]\n[[1,2],[3,10],[12,16]]\n[[5,7]]\n[[1,5]]",
    },
  },

  "non-overlapping-intervals": {
    id: "non-overlapping-intervals",
    title: "Non-overlapping Intervals",
    difficulty: "Medium",
    category: "Array • Greedy Sorting",
    description: {
      text: "Given an array of intervals intervals where intervals[i] = [start_i, end_i], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
      notes: [],
    },
    examples: [
      {
        input: "intervals = [[1,2],[2,3],[3,4],[1,3]]",
        output: "1",
      }
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁵", "intervals[i].length == 2", "-5 * 10⁴ ≤ start_i < end_i ≤ 5 * 10⁴"],
    starterCode: {
      javascript: `function eraseOverlapIntervals(intervals) {
  // Write your solution here
  
}

// Test cases
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // Expected: 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])); // Expected: 2
console.log(eraseOverlapIntervals([[1,2],[2,3]])); // Expected: 0
console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]])); // Expected: 2`,
    },
    expectedOutput: {
      javascript: "1\n2\n0\n2",
    },
  },

  "valid-sudoku": {
    id: "valid-sudoku",
    title: "Valid Sudoku",
    difficulty: "Medium",
    category: "Array • Hash Table Matrix",
    description: {
      text: "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the traditional Sudoku rules (no duplicates in rows, columns, or 3x3 sub-grids).",
      notes: ["The input board contains digits '1'-'9' and character '.' for empty cells."],
    },
    examples: [
      {
        input: 'board = [["5","3",".",".","7",".",".",".","."],...]',
        output: "true",
      }
    ],
    constraints: ["board.length == 9", "board[i].length == 9", "board[i][j] is a digit '1'-'9' or '.'."],
    starterCode: {
      javascript: `function isValidSudoku(board) {
  // Write your solution here
  
}

// Test cases
const b1 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
const b2 = [...b1]; b2[0] = ["8","3",".",".","7",".",".",".","."]; // invalidates box/row
console.log(isValidSudoku(b1)); // Expected: true
console.log(isValidSudoku(b2)); // Expected: false
console.log(isValidSudoku(Array(9).fill(0).map(() => Array(9).fill('.')))); // Expected: true
console.log(isValidSudoku(Array(9).fill(0).map((_,i) => Array(9).fill(0).map((_,j) => j === 0 ? String(i+1) : '.')))); // Expected: true`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue\ntrue",
    },
  },

  "set-matrix-zeroes": {
    id: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    category: "Array • Simulation Matrix",
    description: {
      text: "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's. Do it in-place.",
      notes: [],
    },
    examples: [
      {
        input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
        output: "[[1,0,1],[0,0,0],[1,0,1]]",
      }
    ],
    constraints: ["m == matrix.length", "n == matrix[0].length", "1 ≤ m, n ≤ 200", "-2³¹ ≤ matrix[i][j] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function setZeroes(matrix) {
  // Write your solution here
  
}

// Test cases
let m1 = [[1,1,1],[1,0,1],[1,1,1]]; setZeroes(m1); console.log(JSON.stringify(m1)); // Expected: [[1,0,1],[0,0,0],[1,0,1]]
let m2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]; setZeroes(m2); console.log(JSON.stringify(m2)); // Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
let m3 = [[1]]; setZeroes(m3); console.log(JSON.stringify(m3)); // Expected: [[1]]
let m4 = [[0]]; setZeroes(m4); console.log(JSON.stringify(m4)); // Expected: [[0]]`,
    },
    expectedOutput: {
      javascript: "[[1,0,1],[0,0,0],[1,0,1]]\n[[0,0,0,0],[0,4,5,0],[0,3,1,0]]\n[[1]]\n[[0]]",
    },
  },

  "game-of-life": {
    id: "game-of-life",
    title: "Game of Life",
    difficulty: "Medium",
    category: "Array • Simulation Matrix",
    description: {
      text: "According to John Conway's Game of Life, calculate the next state of a given grid board of m x n cells dynamically in-place based on its 8 neighbors.",
      notes: [],
    },
    examples: [
      {
        input: "board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]",
        output: "[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]",
      }
    ],
    constraints: ["m == board.length", "n == board[i].length", "1 ≤ m, n ≤ 25", "board[i][j] is 0 or 1."],
    starterCode: {
      javascript: `function gameOfLife(board) {
  // Write your solution here
  
}

// Test cases
let g1 = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]; gameOfLife(g1); console.log(JSON.stringify(g1)); // Expected: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
let g2 = [[1,1],[1,0]]; gameOfLife(g2); console.log(JSON.stringify(g2)); // Expected: [[1,1],[1,1]]
let g3 = [[0]]; gameOfLife(g3); console.log(JSON.stringify(g3)); // Expected: [[0]]
let g4 = [[1]]; gameOfLife(g4); console.log(JSON.stringify(g4)); // Expected: [[0]]`,
    },
    expectedOutput: {
      javascript: "[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]\n[[1,1],[1,1]]\n[[0]]\n[[0]]",
    },
  },

  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Medium",
    category: "Array • Backtracking DFS Matrix",
    description: {
      text: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
      notes: ["The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once."],
    },
    examples: [
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: "true",
      }
    ],
    constraints: ["m == board.length", "n == board[i].length", "1 ≤ m, n ≤ 6", "1 ≤ word.length ≤ 15"],
    starterCode: {
      javascript: `function exist(board, word) {
  // Write your solution here
  
}

// Test cases
const grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
console.log(exist(grid, "ABCCED")); // Expected: true
console.log(exist(grid, "SEE")); // Expected: true
console.log(exist(grid, "ABCB")); // Expected: false
console.log(exist([["A"]], "A")); // Expected: true`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse\ntrue",
    },
  },

  "longest-consecutive-sequence": {
    id: "longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    difficulty: "Medium",
    category: "Array • Hash Table",
    description: {
      text: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
      notes: ["You must write an algorithm that runs in O(n) time."],
    },
    examples: [
      {
        input: "nums = [100,4,200,1,3,2]",
        output: "4",
      }
    ],
    constraints: ["0 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function longestConsecutive(nums) {
  // Write your solution here
  
}

// Test cases
console.log(longestConsecutive([100,4,200,1,3,2])); // Expected: 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // Expected: 9
console.log(longestConsecutive([])); // Expected: 0
console.log(longestConsecutive([1,2,3,4,10,11,12])); // Expected: 4`,
    },
    expectedOutput: {
      javascript: "4\n9\n0\n4",
    },
  },

  "top-k-frequent-elements": {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Array • Hash Table Sorting",
    description: {
      text: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴", "k is in the range [1, the number of unique elements in the array].", "It is guaranteed that the answer is unique."],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(topKFrequent([1,1,1,2,2,3], 2).sort())); // Expected: [1,2]
console.log(JSON.stringify(topKFrequent([1], 1))); // Expected: [1]
console.log(JSON.stringify(topKFrequent([4,4,4,6,6,8], 2).sort())); // Expected: [4,6]
console.log(JSON.stringify(topKFrequent([-1,-1,2,2,2,3], 1))); // Expected: [2]`,
    },
    expectedOutput: {
      javascript: "[1,2]\n[1]\n[4,6]\n[2]",
    },
  },

  "gas-station": {
    id: "gas-station",
    title: "Gas Station",
    difficulty: "Medium",
    category: "Array • Greedy",
    description: {
      text: "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.",
      notes: ["If there exists a solution, it is guaranteed to be unique."],
    },
    examples: [
      {
        input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
        output: "3",
      }
    ],
    constraints: ["n == gas.length == cost.length", "1 ≤ n ≤ 10⁵", "0 ≤ gas[i], cost[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function canCompleteCircuit(gas, cost) {
  // Write your solution here
  
}

// Test cases
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])); // Expected: 3
console.log(canCompleteCircuit([2,3,4], [3,4,3])); // Expected: -1
console.log(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1])); // Expected: 4
console.log(canCompleteCircuit([3,1,1], [1,2,2])); // Expected: 0`,
    },
    expectedOutput: {
      javascript: "3\n-1\n4\n0",
    },
  },

  "daily-temperatures": {
    id: "daily-temperatures",
    title: "Daily Temperatures",
    difficulty: "Medium",
    category: "Array • Stack Simulation Monotonic",
    description: {
      text: "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",
      notes: [],
    },
    examples: [
      {
        input: "temperatures = [73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]",
      }
    ],
    constraints: ["1 ≤ temperatures.length ≤ 10⁵", "30 ≤ temperatures[i] ≤ 100"],
    starterCode: {
      javascript: `function dailyTemperatures(temperatures) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(dailyTemperatures([73,74,75,71,69,72,76,73]))); // Expected: [1,1,4,2,1,1,0,0]
console.log(JSON.stringify(dailyTemperatures([30,40,50,60]))); // Expected: [1,1,1,0]
console.log(JSON.stringify(dailyTemperatures([60,50,40,30]))); // Expected: [0,0,0,0]
console.log(JSON.stringify(dailyTemperatures([30,60,30,60]))); // Expected: [1,0,1,0]`,
    },
    expectedOutput: {
      javascript: "[1,1,4,2,1,1,0,0]\n[1,1,1,0]\n[0,0,0,0]\n[1,0,1,0]",
    },
  },
  "is-subsequence": {
    id: "is-subsequence",
    title: "Is Subsequence",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Given two strings s and t, return true if s is a subsequence of t, or false otherwise.",
      notes: ["A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters."],
    },
    examples: [
      {
        input: 's = "abc", t = "ahbgdc"',
        output: "true",
      }
    ],
    constraints: ["0 ≤ s.length ≤ 100", "0 ≤ t.length ≤ 10⁴", "s and t consist only of lowercase English letters."],
    starterCode: {
      javascript: `function isSubsequence(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(isSubsequence("abc", "ahbgdc")); // Expected: true
console.log(isSubsequence("axc", "ahbgdc")); // Expected: false
console.log(isSubsequence("", "ahbgdc")); // Expected: true
console.log(isSubsequence("b", "abc")); // Expected: true`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue\ntrue",
    },
  },

  "reverse-words-in-a-string": {
    id: "reverse-words-in-a-string",
    title: "Reverse Words in a String",
    difficulty: "Medium",
    category: "String • Two Pointers",
    description: {
      text: "Given an input string s, reverse the order of the words.",
      notes: ["A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space. Return a string of the words in reverse order concatenated by a single space, reducing extra leading, trailing, or multiple spaces between words."],
    },
    examples: [
      {
        input: 's = "the sky is blue"',
        output: '"blue is sky the"',
      }
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s contains English letters (upper-case and lower-case), digits, and spaces."],
    starterCode: {
      javascript: `function reverseWords(s) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(reverseWords("the sky is blue"))); // Expected: "blue is sky the"
console.log(JSON.stringify(reverseWords("  hello world  "))); // Expected: "world hello"
console.log(JSON.stringify(reverseWords("a good   example"))); // Expected: "example good a"
console.log(JSON.stringify(reverseWords("single"))); // Expected: "single"`,
    },
    expectedOutput: {
      javascript: '"blue is sky the"\n"world hello"\n"example good a"\n"single"',
    },
  },

  "first-unique-character-in-a-string": {
    id: "first-unique-character-in-a-string",
    title: "First Unique Character in a String",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
      notes: [],
    },
    examples: [
      {
        input: 's = "leetcode"',
        output: "0",
      }
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s consists of only lowercase English letters."],
    starterCode: {
      javascript: `function firstUniqChar(s) {
  // Write your solution here
  
}

// Test cases
console.log(firstUniqChar("leetcode")); // Expected: 0
console.log(firstUniqChar("loveleetcode")); // Expected: 2
console.log(firstUniqChar("aabb")); // Expected: -1
console.log(firstUniqChar("z")); // Expected: 0`,
    },
    expectedOutput: {
      javascript: "0\n2\n-1\n0",
    },
  },

  "string-to-integer-atoi": {
    id: "string-to-integer-atoi",
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    category: "String • Simulation",
    description: {
      text: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer by dropping leading whitespaces, reading an optional sign character, and parsing digits until a non-digit is encountered.",
      notes: ["Clamping logic: If the integer is out of the 32-bit signed integer range [-2³¹, 2³¹ - 1], then clamp the integer so that it remains in the range."],
    },
    examples: [
      {
        input: 's = "42"',
        output: "42",
      }
    ],
    constraints: ["0 ≤ s.length ≤ 200", "s consists of English letters, digits, spaces, and signs."],
    starterCode: {
      javascript: `function myAtoi(s) {
  // Write your solution here
  
}

// Test cases
console.log(myAtoi("42")); // Expected: 42
console.log(myAtoi("   -42")); // Expected: -42
console.log(myAtoi("4193 with words")); // Expected: 4193
console.log(myAtoi("-91283472332")); // Expected: -2147483648`,
    },
    expectedOutput: {
      javascript: "42\n-42\n4193\n-2147483648",
    },
  },

  "valid-palindrome-ii": {
    id: "valid-palindrome-ii",
    title: "Valid Palindrome II",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Given a string s, return true if the s can be palindrome after deleting at most one character from it.",
      notes: [],
    },
    examples: [
      {
        input: 's = "aba"',
        output: "true",
      },
      {
        input: 's = "abca"',
        output: "true",
      }
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s consists of lowercase English letters."],
    starterCode: {
      javascript: `function validPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(validPalindrome("aba")); // Expected: true
console.log(validPalindrome("abca")); // Expected: true
console.log(validPalindrome("abc")); // Expected: false
console.log(validPalindrome("teebbette")); // Expected: true`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse\ntrue",
    },
  },

  "maximum-product-subarray": {
    id: "maximum-product-subarray",
    title: "Maximum Product Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find a contiguous non-empty subarray that has the largest product, and return the product.",
      notes: ["The test cases are generated so that the answer will fit in a 32-bit integer."],
    },
    examples: [
      {
        input: "nums = [2,3,-2,4]",
        output: "6",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 2 * 10⁴", "-10 ≤ nums[i] ≤ 10"],
    starterCode: {
      javascript: `function maxProduct(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxProduct([2,3,-2,4])); // Expected: 6
console.log(maxProduct([-2,0,-1])); // Expected: 0
console.log(maxProduct([-4,-3])); // Expected: 12
console.log(maxProduct([-2])); // Expected: -2`,
    },
    expectedOutput: {
      javascript: "6\n0\n12\n-2",
    },
  },

  "find-minimum-in-rotated-sorted-array": {
    id: "find-minimum-in-rotated-sorted-array",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
      notes: ["You must write an algorithm that runs in O(log n) time."],
    },
    examples: [
      {
        input: "nums = [3,4,5,1,2]",
        output: "1",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 5000", "-5000 ≤ nums[i] ≤ 5000", "All the integers of nums are unique."],
    starterCode: {
      javascript: `function findMin(nums) {
  // Write your solution here
  
}

// Test cases
console.log(findMin([3,4,5,1,2])); // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log(findMin([11,13,15,17])); // Expected: 11
console.log(findMin([2,1])); // Expected: 1`,
    },
    expectedOutput: {
      javascript: "1\n0\n11\n1",
    },
  },

  "missing-number": {
    id: "missing-number",
    title: "Missing Number",
    difficulty: "Easy",
    category: "Array • Math Bit Manipulation",
    description: {
      text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [3,0,1]",
        output: "2",
      }
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 10⁴", "0 ≤ nums[i] ≤ n", "All the numbers of nums are unique."],
    starterCode: {
      javascript: `function missingNumber(nums) {
  // Write your solution here
  
}

// Test cases
console.log(missingNumber([3,0,1])); // Expected: 2
console.log(missingNumber([0,1])); // Expected: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Expected: 8
console.log(missingNumber([0])); // Expected: 1`,
    },
    expectedOutput: {
      javascript: "2\n2\n8\n1",
    },
  },

  "pascals-triangle": {
    id: "pascals-triangle",
    title: "Pascal's Triangle",
    difficulty: "Easy",
    category: "Array • Simulation Matrix",
    description: {
      text: "Given an integer numRows, return the first numRows of Pascal's triangle.",
      notes: [],
    },
    examples: [
      {
        input: "numRows = 5",
        output: "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]",
      }
    ],
    constraints: ["1 ≤ numRows ≤ 30"],
    starterCode: {
      javascript: `function generate(numRows) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(generate(5))); // Expected: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(JSON.stringify(generate(1))); // Expected: [[1]]
console.log(JSON.stringify(generate(2))); // Expected: [[1],[1,1]]
console.log(JSON.stringify(generate(3))); // Expected: [[1],[1,1],[1,2,1]]`,
    },
    expectedOutput: {
      javascript: "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]\n[[1]]\n[[1],[1,1]]\n[[1],[1,1],[1,2,1]]",
    },
  },

  "unique-paths": {
    id: "unique-paths",
    title: "Unique Paths",
    difficulty: "Medium",
    category: "Math • Dynamic Programming Matrix",
    description: {
      text: "There is a robot on an m x n grid. The robot is initially located at the top-left corner and tries to move to the bottom-right corner. The robot can only move either down or right at any point in time. Given the two integers m and n, return the number of possible unique paths.",
      notes: [],
    },
    examples: [
      {
        input: "m = 3, n = 7",
        output: "28",
      }
    ],
    constraints: ["1 ≤ m, n ≤ 100"],
    starterCode: {
      javascript: `function uniquePaths(m, n) {
  // Write your solution here
  
}

// Test cases
console.log(uniquePaths(3, 7)); // Expected: 28
console.log(uniquePaths(3, 2)); // Expected: 3
console.log(uniquePaths(3, 3)); // Expected: 6
console.log(uniquePaths(1, 1)); // Expected: 1`,
    },
    expectedOutput: {
      javascript: "28\n3\n6\n1",
    },
  },

  "minimum-path-sum": {
    id: "minimum-path-sum",
    title: "Minimum Path Sum",
    difficulty: "Medium",
    category: "Array • Dynamic Programming Matrix",
    description: {
      text: "Given a m x n grid filled with non-negative numbers, find a path from top-left to bottom-right, which minimizes the sum of all numbers along its path.",
      notes: ["You can only move either down or right at any point in time."],
    },
    examples: [
      {
        input: "grid = [[1,3,1],[1,5,1],[4,2,1]]",
        output: "7",
      }
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 200", "0 ≤ grid[i][j] ≤ 200"],
    starterCode: {
      javascript: `function minPathSum(grid) {
  // Write your solution here
  
}

// Test cases
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // Expected: 7
console.log(minPathSum([[1,2,3],[4,5,6]])); // Expected: 12
console.log(minPathSum([[5]])); // Expected: 5
console.log(minPathSum([[1,2],[1,1]])); // Expected: 3`,
    },
    expectedOutput: {
      javascript: "7\n12\n5\n3",
    },
  },

  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    category: "Array • Dynamic Programming Binary Search",
    description: {
      text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [10,9,2,5,3,7,101,18]",
        output: "4",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 2500", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Expected: 4
console.log(lengthOfLIS([0,1,0,3,2,3])); // Expected: 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // Expected: 1
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6])); // Expected: 6`,
    },
    expectedOutput: {
      javascript: "4\n4\n1\n6",
    },
  },

  "jump-game": {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Array • Greedy",
    description: {
      text: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [2,3,1,1,4]",
        output: "true",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "0 ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function canJump(nums) {
  // Write your solution here
  
}

// Test cases
console.log(canJump([2,3,1,1,4])); // Expected: true
console.log(canJump([3,2,1,0,4])); // Expected: false
console.log(canJump([0])); // Expected: true
console.log(canJump([2,0,0])); // Expected: true`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue\ntrue",
    },
  },

  "jump-game-ii": {
    id: "jump-game-ii",
    title: "Jump Game II",
    difficulty: "Medium",
    category: "Array • Greedy",
    description: {
      text: "Given an integer array nums of length n, return the minimum number of jumps to reach nums[n - 1] from the 0th index.",
      notes: ["You can assume that you can always reach the last index."],
    },
    examples: [
      {
        input: "nums = [2,3,1,1,4]",
        output: "2",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "0 ≤ nums[i] ≤ 1000"],
    starterCode: {
      javascript: `function jump(nums) {
  // Write your solution here
  
}

// Test cases
console.log(jump([2,3,1,1,4])); // Expected: 2
console.log(jump([2,3,0,1,4])); // Expected: 2
console.log(jump([0])); // Expected: 0
console.log(jump([1,2,3])); // Expected: 2`,
    },
    expectedOutput: {
      javascript: "2\n2\n0\n2",
    },
  },

  "sort-colors": {
    id: "sort-colors",
    title: "Sort Colors",
    difficulty: "Medium",
    category: "Array • Two Pointers Simulation",
    description: {
      text: "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red (0), white (1), and blue (2).",
      notes: ["You must solve this problem without using the library's sort function."],
    },
    examples: [
      {
        input: "nums = [2,0,2,1,1,0]",
        output: "[0,0,1,1,2,2]",
      }
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 300", "nums[i] is either 0, 1, or 2."],
    starterCode: {
      javascript: `function sortColors(nums) {
  // Write your solution here
  
}

// Test cases
let sc1 = [2,0,2,1,1,0]; sortColors(sc1); console.log(JSON.stringify(sc1)); // Expected: [0,0,1,1,2,2]
let sc2 = [2,0,1]; sortColors(sc2); console.log(JSON.stringify(sc2)); // Expected: [0,1,2]
let sc3 = [0]; sortColors(sc3); console.log(JSON.stringify(sc3)); // Expected: [0]
let sc4 = [1,1,1]; sortColors(sc4); console.log(JSON.stringify(sc4)); // Expected: [1,1,1]`,
    },
    expectedOutput: {
      javascript: "[0,0,1,1,2,2]\n[0,1,2]\n[0]\n[1,1,1]",
    },
  },

  "remove-element": {
    id: "remove-element",
    title: "Remove Element",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [3,2,2,3], val = 3",
        output: "2, nums = [2,2,_,_]",
      }
    ],
    constraints: ["0 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 50", "0 ≤ val ≤ 100"],
    starterCode: {
      javascript: `function removeElement(nums, val) {
  // Write your solution here
  
}

// Test cases
let re1 = [3,2,2,3]; const k1 = removeElement(re1, 3); console.log(k1, JSON.stringify(re1.slice(0, k1).sort())); // Expected: 2 [2,2]
let re2 = [0,1,2,2,3,0,4,2]; const k2 = removeElement(re2, 2); console.log(k2, JSON.stringify(re2.slice(0, k2).sort())); // Expected: 5 [0,0,1,3,4]
let re3 = []; const k3 = removeElement(re3, 0); console.log(k3, JSON.stringify(re3.slice(0, k3))); // Expected: 0 []
let re4 = [1]; const k4 = removeElement(re4, 1); console.log(k4, JSON.stringify(re4.slice(0, k4))); // Expected: 0 []`,
    },
    expectedOutput: {
      javascript: "2 [2,2]\n5 [0,0,1,3,4]\n0 []\n0 []",
    },
  },

  "rotate-image": {
    id: "rotate-image",
    title: "Rotate Image",
    difficulty: "Medium",
    category: "Array • Simulation Matrix",
    description: {
      text: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise) in-place.",
      notes: [],
    },
    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[[7,4,1],[8,5,2],[9,6,3]]",
      }
    ],
    constraints: ["n == matrix.length == matrix[i].length", "1 ≤ n ≤ 20", "-1000 ≤ matrix[i][j] ≤ 1000"],
    starterCode: {
      javascript: `function rotate(matrix) {
  // Write your solution here
  
}

// Test cases
let ri1 = [[1,2,3],[4,5,6],[7,8,9]]; rotate(ri1); console.log(JSON.stringify(ri1)); // Expected: [[7,4,1],[8,5,2],[9,6,3]]
let ri2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]; rotate(ri2); console.log(JSON.stringify(ri2)); // Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
let ri3 = [[1]]; rotate(ri3); console.log(JSON.stringify(ri3)); // Expected: [[1]]
let ri4 = [[1,2],[3,4]]; rotate(ri4); console.log(JSON.stringify(ri4)); // Expected: [[3,1],[4,2]]`,
    },
    expectedOutput: {
      javascript: "[[7,4,1],[8,5,2],[9,6,3]]\n[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]\n[[1]]\n[[3,1],[4,2]]",
    },
  },

  "repeated-dna-sequences": {
    id: "repeated-dna-sequences",
    title: "Repeated DNA Sequences",
    difficulty: "Medium",
    category: "String • Hash Table Sliding Window",
    description: {
      text: "Given a string s that represents a DNA sequence, return all the 10-character-long substrings that occur more than once in a DNA molecule. You may return the answer in any order.",
      notes: [],
    },
    examples: [
      {
        input: 's = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"',
        output: '["AAAAACCCCC","CCCCCAAAAA"]',
      }
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is either 'A', 'C', 'G', or 'T'."],
    starterCode: {
      javascript: `function findRepeatedDnaSequences(s) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT").sort())); // Expected: ["AAAAACCCCC","CCCCCAAAAA"]
console.log(JSON.stringify(findRepeatedDnaSequences("AAAAAAAAAAAAA"))); // Expected: ["AAAAAAAAAA"]
console.log(JSON.stringify(findRepeatedDnaSequences("ABC"))); // Expected: []
console.log(JSON.stringify(findRepeatedDnaSequences("AAAAAAAAAAA"))); // Expected: ["AAAAAAAAAA"]`,
    },
    expectedOutput: {
      javascript: '["AAAAACCCCC","CCCCCAAAAA"]\n["AAAAAAAAAA"]\n[]\n["AAAAAAAAAA"]',
    },
  },

  "find-the-index-of-the-first-occurrence-in-a-string": {
    id: "find-the-index-of-the-first-occurrence-in-a-string",
    title: "Find the Index of the First Occurrence in a String",
    difficulty: "Easy",
    category: "String • Simulation Two Pointers",
    description: {
      text: "Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
      notes: [],
    },
    examples: [
      {
        input: 'haystack = "sadbutsad", needle = "sad"',
        output: "0",
      }
    ],
    constraints: ["1 ≤ haystack.length, needle.length ≤ 10⁴", "haystack and needle consist of only lowercase English letters."],
    starterCode: {
      javascript: `function strStr(haystack, needle) {
  // Write your solution here
  
}

// Test cases
console.log(strStr("sadbutsad", "sad")); // Expected: 0
console.log(strStr("leetcode", "leeto")); // Expected: -1
console.log(strStr("abc", "c")); // Expected: 2
console.log(strStr("mississippi", "issip")); // Expected: 4`,
    },
    expectedOutput: {
      javascript: "0\n-1\n2\n4",
    },
  },

  "squares-of-a-sorted-array": {
    id: "squares-of-a-sorted-array",
    title: "Squares of a Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
      notes: ["Squaring each element and sorting the new array is very trivial, try to find an O(n) solution using a two-pointer approach."],
    },
    examples: [
      {
        input: "nums = [-4,-1,0,3,10]",
        output: "[0,1,9,16,100]",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁴ ≤ nums[i] ≤ 10⁴", "nums is sorted in non-decreasing order."],
    starterCode: {
      javascript: `function sortedSquares(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(sortedSquares([-4,-1,0,3,10]))); // Expected: [0,1,9,16,100]
console.log(JSON.stringify(sortedSquares([-7,-3,2,3,11]))); // Expected: [4,9,9,49,121]
console.log(JSON.stringify(sortedSquares([0]))); // Expected: [0]
console.log(JSON.stringify(sortedSquares([-2,-1]))); // Expected: [1,4]`,
    },
    expectedOutput: {
      javascript: "[0,1,9,16,100]\n[4,9,9,49,121]\n[0]\n[1,4]",
    },
  },
  "longest-common-subsequence": {
    id: "longest-common-subsequence",
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    category: "String • Dynamic Programming Matrix",
    description: {
      text: "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
      notes: ["A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters."],
    },
    examples: [
      {
        input: 'text1 = "abcde", text2 = "ace"',
        output: "3",
      }
    ],
    constraints: ["1 ≤ text1.length, text2.length ≤ 1000", "text1 and text2 consist of lowercase English characters only."],
    starterCode: {
      javascript: `function longestCommonSubsequence(text1, text2) {
  // Write your solution here
  
}

// Test cases
console.log(longestCommonSubsequence("abcde", "ace")); // Expected: 3
console.log(longestCommonSubsequence("abc", "abc")); // Expected: 3
console.log(longestCommonSubsequence("abc", "def")); // Expected: 0
console.log(longestCommonSubsequence("ezupkr", "ubmra")); // Expected: 2`,
    },
    expectedOutput: {
      javascript: "3\n3\n0\n2",
    },
  },

  "palindromic-substrings": {
    id: "palindromic-substrings",
    title: "Palindromic Substrings",
    difficulty: "Medium",
    category: "String • Two Pointers Dynamic Programming",
    description: {
      text: "Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward.",
      notes: ["A substring is a contiguous sequence of characters within the string."],
    },
    examples: [
      {
        input: 's = "abc"',
        output: "3",
      }
    ],
    constraints: ["1 ≤ s.length ≤ 1000", "s consists of lowercase English letters."],
    starterCode: {
      javascript: `function countSubstrings(s) {
  // Write your solution here
  
}

// Test cases
console.log(countSubstrings("abc")); // Expected: 3
console.log(countSubstrings("aaa")); // Expected: 6
console.log(countSubstrings("a")); // Expected: 1
console.log(countSubstrings("racecar")); // Expected: 10`,
    },
    expectedOutput: {
      javascript: "3\n6\n1\n10",
    },
  },

  "first-missing-positive": {
    id: "first-missing-positive",
    title: "First Missing Positive",
    difficulty: "Hard",
    category: "Array • Cyclic Sort Simulation",
    description: {
      text: "Given an unsorted integer array nums, return the smallest missing positive integer.",
      notes: ["You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space."],
    },
    examples: [
      {
        input: "nums = [1,2,0]",
        output: "3",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function firstMissingPositive(nums) {
  // Write your solution here
  
}

// Test cases
console.log(firstMissingPositive([1,2,0])); // Expected: 3
console.log(firstMissingPositive([3,4,-1,1])); // Expected: 2
console.log(firstMissingPositive([7,8,9,11,12])); // Expected: 1
console.log(firstMissingPositive([1])); // Expected: 2`,
    },
    expectedOutput: {
      javascript: "3\n2\n1\n2",
    },
  },

  "valid-number": {
    id: "valid-number",
    title: "Valid Number",
    difficulty: "Hard",
    category: "String • Simulation Deterministic Finite Automaton",
    description: {
      text: "Given a string s, return true if s is a valid number according to a strict mathematical syntax rules parsing decimal, integers, optional signs, exponents 'e/E' and dots.",
      notes: [],
    },
    examples: [
      {
        input: 's = "0"',
        output: "true",
      }
    ],
    constraints: ["1 ≤ s.length ≤ 20", "s consists of English letters, digits, dots, signs."],
    starterCode: {
      javascript: `function isValidNumber(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValidNumber("0")); // Expected: true
console.log(isValidNumber("e")); // Expected: false
console.log(isValidNumber("."); // Expected: false
console.log(isValidNumber(" -90e3   ".trim())); // Expected: true`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse\ntrue",
    },
  },

  "plus-one": {
    id: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    category: "Array • Math Simulation",
    description: {
      text: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. Increment the large integer by one and return the resulting array of digits.",
      notes: [],
    },
    examples: [
      {
        input: "digits = [1,2,3]",
        output: "[1,2,4]",
      }
    ],
    constraints: ["1 ≤ digits.length ≤ 100", "0 ≤ digits[i] ≤ 9", "digits does not contain any leading 0's."],
    starterCode: {
      javascript: `function plusOne(digits) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(plusOne([1,2,3]))); // Expected: [1,2,4]
console.log(JSON.stringify(plusOne([4,3,2,1]))); // Expected: [4,3,2,2]
console.log(JSON.stringify(plusOne([9]))); // Expected: [1,0]
console.log(JSON.stringify(plusOne([9,9,9]))); // Expected: [1,0,0,0]`,
    },
    expectedOutput: {
      javascript: "[1,2,4]\n[4,3,2,2]\n[1,0]\n[1,0,0,0]",
    },
  },

  "pascal-triangle-ii": {
    id: "pascal-triangle-ii",
    title: "Pascal's Triangle II",
    difficulty: "Easy",
    category: "Array • Math Simulation",
    description: {
      text: "Given an integer rowIndex, return the rowIndex-th (0-indexed) row of the Pascal's triangle.",
      notes: ["Could you optimize your algorithm to use only O(k) extra space?"],
    },
    examples: [
      {
        input: "rowIndex = 3",
        output: "[1,3,3,1]",
      }
    ],
    constraints: ["0 ≤ rowIndex ≤ 33"],
    starterCode: {
      javascript: `function getRow(rowIndex) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(getRow(3))); // Expected: [1,3,3,1]
console.log(JSON.stringify(getRow(0))); // Expected: [1]
console.log(JSON.stringify(getRow(1))); // Expected: [1,1]
console.log(JSON.stringify(getRow(4))); // Expected: [1,4,6,4,1]`,
    },
    expectedOutput: {
      javascript: "[1,3,3,1]\n[1]\n[1,1]\n[1,4,6,4,1]",
    },
  },

  "find-pivot-index": {
    id: "find-pivot-index",
    title: "Find Pivot Index",
    difficulty: "Easy",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an array of integers nums, calculate the pivot index of this array. The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right. If no index exists, return -1.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,7,3,6,5,6]",
        output: "3",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-1000 ≤ nums[i] ≤ 1000"],
    starterCode: {
      javascript: `function pivotIndex(nums) {
  // Write your solution here
  
}

// Test cases
console.log(pivotIndex([1,7,3,6,5,6])); // Expected: 3
console.log(pivotIndex([1,2,3])); // Expected: -1
console.log(pivotIndex([2,1,-1])); // Expected: 0
console.log(pivotIndex([-1,-1,-1,0,1,1])); // Expected: 0`,
    },
    expectedOutput: {
      javascript: "3\n-1\n0\n0",
    },
  },

  "fibonacci-number": {
    id: "fibonacci-number",
    title: "Fibonacci Number",
    difficulty: "Easy",
    category: "Math • Recursion Dynamic Programming",
    description: {
      text: "The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. Given n, calculate F(n).",
      notes: [],
    },
    examples: [
      {
        input: "n = 2",
        output: "1",
      }
    ],
    constraints: ["0 ≤ n ≤ 30"],
    starterCode: {
      javascript: `function fib(n) {
  // Write your solution here
  
}

// Test cases
console.log(fib(2)); // Expected: 1
console.log(fib(3)); // Expected: 2
console.log(fib(4)); // Expected: 3
console.log(fib(0)); // Expected: 0`,
    },
    expectedOutput: {
      javascript: "1\n2\n3\n0",
    },
  },

  "running-sum-of-1d-array": {
    id: "running-sum-of-1d-array",
    title: "Running Sum of 1d Array",
    difficulty: "Easy",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[1,3,6,10]",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 1000", "-10⁶ ≤ nums[i] ≤ 10⁶"],
    starterCode: {
      javascript: `function runningSum(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(runningSum([1,2,3,4]))); // Expected: [1,3,6,10]
console.log(JSON.stringify(runningSum([1,1,1,1,1]))); // Expected: [1,2,3,4,5]
console.log(JSON.stringify(runningSum([3,1,2,10,1]))); // Expected: [3,4,6,16,17]
console.log(JSON.stringify(runningSum([0]))); // Expected: [0]`,
    },
    expectedOutput: {
      javascript: "[1,3,6,10]\n[1,2,3,4,5]\n[3,4,6,16,17]\n[0]",
    },
  },
  "search-insert-position": {
    id: "search-insert-position",
    title: "Search Insert Position",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
      notes: ["You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      {
        input: "nums = [1,3,5,6], target = 5",
        output: "2",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁴ ≤ nums[i] ≤ 10⁴", "nums contains distinct values sorted in ascending order.", "-10⁴ ≤ target ≤ 10⁴"],
    starterCode: {
      javascript: `function searchInsert(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(searchInsert([1,3,5,6], 5)); // Expected: 2
console.log(searchInsert([1,3,5,6], 2)); // Expected: 1
console.log(searchInsert([1,3,5,6], 7)); // Expected: 4
console.log(searchInsert([1,3,5,6], 0)); // Expected: 0`,
    },
    expectedOutput: {
      javascript: "2\n1\n4\n0",
    },
  },

  "length-of-last-word": {
    id: "length-of-last-word",
    title: "Length of Last Word",
    difficulty: "Easy",
    category: "String • Simulation",
    description: {
      text: "Given a string s consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.",
      notes: [],
    },
    examples: [
      {
        input: 's = "Hello World"',
        output: "5",
      }
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of only English letters and spaces."],
    starterCode: {
      javascript: `function lengthOfLastWord(s) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLastWord("Hello World")); // Expected: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Expected: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Expected: 6
console.log(lengthOfLastWord("a")); // Expected: 1`,
    },
    expectedOutput: {
      javascript: "5\n4\n6\n1",
    },
  },

  "valid-perfect-square": {
    id: "valid-perfect-square",
    title: "Valid Perfect Square",
    difficulty: "Easy",
    category: "Math • Binary Search",
    description: {
      text: "Given a positive integer num, return true if num is a perfect square or false otherwise.",
      notes: ["Do not use any built-in library function such as Math.sqrt."],
    },
    examples: [
      {
        input: "num = 16",
        output: "true",
      }
    ],
    constraints: ["1 ≤ num ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isPerfectSquare(num) {
  // Write your solution here
  
}

// Test cases
console.log(isPerfectSquare(16)); // Expected: true
console.log(isPerfectSquare(14)); // Expected: false
console.log(isPerfectSquare(1)); // Expected: true
console.log(isPerfectSquare(100)); // Expected: true`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue\ntrue",
    },
  },

  "third-maximum-number": {
    id: "third-maximum-number",
    title: "Third Maximum Number",
    difficulty: "Easy",
    category: "Array • Simulation Sorting",
    description: {
      text: "Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [3,2,1]",
        output: "1",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function thirdMax(nums) {
  // Write your solution here
  
}

// Test cases
console.log(thirdMax([3,2,1])); // Expected: 1
console.log(thirdMax([1,2])); // Expected: 2
console.log(thirdMax([2,2,3,1])); // Expected: 1
console.log(thirdMax([1,2,2,5,3,5])); // Expected: 2`,
    },
    expectedOutput: {
      javascript: "1\n2\n1\n2",
    },
  },

  "find-all-numbers-disappeared-in-an-array": {
    id: "find-all-numbers-disappeared-in-an-array",
    title: "Find All Numbers Disappeared in an Array",
    difficulty: "Easy",
    category: "Array • Hash Table Cyclic Sort",
    description: {
      text: "Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.",
      notes: ["Could you do it without extra space and in O(n) runtime?"],
    },
    examples: [
      {
        input: "nums = [4,3,2,7,8,2,3,1]",
        output: "[5,6]",
      }
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 10⁵", "1 ≤ nums[i] ≤ n"],
    starterCode: {
      javascript: `function findDisappearedNumbers(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(findDisappearedNumbers([4,3,2,7,8,2,3,1]).sort())); // Expected: [5,6]
console.log(JSON.stringify(findDisappearedNumbers([1,1]))); // Expected: [2]
console.log(JSON.stringify(findDisappearedNumbers([1]))); // Expected: []
console.log(JSON.stringify(findDisappearedNumbers([2,2,2]))); // Expected: [1,3]`,
    },
    expectedOutput: {
      javascript: "[5,6]\n[2]\n[]\n[1,3]",
    },
  },

  "assign-cookies": {
    id: "assign-cookies",
    title: "Assign Cookies",
    difficulty: "Easy",
    category: "Array • Greedy Sorting Two Pointers",
    description: {
      text: "Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor g[i]. Each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i. Your goal is to maximize the number of your content children and output the maximum number.",
      notes: [],
    },
    examples: [
      {
        input: "g = [1,2,3], s = [1,1]",
        output: "1",
      }
    ],
    constraints: ["1 ≤ g.length, s.length ≤ 3 * 10⁴", "1 ≤ g[i], s[j] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function findContentChildren(g, s) {
  // Write your solution here
  
}

// Test cases
console.log(findContentChildren([1,2,3], [1,1])); // Expected: 1
console.log(findContentChildren([1,2], [1,2,3])); // Expected: 2
console.log(findContentChildren([3,4], [1,2,5])); // Expected: 1
console.log(findContentChildren([], [1,2])); // Expected: 0`,
    },
    expectedOutput: {
      javascript: "1\n2\n1\n0",
    },
  },

  "island-perimeter": {
    id: "island-perimeter",
    title: "Island Perimeter",
    difficulty: "Easy",
    category: "Array • Matrix Simulation",
    description: {
      text: "You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water. Grid cells are connected horizontally/vertically. Determine the perimeter of the island.",
      notes: [],
    },
    examples: [
      {
        input: "grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]",
        output: "16",
      }
    ],
    constraints: ["row == grid.length", "col == grid[i].length", "1 ≤ row, col ≤ 100", "grid[i][j] is 0 or 1."],
    starterCode: {
      javascript: `function islandPerimeter(grid) {
  // Write your solution here
  
}

// Test cases
console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])); // Expected: 16
console.log(islandPerimeter([[1]])); // Expected: 4
console.log(islandPerimeter([[1,0]])); // Expected: 4
console.log(islandPerimeter([[1,1],[1,1]])); // Expected: 8`,
    },
    expectedOutput: {
      javascript: "16\n4\n4\n8",
    },
  },

  "transpose-matrix": {
    id: "transpose-matrix",
    title: "Transpose Matrix",
    difficulty: "Easy",
    category: "Array • Matrix Simulation",
    description: {
      text: "Given a 2D integer array matrix, return the transpose of matrix. The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.",
      notes: [],
    },
    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[[1,4,7],[2,5,8],[3,6,9]]",
      }
    ],
    constraints: ["m == matrix.length", "n == matrix[i].length", "1 ≤ m, n ≤ 1000", "1 ≤ m * n ≤ 10⁵", "-10⁹ ≤ matrix[i][j] ≤ 10⁹"],
    starterCode: {
      javascript: `function transpose(matrix) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(transpose([[1,2,3],[4,5,6],[7,8,9]]))); // Expected: [[1,4,7],[2,5,8],[3,6,9]]
console.log(JSON.stringify(transpose([[1,2,3],[4,5,6]]))); // Expected: [[1,4],[2,5],[3,6]]
console.log(JSON.stringify(transpose([[5]]))); // Expected: [[5]]
console.log(JSON.stringify(transpose([[1,2],[3,4]]))); // Expected: [[1,3],[2,4]]`,
    },
    expectedOutput: {
      javascript: "[[1,4,7],[2,5,8],[3,6,9]]\n[[1,4],[2,5],[3,6]]\n[[5]]\n[[1,3],[2,4]]",
    },
  },

  "sort-an-array": {
    id: "sort-an-array",
    title: "Sort an Array",
    difficulty: "Medium",
    category: "Array • Sorting MergeSort/QuickSort",
    description: {
      text: "Given an array of integers nums, sort the array in ascending order and return it.",
      notes: ["You must solve the problem without using the built-in Array.prototype.sort() function and with O(n log n) time complexity."],
    },
    examples: [
      {
        input: "nums = [5,2,3,1]",
        output: "[1,2,3,5]",
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 5 * 10⁴", "-5 * 10⁴ ≤ nums[i] ≤ 5 * 10⁴"],
    starterCode: {
      javascript: `function sortArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(sortArray([5,2,3,1]))); // Expected: [1,2,3,5]
console.log(JSON.stringify(sortArray([5,1,1,2,0,0]))); // Expected: [0,0,1,1,2,5]
console.log(JSON.stringify(sortArray([1]))); // Expected: [1]
console.log(JSON.stringify(sortArray([-4,5,0,-2,1]))); // Expected: [-4,-2,0,1,5]`,
    },
    expectedOutput: {
      javascript: "[1,2,3,5]\n[0,0,1,1,2,5]\n[1]\n[-4,-2,0,1,5]",
    },
  }
};

export const LANGUAGE_CONFIG = {
    javascript: {
        name: "JavaScript",
        icon: "/javascript.png",
        monacoLang: "javascript",
    },
};