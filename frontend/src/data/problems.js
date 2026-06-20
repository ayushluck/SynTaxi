import { addProblemDataStructures } from "../lib/problemDataStructures.js";

const BASE_PROBLEMS = {
    "two-sum": {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "Easy",
        category: "Array • Hash Table • Sorting • Two Pointers",
        description: {
            text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
            notes: ["You may assume that each input would have exactly one solution, and you may not use the same element twice.", "You can return the answer in any order."],
        },
        examples: [
            { "input": "nums = [2,7,11,15], target = 9", "output": "[0,1]", "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]." },
            { "input": "nums = [3,2,4], target = 6", "output": "[1,2]" },
            { "input": "nums = [3,3], target = 6", "output": "[0,1]" },
        ],
        constraints: ["2 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹", "-10⁹ ≤ target ≤ 10⁹", "Only one valid answer exists"],
        starterCode: {
            javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
            python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
            java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
        },
        expectedOutput: {
            javascript: "[0,1]\\n[1,2]\\n[0,1]",
            python: "[0, 1]\\n[1, 2]\\n[0, 1]",
            java: "[0, 1]\\n[1, 2]\\n[0, 1]",
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
            { "input": "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]", "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]" },
            { "input": "s = [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]", "output": "[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]" },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
        starterCode: {
            javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
            python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
            java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
        },
        expectedOutput: {
            javascript: "[\"o\",\"l\",\"l\",\"e\",\"h\"]\\n[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]",
            python: "['o', 'l', 'l', 'e', 'h']\\n['h', 'a', 'n', 'n', 'a', 'H']",
            java: "[o, l, l, e, h]\\n[h, a, n, n, a, H]",
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
            { "input": "s = \"A man, a plan, a canal: Panama\"", "output": "true", "explanation": "\"amanaplanacanalpanama\" is a palindrome." },
            { "input": "s = \"race a car\"", "output": "false", "explanation": "\"raceacar\" is not a palindrome." },
            { "input": "s = \" \"", "output": "true", "explanation": "s is an empty string \"\" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome." },
        ],
        constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
        starterCode: {
            javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
            python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
            java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse\\ntrue",
            python: "True\\nFalse\\nTrue",
            java: "true\\nfalse\\ntrue",
        },
    },

    "maximum-subarray": {
        id: "maximum-subarray",
        title: "Maximum Subarray",
        difficulty: "Medium",
        category: "Array • Dynamic Programming • Divide and Conquer",
        description: {
            text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
            notes: [],
        },
        examples: [
            { "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]", "output": "6", "explanation": "The subarray [4,-1,2,1] has the largest sum 6." },
            { "input": "nums = [1]", "output": "1", "explanation": "The subarray [1] has the largest sum 1." },
            { "input": "nums = [5,4,-1,7,8]", "output": "23", "explanation": "The subarray [5,4,-1,7,8] has the largest sum 23." },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
            python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
            java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
        },
        expectedOutput: {
            javascript: "6\\n1\\n23",
            python: "6\\n1\\n23",
            java: "6\\n1\\n23",
        },
    },

    "container-with-most-water": {
        id: "container-with-most-water",
        title: "Container With Most Water",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        description: {
            text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
            notes: ["Find two lines that together with the x-axis form a container, such that the container contains the most water.", "Return the maximum amount of water a container can store.", "Notice that you may not slant the container."],
        },
        examples: [
            { "input": "height = [1,8,6,2,5,4,8,3,7]", "output": "49", "explanation": "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49." },
            { "input": "height = [1,1]", "output": "1" },
        ],
        constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
            python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
            java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
        },
        expectedOutput: {
            javascript: "49\\n1",
            python: "49\\n1",
            java: "49\\n1",
        },
    },

    "best-time-to-buy-sell-stock": {
        id: "best-time-to-buy-sell-stock",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        category: "Array • Dynamic Programming • Greedy",
        description: {
            text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
            notes: ["Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0."],
        },
        examples: [
            { "input": "prices = [7,1,5,3,6,4]", "output": "5", "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5." },
            { "input": "prices = [7,6,4,3,1]", "output": "0", "explanation": "No transactions are done and the max profit = 0." },
        ],
        constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
            python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0`,
            java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
    }
}`,
        },
        expectedOutput: {
            javascript: "5\\n0",
            python: "5\\n0",
            java: "5\\n0",
        },
    },

    "contains-duplicate": {
        id: "contains-duplicate",
        title: "Contains Duplicate",
        difficulty: "Easy",
        category: "Array • Hash Table • Sorting",
        description: {
            text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
            notes: [],
        },
        examples: [
            { "input": "nums = [1,2,3,1]", "output": "true" },
            { "input": "nums = [1,2,3,4]", "output": "false" },
            { "input": "nums = [1,1,1,3,3,4,3,2,4,2]", "output": "true" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
        starterCode: {
            javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
            python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))  # Expected: True
print(containsDuplicate([1,2,3,4]))  # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))  # Expected: True`,
            java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4})); // Expected: false
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2})); // Expected: true
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse\\ntrue",
            python: "True\\nFalse\\nTrue",
            java: "true\\nfalse\\ntrue",
        },
    },

    "product-of-array-except-self": {
        id: "product-of-array-except-self",
        title: "Product of Array Except Self",
        difficulty: "Medium",
        category: "Array • Prefix Sum",
        description: {
            text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
            notes: ["You must write an algorithm that runs in O(n) time and without using the division operation."],
        },
        examples: [
            { "input": "nums = [1,2,3,4]", "output": "[24,12,8,6]" },
            { "input": "nums = [-1,1,0,-3,3]", "output": "[0,0,9,0,0]" },
        ],
        constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30"],
        starterCode: {
            javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,
            python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24, 12, 8, 6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0, 0, 9, 0, 0]`,
            java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24, 12, 8, 6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0, 0, 9, 0, 0]
    }
}`,
        },
        expectedOutput: {
            javascript: "[24,12,8,6]\\n[0,0,9,0,0]",
            python: "[24, 12, 8, 6]\\n[0, 0, 9, 0, 0]",
            java: "[24, 12, 8, 6]\\n[0, 0, 9, 0, 0]",
        },
    },

    "maximum-product-subarray": {
        id: "maximum-product-subarray",
        title: "Maximum Product Subarray",
        difficulty: "Medium",
        category: "Array • Dynamic Programming • Prefix and Suffix",
        description: {
            text: "Given an integer array nums, find a subarray that has the largest product, and return the product.",
            notes: [],
        },
        examples: [
            { "input": "nums = [2,3,-2,4]", "output": "6", "explanation": "[2,3] has the largest product 6." },
            { "input": "nums = [-2,0,-1]", "output": "0", "explanation": "The result cannot be 2, because [-2,-1] is not a subarray." },
        ],
        constraints: ["1 ≤ nums.length ≤ 2 * 10⁴", "-10 ≤ nums[i] ≤ 10"],
        starterCode: {
            javascript: `function maxProduct(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxProduct([2,3,-2,4])); // Expected: 6
console.log(maxProduct([-2,0,-1])); // Expected: 0`,
            python: `def maxProduct(nums):
    # Write your solution here
    pass

# Test cases
print(maxProduct([2,3,-2,4]))  # Expected: 6
print(maxProduct([-2,0,-1]))  # Expected: 0`,
            java: `class Solution {
    public static int maxProduct(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProduct(new int[]{2,3,-2,4})); // Expected: 6
        System.out.println(maxProduct(new int[]{-2,0,-1})); // Expected: 0
    }
}`,
        },
        expectedOutput: {
            javascript: "6\\n0",
            python: "6\\n0",
            java: "6\\n0",
        },
    },

    "find-minimum-in-rotated-sorted-array": {
        id: "find-minimum-in-rotated-sorted-array",
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        category: "Array • Binary Search",
        description: {
            text: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
            notes: ["You must write an algorithm that runs in O(log n) time."],
        },
        examples: [
            { "input": "nums = [3,4,5,1,2]", "output": "1", "explanation": "The original array was [1,2,3,4,5] rotated 3 times." },
            { "input": "nums = [4,5,6,7,0,1,2]", "output": "0", "explanation": "The original array was [0,1,2,4,5,6,7] and it was rotated 4 times." },
            { "input": "nums = [11,13,15,17]", "output": "11", "explanation": "The original array was [11,13,15,17] and it was rotated 4 times." },
        ],
        constraints: ["n == nums.length", "1 ≤ n ≤ 5000", "-5000 ≤ nums[i] ≤ 5000", "All the integers of nums are unique", "nums is sorted and rotated between 1 and n times"],
        starterCode: {
            javascript: `function findMin(nums) {
  // Write your solution here
  
}

// Test cases
console.log(findMin([3,4,5,1,2])); // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log(findMin([11,13,15,17])); // Expected: 11`,
            python: `def findMin(nums):
    # Write your solution here
    pass

# Test cases
print(findMin([3,4,5,1,2]))  # Expected: 1
print(findMin([4,5,6,7,0,1,2]))  # Expected: 0
print(findMin([11,13,15,17]))  # Expected: 11`,
            java: `class Solution {
    public static int findMin(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(findMin(new int[]{3,4,5,1,2})); // Expected: 1
        System.out.println(findMin(new int[]{4,5,6,7,0,1,2})); // Expected: 0
        System.out.println(findMin(new int[]{11,13,15,17})); // Expected: 11
    }
}`,
        },
        expectedOutput: {
            javascript: "1\\n0\\n11",
            python: "1\\n0\\n11",
            java: "1\\n0\\n11",
        },
    },

    "three-sum": {
        id: "three-sum",
        title: "3Sum",
        difficulty: "Medium",
        category: "Array • Two Pointers • Sorting • Hash Table",
        description: {
            text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
            notes: ["Notice that the solution set must not contain duplicate triplets."],
        },
        examples: [
            { "input": "nums = [-1,0,1,2,-1,-4]", "output": "[[-1,-1,2],[-1,0,1]]", "explanation": "The distinct triplets are [-1,0,1] and [-1,-1,2]." },
            { "input": "nums = [0,1,1]", "output": "[]", "explanation": "The only possible triplet does not sum up to 0." },
            { "input": "nums = [0,0,0]", "output": "[[0,0,0]]", "explanation": "The only possible triplet sums up to 0." },
        ],
        constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
        starterCode: {
            javascript: `function threeSum(nums) {
  // Write your solution here
  
}

// Test cases
console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Expected: []
console.log(threeSum([0,0,0])); // Expected: [[0,0,0]]`,
            python: `def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1, -1, 2], [-1, 0, 1]]
print(threeSum([0,1,1]))  # Expected: []
print(threeSum([0,0,0]))  # Expected: [[0, 0, 0]]`,
            java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // Expected: [[-1, -1, 2], [-1, 0, 1]]
        System.out.println(threeSum(new int[]{0,1,1})); // Expected: []
        System.out.println(threeSum(new int[]{0,0,0})); // Expected: [[0, 0, 0]]
    }
}`,
        },
        expectedOutput: {
            javascript: "[[-1,-1,2],[-1,0,1]]\\n[]\\n[[0,0,0]]",
            python: "[[-1, -1, 2], [-1, 0, 1]]\\n[]\\n[[0, 0, 0]]",
            java: "[[-1, -1, 2], [-1, 0, 1]]\\n[]\\n[[0, 0, 0]]",
        },
    },

    "merge-intervals": {
        id: "merge-intervals",
        title: "Merge Intervals",
        difficulty: "Medium",
        category: "Array • Sorting • Greedy",
        description: {
            text: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
            notes: [],
        },
        examples: [
            { "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]", "output": "[[1,6],[8,10],[15,18]]", "explanation": "Since intervals [1,3] and [2,6] overlap, merge them into [1,6]." },
            { "input": "intervals = [[1,4],[4,5]]", "output": "[[1,5]]", "explanation": "Intervals [1,4] and [4,5] are considered overlapping." },
        ],
        constraints: ["1 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2", "0 ≤ starti ≤ endi ≤ 10⁴"],
        starterCode: {
            javascript: `function merge(intervals) {
  // Write your solution here
  
}

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // Expected: [[1,5]]`,
            python: `def merge(intervals):
    # Write your solution here
    pass

# Test cases
print(merge([[1,3],[2,6],[8,10],[15,18]]))  # Expected: [[1, 6], [8, 10], [15, 18]]
print(merge([[1,4],[4,5]]))  # Expected: [[1, 5]]`,
            java: `import java.util.*;

class Solution {
    public static int[][] merge(int[][] intervals) {
        // Write your solution here
        
        return new int[0][0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10},{15,18}}))); // Expected: [[1, 6], [8, 10], [15, 18]]
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{4,5}}))); // Expected: [[1, 5]]
    }
}`,
        },
        expectedOutput: {
            javascript: "[[1,6],[8,10],[15,18]]\\n[[1,5]]",
            python: "[[1, 6], [8, 10], [15, 18]]\\n[[1, 5]]",
            java: "[[1, 6], [8, 10], [15, 18]]\\n[[1, 5]]",
        },
    },

    "insert-interval": {
        id: "insert-interval",
        title: "Insert Interval",
        difficulty: "Medium",
        category: "Array • Sorting • Simulation",
        description: {
            text: "You are given an array of non-overlapping intervals where intervals[i] = [starti, endi] sorted in ascending order by starti, and a new interval newInterval. Insert newInterval into intervals so that intervals is still sorted and non-overlapping, merging if necessary.",
            notes: [],
        },
        examples: [
            { "input": "intervals = [[1,3],[6,9]], newInterval = [2,5]", "output": "[[1,5],[6,9]]" },
            { "input": "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]", "output": "[[1,2],[3,10],[12,16]]", "explanation": "Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10]." },
        ],
        constraints: ["0 ≤ intervals.length ≤ 10⁴", "newInterval.length == 2", "0 ≤ start ≤ end ≤ 10⁵"],
        starterCode: {
            javascript: `function insert(intervals, newInterval) {
  // Write your solution here
  
}

// Test cases
console.log(insert([[1,3],[6,9]], [2,5])); // Expected: [[1,5],[6,9]]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); // Expected: [[1,2],[3,10],[12,16]]`,
            python: `def insert(intervals, newInterval):
    # Write your solution here
    pass

# Test cases
print(insert([[1,3],[6,9]], [2,5]))  # Expected: [[1, 5], [6, 9]]
print(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))  # Expected: [[1, 2], [3, 10], [12, 16]]`,
            java: `import java.util.*;

class Solution {
    public static int[][] insert(int[][] intervals, int[] newInterval) {
        // Write your solution here
        
        return new int[0][0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(insert(new int[][]{{1,3},{6,9}}, new int[]{2,5}))); // Expected: [[1, 5], [6, 9]]
        System.out.println(Arrays.deepToString(insert(new int[][]{{1,2},{3,5},{6,7},{8,10},{12,16}}, new int[]{4,8}))); // Expected: [[1, 2], [3, 10], [12, 16]]
    }
}`,
        },
        expectedOutput: {
            javascript: "[[1,5],[6,9]]\\n[[1,2],[3,10],[12,16]]",
            python: "[[1, 5], [6, 9]]\\n[[1, 2], [3, 10], [12, 16]]",
            java: "[[1, 5], [6, 9]]\\n[[1, 2], [3, 10], [12, 16]]",
        },
    },

    "non-overlapping-intervals": {
        id: "non-overlapping-intervals",
        title: "Non-overlapping Intervals",
        difficulty: "Medium",
        category: "Array • Greedy • Sorting • Dynamic Programming",
        description: {
            text: "Given an array of intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
            notes: [],
        },
        examples: [
            { "input": "intervals = [[1,2],[2,3],[3,4],[1,3]]", "output": "1", "explanation": "[1,3] can be removed and the rest of the intervals are non-overlapping." },
            { "input": "intervals = [[1,2],[1,2],[1,2]]", "output": "2", "explanation": "You need to remove two [1,2] to make the rest of the intervals non-overlapping." },
            { "input": "intervals = [[1,2],[2,3]]", "output": "0", "explanation": "You don't need to remove any of the intervals since they're already non-overlapping." },
        ],
        constraints: ["1 ≤ intervals.length ≤ 10⁵", "intervals[i].length == 2", "-5*10⁴ ≤ starti < endi ≤ 5*10⁴"],
        starterCode: {
            javascript: `function eraseOverlapIntervals(intervals) {
  // Write your solution here
  
}

// Test cases
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // Expected: 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])); // Expected: 2
console.log(eraseOverlapIntervals([[1,2],[2,3]])); // Expected: 0`,
            python: `def eraseOverlapIntervals(intervals):
    # Write your solution here
    pass

# Test cases
print(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))  # Expected: 1
print(eraseOverlapIntervals([[1,2],[1,2],[1,2]]))  # Expected: 2
print(eraseOverlapIntervals([[1,2],[2,3]]))  # Expected: 0`,
            java: `class Solution {
    public static int eraseOverlapIntervals(int[][] intervals) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(eraseOverlapIntervals(new int[][]{{1,2},{2,3},{3,4},{1,3}})); // Expected: 1
        System.out.println(eraseOverlapIntervals(new int[][]{{1,2},{1,2},{1,2}})); // Expected: 2
        System.out.println(eraseOverlapIntervals(new int[][]{{1,2},{2,3}})); // Expected: 0
    }
}`,
        },
        expectedOutput: {
            javascript: "1\\n2\\n0",
            python: "1\\n2\\n0",
            java: "1\\n2\\n0",
        },
    },

    "valid-anagram": {
        id: "valid-anagram",
        title: "Valid Anagram",
        difficulty: "Easy",
        category: "String • Hash Table • Sorting • Counting",
        description: {
            text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
            notes: [],
        },
        examples: [
            { "input": "s = \"anagram\", t = \"nagaram\"", "output": "true" },
            { "input": "s = \"rat\", t = \"car\"", "output": "false" },
        ],
        constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴", "s and t consist of lowercase English letters"],
        starterCode: {
            javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
            python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))  # Expected: False`,
            java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car")); // Expected: false
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse",
            python: "True\\nFalse",
            java: "true\\nfalse",
        },
    },

    "group-anagrams": {
        id: "group-anagrams",
        title: "Group Anagrams",
        difficulty: "Medium",
        category: "String • Hash Table • Sorting • Counting",
        description: {
            text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
            notes: ["An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once."],
        },
        examples: [
            { "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]", "output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]" },
            { "input": "strs = [\"\"]", "output": "[[\"\"]]" },
            { "input": "strs = [\"a\"]", "output": "[[\"a\"]]" },
        ],
        constraints: ["1 ≤ strs.length ≤ 10⁴", "0 ≤ strs[i].length ≤ 100", "strs[i] consists of lowercase English letters"],
        starterCode: {
            javascript: `function groupAnagrams(strs) {
  // Write your solution here
  
}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));`,
            python: `def groupAnagrams(strs):
    # Write your solution here
    pass

# Test cases
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))`,
            java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(groupAnagrams(new String[]{""}));
        System.out.println(groupAnagrams(new String[]{"a"}));
    }
}`,
        },
        expectedOutput: {
            javascript: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]\\n[[\"\"]]\\n[[\"a\"]]",
            python: "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]\\n[['']]\\n[['a']]",
            java: "[[bat], [nat, tan], [ate, eat, tea]]\\n[[]]\\n[[a]]",
        },
    },

    "top-k-frequent-elements": {
        id: "top-k-frequent-elements",
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        category: "Array • Heap • Hash Table • Counting • Bucket Sort • Quickselect",
        description: {
            text: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
            notes: [],
        },
        examples: [
            { "input": "nums = [1,1,1,2,2,3], k = 2", "output": "[1,2]" },
            { "input": "nums = [1], k = 1", "output": "[1]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "k is in the range [1, the number of distinct elements in nums]"],
        starterCode: {
            javascript: `function topKFrequent(nums, k) {
  // Write your solution here
  
}

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2)); // Expected: [1,2]
console.log(topKFrequent([1], 1)); // Expected: [1]`,
            python: `def topKFrequent(nums, k):
    # Write your solution here
    pass

# Test cases
print(topKFrequent([1,1,1,2,2,3], 2))  # Expected: [1, 2]
print(topKFrequent([1], 1))  # Expected: [1]`,
            java: `import java.util.*;

class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(topKFrequent(new int[]{1,1,1,2,2,3}, 2))); // Expected: [1, 2]
        System.out.println(Arrays.toString(topKFrequent(new int[]{1}, 1))); // Expected: [1]
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,2]\\n[1]",
            python: "[1, 2]\\n[1]",
            java: "[1, 2]\\n[1]",
        },
    },

    "longest-substring-without-repeating-characters": {
        id: "longest-substring-without-repeating-characters",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        category: "String • Sliding Window • Hash Table • Two Pointers",
        description: {
            text: "Given a string s, find the length of the longest substring without repeating characters.",
            notes: [],
        },
        examples: [
            { "input": "s = \"abcabcbb\"", "output": "3", "explanation": "The answer is \"abc\", with the length of 3." },
            { "input": "s = \"bbbbb\"", "output": "1", "explanation": "The answer is \"b\", with the length of 1." },
            { "input": "s = \"pwwkew\"", "output": "3", "explanation": "The answer is \"wke\", with the length of 3." },
        ],
        constraints: ["0 ≤ s.length ≤ 5 * 10⁴", "s consists of English letters, digits, symbols and spaces"],
        starterCode: {
            javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
            python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))  # Expected: 3`,
            java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,
        },
        expectedOutput: {
            javascript: "3\\n1\\n3",
            python: "3\\n1\\n3",
            java: "3\\n1\\n3",
        },
    },

    "longest-repeating-character-replacement": {
        id: "longest-repeating-character-replacement",
        title: "Longest Repeating Character Replacement",
        difficulty: "Medium",
        category: "String • Sliding Window • Hash Table",
        description: {
            text: "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character, at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations.",
            notes: [],
        },
        examples: [
            { "input": "s = \"ABAB\", k = 2", "output": "4", "explanation": "Replace the two 'A's with two 'B's or vice versa." },
            { "input": "s = \"AABABBA\", k = 1", "output": "4", "explanation": "Replace the one 'A' in the middle with 'B' and form 'AABBBBA'. The substring 'BBBB' has the longest repeating letters, which is 4." },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁵", "s consists of only uppercase English letters", "0 ≤ k ≤ s.length"],
        starterCode: {
            javascript: `function characterReplacement(s, k) {
  // Write your solution here
  
}

// Test cases
console.log(characterReplacement("ABAB", 2)); // Expected: 4
console.log(characterReplacement("AABABBA", 1)); // Expected: 4`,
            python: `def characterReplacement(s, k):
    # Write your solution here
    pass

# Test cases
print(characterReplacement("ABAB", 2))  # Expected: 4
print(characterReplacement("AABABBA", 1))  # Expected: 4`,
            java: `class Solution {
    public static int characterReplacement(String s, int k) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(characterReplacement("ABAB", 2)); // Expected: 4
        System.out.println(characterReplacement("AABABBA", 1)); // Expected: 4
    }
}`,
        },
        expectedOutput: {
            javascript: "4\\n4",
            python: "4\\n4",
            java: "4\\n4",
        },
    },

    "minimum-window-substring": {
        id: "minimum-window-substring",
        title: "Minimum Window Substring",
        difficulty: "Hard",
        category: "String • Sliding Window • Hash Table",
        description: {
            text: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string.",
            notes: [],
        },
        examples: [
            { "input": "s = \"ADOBECODEBANC\", t = \"ABC\"", "output": "\"BANC\"", "explanation": "The minimum window substring \"BANC\" includes A, B and C from string t." },
            { "input": "s = \"a\", t = \"a\"", "output": "\"a\"", "explanation": "The entire string s is the minimum window." },
            { "input": "s = \"a\", t = \"aa\"", "output": "\"\"", "explanation": "Both 'a's from t have to be included in the window. Since the largest window of s only has one 'a', return empty string." },
        ],
        constraints: ["m == s.length", "n == t.length", "1 ≤ m, n ≤ 10⁵", "s and t consist of uppercase and lowercase English letters"],
        starterCode: {
            javascript: `function minWindow(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
console.log(minWindow("a", "a")); // Expected: "a"
console.log(minWindow("a", "aa")); // Expected: ""`,
            python: `def minWindow(s, t):
    # Write your solution here
    pass

# Test cases
print(minWindow("ADOBECODEBANC", "ABC"))  # Expected: BANC
print(minWindow("a", "a"))  # Expected: a
print(minWindow("a", "aa"))  # Expected: (empty string)`,
            java: `class Solution {
    public static String minWindow(String s, String t) {
        // Write your solution here
        
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(minWindow("ADOBECODEBANC", "ABC")); // Expected: BANC
        System.out.println(minWindow("a", "a")); // Expected: a
        System.out.println(minWindow("a", "aa")); // Expected: (empty string)
    }
}`,
        },
        expectedOutput: {
            javascript: "BANC\\na\\n",
            python: "BANC\\na\\n",
            java: "BANC\\na\\n",
        },
    },

    "valid-parentheses": {
        id: "valid-parentheses",
        title: "Valid Parentheses",
        difficulty: "Easy",
        category: "String • Stack",
        description: {
            text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
            notes: ["An input string is valid if open brackets are closed by the same type of brackets and in the correct order."],
        },
        examples: [
            { "input": "s = \"()\"", "output": "true" },
            { "input": "s = \"()[]{}\"", "output": "true" },
            { "input": "s = \"(]\"", "output": "false" },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'"],
        starterCode: {
            javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,
            python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False`,
            java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\ntrue\\nfalse",
            python: "True\\nTrue\\nFalse",
            java: "true\\ntrue\\nfalse",
        },
    },

    "min-stack": {
        id: "min-stack",
        title: "Min Stack",
        difficulty: "Medium",
        category: "Stack • Design",
        description: {
            text: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
            notes: ["Implement the MinStack class with push(val), pop(), top(), and getMin() methods, each running in O(1) time."],
        },
        examples: [
            { "input": "push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()", "output": "-3,0,-2", "explanation": "getMin returns -3 after pushes; after pop, top is 0 and getMin is -2." },
        ],
        constraints: ["-2⁹ ≤ val ≤ 2⁹", "Methods pop, top and getMin will always be called on non-empty stacks", "At most 3*10⁴ calls will be made"],
        starterCode: {
            javascript: `class MinStack {
  constructor() {
    // Write your solution here
  }
  push(val) {}
  pop() {}
  top() {}
  getMin() {}
}

// Test cases
const ms = new MinStack();
ms.push(-2); ms.push(0); ms.push(-3);
console.log(ms.getMin()); // Expected: -3
ms.pop();
console.log(ms.top()); // Expected: 0
console.log(ms.getMin()); // Expected: -2`,
            python: `class MinStack:
    def __init__(self):
        # Write your solution here
        pass
    def push(self, val):
        pass
    def pop(self):
        pass
    def top(self):
        pass
    def getMin(self):
        pass

# Test cases
ms = MinStack()
ms.push(-2); ms.push(0); ms.push(-3)
print(ms.getMin())  # Expected: -3
ms.pop()
print(ms.top())  # Expected: 0
print(ms.getMin())  # Expected: -2`,
            java: `import java.util.*;

class MinStack {
    public MinStack() {
        // Write your solution here
    }
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
    
    public static void main(String[] args) {
        MinStack ms = new MinStack();
        ms.push(-2); ms.push(0); ms.push(-3);
        System.out.println(ms.getMin()); // Expected: -3
        ms.pop();
        System.out.println(ms.top()); // Expected: 0
        System.out.println(ms.getMin()); // Expected: -2
    }
}`,
        },
        expectedOutput: {
            javascript: "-3\\n0\\n-2",
            python: "-3\\n0\\n-2",
            java: "-3\\n0\\n-2",
        },
    },

    "evaluate-reverse-polish-notation": {
        id: "evaluate-reverse-polish-notation",
        title: "Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        category: "Stack • Math • Array",
        description: {
            text: "You are given an array of strings tokens that represents an arithmetic expression in Reverse Polish Notation. Evaluate the expression and return an integer that represents the value.",
            notes: ["Division between two integers should truncate toward zero."],
        },
        examples: [
            { "input": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]", "output": "9", "explanation": "(2 + 1) * 3 = 9" },
            { "input": "tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]", "output": "6", "explanation": "4 + (13 / 5) = 6" },
        ],
        constraints: ["1 ≤ tokens.length ≤ 10⁴", "tokens[i] is either an operator or an integer"],
        starterCode: {
            javascript: `function evalRPN(tokens) {
  // Write your solution here
  
}

// Test cases
console.log(evalRPN(["2","1","+","3","*"])); // Expected: 9
console.log(evalRPN(["4","13","5","/","+"])); // Expected: 6`,
            python: `def evalRPN(tokens):
    # Write your solution here
    pass

# Test cases
print(evalRPN(["2","1","+","3","*"]))  # Expected: 9
print(evalRPN(["4","13","5","/","+"]))  # Expected: 6`,
            java: `class Solution {
    public static int evalRPN(String[] tokens) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(evalRPN(new String[]{"2","1","+","3","*"})); // Expected: 9
        System.out.println(evalRPN(new String[]{"4","13","5","/","+"})); // Expected: 6
    }
}`,
        },
        expectedOutput: {
            javascript: "9\\n6",
            python: "9\\n6",
            java: "9\\n6",
        },
    },

    "generate-parentheses": {
        id: "generate-parentheses",
        title: "Generate Parentheses",
        difficulty: "Medium",
        category: "Backtracking • String • Dynamic Programming",
        description: {
            text: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
            notes: [],
        },
        examples: [
            { "input": "n = 3", "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]" },
            { "input": "n = 1", "output": "[\"()\"]" },
        ],
        constraints: ["1 ≤ n ≤ 8"],
        starterCode: {
            javascript: `function generateParenthesis(n) {
  // Write your solution here
  
}

// Test cases
console.log(generateParenthesis(3));
console.log(generateParenthesis(1));`,
            python: `def generateParenthesis(n):
    # Write your solution here
    pass

# Test cases
print(generateParenthesis(3))
print(generateParenthesis(1))`,
            java: `import java.util.*;

class Solution {
    public static List<String> generateParenthesis(int n) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(generateParenthesis(3));
        System.out.println(generateParenthesis(1));
    }
}`,
        },
        expectedOutput: {
            javascript: "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]\\n[\"()\"]",
            python: "['((()))', '(()())', '(())()', '()(())', '()()()']\\n['()']",
            java: "[((())), (()()), (())(), ()(()), ()()()]\\n[()]",
        },
    },

    "daily-temperatures": {
        id: "daily-temperatures",
        title: "Daily Temperatures",
        difficulty: "Medium",
        category: "Stack • Array • Monotonic Stack",
        description: {
            text: "Given an array of integers temperatures representing daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0.",
            notes: [],
        },
        examples: [
            { "input": "temperatures = [73,74,75,71,69,72,76,73]", "output": "[1,1,4,2,1,1,0,0]" },
            { "input": "temperatures = [30,40,50,60]", "output": "[1,1,1,0]" },
            { "input": "temperatures = [30,60,90]", "output": "[1,1,0]" },
        ],
        constraints: ["1 ≤ temperatures.length ≤ 10⁵", "30 ≤ temperatures[i] ≤ 100"],
        starterCode: {
            javascript: `function dailyTemperatures(temperatures) {
  // Write your solution here
  
}

// Test cases
console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // Expected: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // Expected: [1,1,1,0]
console.log(dailyTemperatures([30,60,90])); // Expected: [1,1,0]`,
            python: `def dailyTemperatures(temperatures):
    # Write your solution here
    pass

# Test cases
print(dailyTemperatures([73,74,75,71,69,72,76,73]))  # Expected: [1, 1, 4, 2, 1, 1, 0, 0]
print(dailyTemperatures([30,40,50,60]))  # Expected: [1, 1, 1, 0]
print(dailyTemperatures([30,60,90]))  # Expected: [1, 1, 0]`,
            java: `import java.util.*;

class Solution {
    public static int[] dailyTemperatures(int[] temperatures) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{73,74,75,71,69,72,76,73}))); // Expected: [1, 1, 4, 2, 1, 1, 0, 0]
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{30,40,50,60}))); // Expected: [1, 1, 1, 0]
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{30,60,90}))); // Expected: [1, 1, 0]
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,1,4,2,1,1,0,0]\\n[1,1,1,0]\\n[1,1,0]",
            python: "[1, 1, 4, 2, 1, 1, 0, 0]\\n[1, 1, 1, 0]\\n[1, 1, 0]",
            java: "[1, 1, 4, 2, 1, 1, 0, 0]\\n[1, 1, 1, 0]\\n[1, 1, 0]",
        },
    },

    "binary-search": {
        id: "binary-search",
        title: "Binary Search",
        difficulty: "Easy",
        category: "Array • Binary Search",
        description: {
            text: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
            notes: ["You must write an algorithm with O(log n) runtime complexity."],
        },
        examples: [
            { "input": "nums = [-1,0,3,5,9,12], target = 9", "output": "4", "explanation": "9 exists in nums and its index is 4" },
            { "input": "nums = [-1,0,3,5,9,12], target = 2", "output": "-1", "explanation": "2 does not exist in nums so return -1" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁴ < nums[i], target < 10⁴", "All the integers in nums are unique", "nums is sorted in ascending order"],
        starterCode: {
            javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1`,
            python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([-1,0,3,5,9,12], 9))  # Expected: 4
print(search([-1,0,3,5,9,12], 2))  # Expected: -1`,
            java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2)); // Expected: -1
    }
}`,
        },
        expectedOutput: {
            javascript: "4\\n-1",
            python: "4\\n-1",
            java: "4\\n-1",
        },
    },

    "linked-list-cycle": {
        id: "linked-list-cycle",
        title: "Linked List Cycle",
        difficulty: "Easy",
        category: "Linked List • Two Pointers • Hash Table",
        description: {
            text: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
            notes: ["There is a cycle in a linked list if some node can be reached again by continuously following the next pointer. Return true if there is a cycle, otherwise return false."],
        },
        examples: [
            { "input": "head = [3,2,0,-4], pos = 1", "output": "true", "explanation": "There is a cycle, where the tail connects to the 1st node (0-indexed)." },
            { "input": "head = [1,2], pos = 0", "output": "true", "explanation": "There is a cycle, where the tail connects to the 0th node." },
            { "input": "head = [1], pos = -1", "output": "false", "explanation": "There is no cycle in the linked list." },
        ],
        constraints: ["The number of nodes in the list is in the range [0, 10⁴]", "-10⁵ ≤ Node.val ≤ 10⁵"],
        starterCode: {
            javascript: `function hasCycle(head) {
  // Write your solution here
  
}

// Test cases use a ListNode helper; build lists with cycles before calling hasCycle.
// Example: hasCycle(list1) // Expected: true
// Example: hasCycle(list3) // Expected: false`,
            python: `def hasCycle(head):
    # Write your solution here
    pass

# Test cases use a ListNode helper; build lists with cycles before calling hasCycle.
# Example: hasCycle(list1)  # Expected: True
# Example: hasCycle(list3)  # Expected: False`,
            java: `class Solution {
    public static boolean hasCycle(ListNode head) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        // Build linked lists with cycles before calling hasCycle
        // System.out.println(hasCycle(list1)); // Expected: true
        // System.out.println(hasCycle(list3)); // Expected: false
    }
}

class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; next = null; }
}`,
        },
        expectedOutput: {
            javascript: "true\\ntrue\\nfalse",
            python: "True\\nTrue\\nFalse",
            java: "true\\ntrue\\nfalse",
        },
    },

    "reverse-linked-list": {
        id: "reverse-linked-list",
        title: "Reverse Linked List",
        difficulty: "Easy",
        category: "Linked List • Recursion",
        description: {
            text: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
            notes: [],
        },
        examples: [
            { "input": "head = [1,2,3,4,5]", "output": "[5,4,3,2,1]" },
            { "input": "head = [1,2]", "output": "[2,1]" },
            { "input": "head = []", "output": "[]" },
        ],
        constraints: ["The number of nodes in the list is the range [0, 5000]", "-5000 ≤ Node.val ≤ 5000"],
        starterCode: {
            javascript: `function reverseList(head) {
  // Write your solution here
  
}

// Test cases - build a linked list from an array, then call reverseList
// Example: reverseList(buildList([1,2,3,4,5])) // Expected: [5,4,3,2,1]`,
            python: `def reverseList(head):
    # Write your solution here
    pass

# Test cases - build a linked list from an array, then call reverseList
# Example: reverseList(build_list([1,2,3,4,5]))  # Expected: [5,4,3,2,1]`,
            java: `class Solution {
    public static ListNode reverseList(ListNode head) {
        // Write your solution here
        
        return null;
    }
}

class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; next = null; }
}`,
        },
        expectedOutput: {
            javascript: "[5,4,3,2,1]\\n[2,1]\\n[]",
            python: "[5, 4, 3, 2, 1]\\n[2, 1]\\n[]",
            java: "[5, 4, 3, 2, 1]\\n[2, 1]\\n[]",
        },
    },

    "merge-two-sorted-lists": {
        id: "merge-two-sorted-lists",
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        category: "Linked List • Recursion",
        description: {
            text: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
            notes: [],
        },
        examples: [
            { "input": "list1 = [1,2,4], list2 = [1,3,4]", "output": "[1,1,2,3,4,4]" },
            { "input": "list1 = [], list2 = []", "output": "[]" },
            { "input": "list1 = [], list2 = [0]", "output": "[0]" },
        ],
        constraints: ["The number of nodes in both lists is in the range [0, 50]", "-100 ≤ Node.val ≤ 100", "Both list1 and list2 are sorted in non-decreasing order"],
        starterCode: {
            javascript: `function mergeTwoLists(list1, list2) {
  // Write your solution here
  
}

// Test cases - build linked lists from arrays, then call mergeTwoLists
// Example: mergeTwoLists(buildList([1,2,4]), buildList([1,3,4])) // Expected: [1,1,2,3,4,4]`,
            python: `def mergeTwoLists(list1, list2):
    # Write your solution here
    pass

# Test cases - build linked lists from arrays, then call mergeTwoLists
# Example: mergeTwoLists(build_list([1,2,4]), build_list([1,3,4]))  # Expected: [1,1,2,3,4,4]`,
            java: `class Solution {
    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your solution here
        
        return null;
    }
}

class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; next = null; }
}`,
        },
        expectedOutput: {
            javascript: "[1,1,2,3,4,4]\\n[]\\n[0]",
            python: "[1, 1, 2, 3, 4, 4]\\n[]\\n[0]",
            java: "[1, 1, 2, 3, 4, 4]\\n[]\\n[0]",
        },
    },

    "remove-nth-node-from-end-of-list": {
        id: "remove-nth-node-from-end-of-list",
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        category: "Linked List • Two Pointers • Stack",
        description: {
            text: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
            notes: [],
        },
        examples: [
            { "input": "head = [1,2,3,4,5], n = 2", "output": "[1,2,3,5]" },
            { "input": "head = [1], n = 1", "output": "[]" },
            { "input": "head = [1,2], n = 1", "output": "[1]" },
        ],
        constraints: ["The number of nodes in the list is sz", "1 ≤ sz ≤ 30", "0 ≤ Node.val ≤ 100", "1 ≤ n ≤ sz"],
        starterCode: {
            javascript: `function removeNthFromEnd(head, n) {
  // Write your solution here
  
}

// Test cases - build linked lists from arrays, then call removeNthFromEnd
// Example: removeNthFromEnd(buildList([1,2,3,4,5]), 2) // Expected: [1,2,3,5]`,
            python: `def removeNthFromEnd(head, n):
    # Write your solution here
    pass

# Test cases - build linked lists from arrays, then call removeNthFromEnd
# Example: removeNthFromEnd(build_list([1,2,3,4,5]), 2)  # Expected: [1,2,3,5]`,
            java: `class Solution {
    public static ListNode removeNthFromEnd(ListNode head, int n) {
        // Write your solution here
        
        return null;
    }
}

class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; next = null; }
}`,
        },
        expectedOutput: {
            javascript: "[1,2,3,5]\\n[]\\n[1]",
            python: "[1, 2, 3, 5]\\n[]\\n[1]",
            java: "[1, 2, 3, 5]\\n[]\\n[1]",
        },
    },

    "climbing-stairs": {
        id: "climbing-stairs",
        title: "Climbing Stairs",
        difficulty: "Easy",
        category: "Dynamic Programming • Math • Memoization",
        description: {
            text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
            notes: [],
        },
        examples: [
            { "input": "n = 2", "output": "2", "explanation": "There are two ways to climb to the top: 1+1 step, 2 steps." },
            { "input": "n = 3", "output": "3", "explanation": "There are three ways: 1+1+1, 1+2, 2+1." },
        ],
        constraints: ["1 ≤ n ≤ 45"],
        starterCode: {
            javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3`,
            python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3`,
            java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
    }
}`,
        },
        expectedOutput: {
            javascript: "2\\n3",
            python: "2\\n3",
            java: "2\\n3",
        },
    },

    "house-robber": {
        id: "house-robber",
        title: "House Robber",
        difficulty: "Medium",
        category: "Dynamic Programming • Array • Memoization",
        description: {
            text: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have connected security systems, so you cannot rob two adjacent houses. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
            notes: [],
        },
        examples: [
            { "input": "nums = [1,2,3,1]", "output": "4", "explanation": "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 1 + 3 = 4." },
            { "input": "nums = [2,7,9,3,1]", "output": "12", "explanation": "Rob house 1, 3 and 5. Total = 2 + 9 + 1 = 12." },
        ],
        constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 400"],
        starterCode: {
            javascript: `function rob(nums) {
  // Write your solution here
  
}

// Test cases
console.log(rob([1,2,3,1])); // Expected: 4
console.log(rob([2,7,9,3,1])); // Expected: 12`,
            python: `def rob(nums):
    # Write your solution here
    pass

# Test cases
print(rob([1,2,3,1]))  # Expected: 4
print(rob([2,7,9,3,1]))  # Expected: 12`,
            java: `class Solution {
    public static int rob(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(rob(new int[]{1,2,3,1})); // Expected: 4
        System.out.println(rob(new int[]{2,7,9,3,1})); // Expected: 12
    }
}`,
        },
        expectedOutput: {
            javascript: "4\\n12",
            python: "4\\n12",
            java: "4\\n12",
        },
    },

    "coin-change": {
        id: "coin-change",
        title: "Coin Change",
        difficulty: "Medium",
        category: "Dynamic Programming • Array • Breadth-First Search",
        description: {
            text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
            notes: [],
        },
        examples: [
            { "input": "coins = [1,2,5], amount = 11", "output": "3", "explanation": "11 = 5 + 5 + 1" },
            { "input": "coins = [2], amount = 3", "output": "-1" },
            { "input": "coins = [1], amount = 0", "output": "0" },
        ],
        constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹ - 1", "0 ≤ amount ≤ 10⁴"],
        starterCode: {
            javascript: `function coinChange(coins, amount) {
  // Write your solution here
  
}

// Test cases
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1
console.log(coinChange([1], 0)); // Expected: 0`,
            python: `def coinChange(coins, amount):
    # Write your solution here
    pass

# Test cases
print(coinChange([1,2,5], 11))  # Expected: 3
print(coinChange([2], 3))  # Expected: -1
print(coinChange([1], 0))  # Expected: 0`,
            java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,2,5}, 11)); // Expected: 3
        System.out.println(coinChange(new int[]{2}, 3)); // Expected: -1
        System.out.println(coinChange(new int[]{1}, 0)); // Expected: 0
    }
}`,
        },
        expectedOutput: {
            javascript: "3\\n-1\\n0",
            python: "3\\n-1\\n0",
            java: "3\\n-1\\n0",
        },
    },

    "longest-increasing-subsequence": {
        id: "longest-increasing-subsequence",
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        category: "Dynamic Programming • Array • Binary Search",
        description: {
            text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
            notes: [],
        },
        examples: [
            { "input": "nums = [10,9,2,5,3,7,101,18]", "output": "4", "explanation": "The longest increasing subsequence is [2,3,7,101], therefore the length is 4." },
            { "input": "nums = [0,1,0,3,2,3]", "output": "4" },
            { "input": "nums = [7,7,7,7,7,7,7]", "output": "1" },
        ],
        constraints: ["1 ≤ nums.length ≤ 2500", "-10⁴ ≤ nums[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function lengthOfLIS(nums) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Expected: 4
console.log(lengthOfLIS([0,1,0,3,2,3])); // Expected: 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // Expected: 1`,
            python: `def lengthOfLIS(nums):
    # Write your solution here
    pass

# Test cases
print(lengthOfLIS([10,9,2,5,3,7,101,18]))  # Expected: 4
print(lengthOfLIS([0,1,0,3,2,3]))  # Expected: 4
print(lengthOfLIS([7,7,7,7,7,7,7]))  # Expected: 1`,
            java: `class Solution {
    public static int lengthOfLIS(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(lengthOfLIS(new int[]{10,9,2,5,3,7,101,18})); // Expected: 4
        System.out.println(lengthOfLIS(new int[]{0,1,0,3,2,3})); // Expected: 4
        System.out.println(lengthOfLIS(new int[]{7,7,7,7,7,7,7})); // Expected: 1
    }
}`,
        },
        expectedOutput: {
            javascript: "4\\n4\\n1",
            python: "4\\n4\\n1",
            java: "4\\n4\\n1",
        },
    },

    "word-break": {
        id: "word-break",
        title: "Word Break",
        difficulty: "Medium",
        category: "Dynamic Programming • String • Array • Hash Table • Memoization • Trie",
        description: {
            text: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
            notes: ["The same word in the dictionary may be reused multiple times in the segmentation."],
        },
        examples: [
            { "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]", "output": "true", "explanation": "Return true because \"leetcode\" can be segmented as \"leet code\"." },
            { "input": "s = \"applepenapple\", wordDict = [\"apple\",\"pen\"]", "output": "true", "explanation": "Return true because \"applepenapple\" can be segmented as \"apple pen apple\"." },
            { "input": "s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]", "output": "false" },
        ],
        constraints: ["1 ≤ s.length ≤ 300", "1 ≤ wordDict.length ≤ 1000", "1 ≤ wordDict[i].length ≤ 20"],
        starterCode: {
            javascript: `function wordBreak(s, wordDict) {
  // Write your solution here
  
}

// Test cases
console.log(wordBreak("leetcode", ["leet","code"])); // Expected: true
console.log(wordBreak("applepenapple", ["apple","pen"])); // Expected: true
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // Expected: false`,
            python: `def wordBreak(s, wordDict):
    # Write your solution here
    pass

# Test cases
print(wordBreak("leetcode", ["leet","code"]))  # Expected: True
print(wordBreak("applepenapple", ["apple","pen"]))  # Expected: True
print(wordBreak("catsandog", ["cats","dog","sand","and","cat"]))  # Expected: False`,
            java: `import java.util.*;

class Solution {
    public static boolean wordBreak(String s, List<String> wordDict) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(wordBreak("leetcode", Arrays.asList("leet","code"))); // Expected: true
        System.out.println(wordBreak("applepenapple", Arrays.asList("apple","pen"))); // Expected: true
        System.out.println(wordBreak("catsandog", Arrays.asList("cats","dog","sand","and","cat"))); // Expected: false
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\ntrue\\nfalse",
            python: "True\\nTrue\\nFalse",
            java: "true\\ntrue\\nfalse",
        },
    },

    "combination-sum": {
        id: "combination-sum",
        title: "Combination Sum",
        difficulty: "Medium",
        category: "Backtracking • Array",
        description: {
            text: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. The same number may be chosen from candidates an unlimited number of times.",
            notes: [],
        },
        examples: [
            { "input": "candidates = [2,3,6,7], target = 7", "output": "[[2,2,3],[7]]" },
            { "input": "candidates = [2,3,5], target = 8", "output": "[[2,2,2,2],[2,3,3],[3,5]]" },
        ],
        constraints: ["1 ≤ candidates.length ≤ 30", "2 ≤ candidates[i] ≤ 40", "All elements of candidates are distinct", "1 ≤ target ≤ 40"],
        starterCode: {
            javascript: `function combinationSum(candidates, target) {
  // Write your solution here
  
}

// Test cases
console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([2,3,5], 8));`,
            python: `def combinationSum(candidates, target):
    # Write your solution here
    pass

# Test cases
print(combinationSum([2,3,6,7], 7))
print(combinationSum([2,3,5], 8))`,
            java: `import java.util.*;

class Solution {
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(combinationSum(new int[]{2,3,6,7}, 7));
        System.out.println(combinationSum(new int[]{2,3,5}, 8));
    }
}`,
        },
        expectedOutput: {
            javascript: "[[2,2,3],[7]]\\n[[2,2,2,2],[2,3,3],[3,5]]",
            python: "[[2, 2, 3], [7]]\\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]",
            java: "[[2, 2, 3], [7]]\\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]",
        },
    },

    "number-of-islands": {
        id: "number-of-islands",
        title: "Number of Islands",
        difficulty: "Medium",
        category: "Graph • Depth-First Search • Breadth-First Search • Matrix • Union Find",
        description: {
            text: "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
            notes: ["You may assume all four edges of the grid are all surrounded by water."],
        },
        examples: [
            { "input": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]", "output": "1" },
            { "input": "grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]", "output": "3" },
        ],
        constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 300", "grid[i][j] is '0' or '1'"],
        starterCode: {
            javascript: `function numIslands(grid) {
  // Write your solution here
  
}

// Test cases
console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])); // Expected: 1
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]])); // Expected: 3`,
            python: `def numIslands(grid):
    # Write your solution here
    pass

# Test cases
print(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))  # Expected: 1
print(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))  # Expected: 3`,
            java: `class Solution {
    public static int numIslands(char[][] grid) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(numIslands(new char[][]{{'1','1','1','1','0'},{'1','1','0','1','0'},{'1','1','0','0','0'},{'0','0','0','0','0'}})); // Expected: 1
        System.out.println(numIslands(new char[][]{{'1','1','0','0','0'},{'1','1','0','0','0'},{'0','0','1','0','0'},{'0','0','0','1','1'}})); // Expected: 3
    }
}`,
        },
        expectedOutput: {
            javascript: "1\\n3",
            python: "1\\n3",
            java: "1\\n3",
        },
    },

    "clone-graph": {
        id: "clone-graph",
        title: "Clone Graph",
        difficulty: "Medium",
        category: "Graph • Depth-First Search • Breadth-First Search • Hash Table",
        description: {
            text: "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node contains a value and a list of its neighbors.",
            notes: [],
        },
        examples: [
            { "input": "adjList = [[2,4],[1,3],[2,4],[1,3]]", "output": "[[2,4],[1,3],[2,4],[1,3]]", "explanation": "Node 1's neighbors are 2 and 4." },
            { "input": "adjList = [[]]", "output": "[[]]", "explanation": "The graph has one node with no neighbors." },
        ],
        constraints: ["The number of nodes in the graph is in the range [0, 100]", "1 ≤ Node.val ≤ 100", "Node.val is unique for each node", "There are no repeated edges and no self-loops", "The Graph is connected"],
        starterCode: {
            javascript: `function cloneGraph(node) {
  // Write your solution here
  
}

// Test cases - build a graph from adjacency list, then call cloneGraph
// Example: cloneGraph(buildGraph([[2,4],[1,3],[2,4],[1,3]]))`,
            python: `def cloneGraph(node):
    # Write your solution here
    pass

# Test cases - build a graph from adjacency list, then call cloneGraph
# Example: cloneGraph(build_graph([[2,4],[1,3],[2,4],[1,3]]))`,
            java: `import java.util.*;

class Solution {
    public static Node cloneGraph(Node node) {
        // Write your solution here
        
        return null;
    }
}

class Node {
    public int val;
    public List<Node> neighbors;
    public Node(int val) { this.val = val; neighbors = new ArrayList<>(); }
}`,
        },
        expectedOutput: {
            javascript: "[[2,4],[1,3],[2,4],[1,3]]\\n[[]]",
            python: "[[2, 4], [1, 3], [2, 4], [1, 3]]\\n[[]]",
            java: "[[2, 4], [1, 3], [2, 4], [1, 3]]\\n[[]]",
        },
    },

    "course-schedule": {
        id: "course-schedule",
        title: "Course Schedule",
        difficulty: "Medium",
        category: "Graph • Topological Sort • Depth-First Search • Breadth-First Search",
        description: {
            text: "There are numCourses courses labeled 0 to numCourses-1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates you must take course bi first if you want to take course ai. Return true if you can finish all courses.",
            notes: [],
        },
        examples: [
            { "input": "numCourses = 2, prerequisites = [[1,0]]", "output": "true", "explanation": "To take course 1 you should have finished course 0. So it is possible." },
            { "input": "numCourses = 2, prerequisites = [[1,0],[0,1]]", "output": "false", "explanation": "There is a cycle, so it is impossible." },
        ],
        constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ 5000", "prerequisites[i].length == 2", "All the pairs prerequisites[i] are unique"],
        starterCode: {
            javascript: `function canFinish(numCourses, prerequisites) {
  // Write your solution here
  
}

// Test cases
console.log(canFinish(2, [[1,0]])); // Expected: true
console.log(canFinish(2, [[1,0],[0,1]])); // Expected: false`,
            python: `def canFinish(numCourses, prerequisites):
    # Write your solution here
    pass

# Test cases
print(canFinish(2, [[1,0]]))  # Expected: True
print(canFinish(2, [[1,0],[0,1]]))  # Expected: False`,
            java: `class Solution {
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(canFinish(2, new int[][]{{1,0}})); // Expected: true
        System.out.println(canFinish(2, new int[][]{{1,0},{0,1}})); // Expected: false
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse",
            python: "True\\nFalse",
            java: "true\\nfalse",
        },
    },

    "valid-sudoku": {
        id: "valid-sudoku",
        title: "Valid Sudoku",
        difficulty: "Medium",
        category: "Array • Matrix • Hash Table",
        description: {
            text: "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the rules: each row, column, and 3x3 sub-box must contain the digits 1-9 without repetition.",
            notes: ["A Sudoku board (partially filled) could be valid but is not necessarily solvable.", "Only the filled cells need to be validated according to the mentioned rules."],
        },
        examples: [
            { "input": "board with valid configuration", "output": "true" },
            { "input": "board with duplicate '8' in column", "output": "false" },
        ],
        constraints: ["board.length == 9", "board[i].length == 9", "board[i][j] is a digit 1-9 or '.'"],
        starterCode: {
            javascript: `function isValidSudoku(board) {
  // Write your solution here
  
}

// Test cases - pass a 9x9 board array of characters
// console.log(isValidSudoku(board1)); // Expected: true
// console.log(isValidSudoku(board2)); // Expected: false`,
            python: `def isValidSudoku(board):
    # Write your solution here
    pass

# Test cases - pass a 9x9 board array of characters
# print(isValidSudoku(board1))  # Expected: True
# print(isValidSudoku(board2))  # Expected: False`,
            java: `class Solution {
    public static boolean isValidSudoku(char[][] board) {
        // Write your solution here
        
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse",
            python: "True\\nFalse",
            java: "true\\nfalse",
        },
    },

    "rotate-image": {
        id: "rotate-image",
        title: "Rotate Image",
        difficulty: "Medium",
        category: "Array • Matrix • Math",
        description: {
            text: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise) in-place.",
            notes: ["You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation."],
        },
        examples: [
            { "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]", "output": "[[7,4,1],[8,5,2],[9,6,3]]" },
            { "input": "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", "output": "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]" },
        ],
        constraints: ["n == matrix.length == matrix[i].length", "1 ≤ n ≤ 20", "-1000 ≤ matrix[i][j] ≤ 1000"],
        starterCode: {
            javascript: `function rotate(matrix) {
  // Write your solution here
  
}

// Test cases
let m1 = [[1,2,3],[4,5,6],[7,8,9]];
rotate(m1);
console.log(m1); // Expected: [[7,4,1],[8,5,2],[9,6,3]]`,
            python: `def rotate(matrix):
    # Write your solution here
    pass

# Test cases
m1 = [[1,2,3],[4,5,6],[7,8,9]]
rotate(m1)
print(m1)  # Expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]`,
            java: `import java.util.*;

class Solution {
    public static void rotate(int[][] matrix) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        int[][] m1 = {{1,2,3},{4,5,6},{7,8,9}};
        rotate(m1);
        System.out.println(Arrays.deepToString(m1)); // Expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
    }
}`,
        },
        expectedOutput: {
            javascript: "[[7,4,1],[8,5,2],[9,6,3]]",
            python: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]",
            java: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]",
        },
    },

    "set-matrix-zeroes": {
        id: "set-matrix-zeroes",
        title: "Set Matrix Zeroes",
        difficulty: "Medium",
        category: "Array • Matrix • Hash Table",
        description: {
            text: "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.",
            notes: [],
        },
        examples: [
            { "input": "matrix = [[1,1,1],[1,0,1],[1,1,1]]", "output": "[[1,0,1],[0,0,0],[1,0,1]]" },
            { "input": "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]", "output": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]" },
        ],
        constraints: ["m == matrix.length", "n == matrix[0].length", "1 ≤ m, n ≤ 200", "-2³¹ ≤ matrix[i][j] ≤ 2³¹ - 1"],
        starterCode: {
            javascript: `function setZeroes(matrix) {
  // Write your solution here
  
}

// Test cases
let m1 = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(m1);
console.log(m1); // Expected: [[1,0,1],[0,0,0],[1,0,1]]`,
            python: `def setZeroes(matrix):
    # Write your solution here
    pass

# Test cases
m1 = [[1,1,1],[1,0,1],[1,1,1]]
setZeroes(m1)
print(m1)  # Expected: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]`,
            java: `import java.util.*;

class Solution {
    public static void setZeroes(int[][] matrix) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        int[][] m1 = {{1,1,1},{1,0,1},{1,1,1}};
        setZeroes(m1);
        System.out.println(Arrays.deepToString(m1)); // Expected: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
    }
}`,
        },
        expectedOutput: {
            javascript: "[[1,0,1],[0,0,0],[1,0,1]]",
            python: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]",
            java: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]",
        },
    },

    "spiral-matrix": {
        id: "spiral-matrix",
        title: "Spiral Matrix",
        difficulty: "Medium",
        category: "Array • Matrix • Simulation",
        description: {
            text: "Given an m x n matrix, return all elements of the matrix in spiral order.",
            notes: [],
        },
        examples: [
            { "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]", "output": "[1,2,3,6,9,8,7,4,5]" },
            { "input": "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]", "output": "[1,2,3,4,8,12,11,10,9,5,6,7]" },
        ],
        constraints: ["m == matrix.length", "n == matrix[i].length", "1 ≤ m, n ≤ 10"],
        starterCode: {
            javascript: `function spiralOrder(matrix) {
  // Write your solution here
  
}

// Test cases
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // Expected: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,
            python: `def spiralOrder(matrix):
    # Write your solution here
    pass

# Test cases
print(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))  # Expected: [1, 2, 3, 6, 9, 8, 7, 4, 5]
print(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))  # Expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]`,
            java: `import java.util.*;

class Solution {
    public static List<Integer> spiralOrder(int[][] matrix) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(spiralOrder(new int[][]{{1,2,3},{4,5,6},{7,8,9}})); // Expected: [1, 2, 3, 6, 9, 8, 7, 4, 5]
        System.out.println(spiralOrder(new int[][]{{1,2,3,4},{5,6,7,8},{9,10,11,12}})); // Expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,2,3,6,9,8,7,4,5]\\n[1,2,3,4,8,12,11,10,9,5,6,7]",
            python: "[1, 2, 3, 6, 9, 8, 7, 4, 5]\\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
            java: "[1, 2, 3, 6, 9, 8, 7, 4, 5]\\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
        },
    },

    "fizz-buzz": {
        id: "fizz-buzz",
        title: "Fizz Buzz",
        difficulty: "Easy",
        category: "Math • Simulation",
        description: {
            text: "Given an integer n, return a string array answer where: answer[i] == 'FizzBuzz' if i is divisible by 3 and 5, answer[i] == 'Fizz' if i is divisible by 3, answer[i] == 'Buzz' if i is divisible by 5, otherwise answer[i] == i (as a string), for each i from 1 to n.",
            notes: [],
        },
        examples: [
            { "input": "n = 3", "output": "[\"1\",\"2\",\"Fizz\"]" },
            { "input": "n = 5", "output": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]" },
            { "input": "n = 15", "output": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",\"Fizz\",\"7\",\"8\",\"Fizz\",\"Buzz\",\"11\",\"Fizz\",\"13\",\"14\",\"FizzBuzz\"]" },
        ],
        constraints: ["1 ≤ n ≤ 10⁴"],
        starterCode: {
            javascript: `function fizzBuzz(n) {
  // Write your solution here
  
}

// Test cases
console.log(fizzBuzz(3)); // Expected: ["1","2","Fizz"]
console.log(fizzBuzz(5)); // Expected: ["1","2","Fizz","4","Buzz"]`,
            python: `def fizzBuzz(n):
    # Write your solution here
    pass

# Test cases
print(fizzBuzz(3))  # Expected: ['1', '2', 'Fizz']
print(fizzBuzz(5))  # Expected: ['1', '2', 'Fizz', '4', 'Buzz']`,
            java: `import java.util.*;

class Solution {
    public static List<String> fizzBuzz(int n) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(fizzBuzz(3)); // Expected: [1, 2, Fizz]
        System.out.println(fizzBuzz(5)); // Expected: [1, 2, Fizz, 4, Buzz]
    }
}`,
        },
        expectedOutput: {
            javascript: "[\"1\",\"2\",\"Fizz\"]\\n[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]",
            python: "['1', '2', 'Fizz']\\n['1', '2', 'Fizz', '4', 'Buzz']",
            java: "[1, 2, Fizz]\\n[1, 2, Fizz, 4, Buzz]",
        },
    },

    "single-number": {
        id: "single-number",
        title: "Single Number",
        difficulty: "Easy",
        category: "Array • Bit Manipulation • Hash Table • Sorting",
        description: {
            text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
            notes: ["You must implement a solution with a linear runtime complexity and use only constant extra space."],
        },
        examples: [
            { "input": "nums = [2,2,1]", "output": "1" },
            { "input": "nums = [4,1,2,1,2]", "output": "4" },
            { "input": "nums = [1]", "output": "1" },
        ],
        constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴", "Each element in the array appears twice except for one element which appears only once"],
        starterCode: {
            javascript: `function singleNumber(nums) {
  // Write your solution here
  
}

// Test cases
console.log(singleNumber([2,2,1])); // Expected: 1
console.log(singleNumber([4,1,2,1,2])); // Expected: 4
console.log(singleNumber([1])); // Expected: 1`,
            python: `def singleNumber(nums):
    # Write your solution here
    pass

# Test cases
print(singleNumber([2,2,1]))  # Expected: 1
print(singleNumber([4,1,2,1,2]))  # Expected: 4
print(singleNumber([1]))  # Expected: 1`,
            java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2,2,1})); // Expected: 1
        System.out.println(singleNumber(new int[]{4,1,2,1,2})); // Expected: 4
        System.out.println(singleNumber(new int[]{1})); // Expected: 1
    }
}`,
        },
        expectedOutput: {
            javascript: "1\\n4\\n1",
            python: "1\\n4\\n1",
            java: "1\\n4\\n1",
        },
    },

    "missing-number": {
        id: "missing-number",
        title: "Missing Number",
        difficulty: "Easy",
        category: "Array • Math • Bit Manipulation • Hash Table • Sorting • Binary Search",
        description: {
            text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
            notes: [],
        },
        examples: [
            { "input": "nums = [3,0,1]", "output": "2", "explanation": "n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number." },
            { "input": "nums = [0,1]", "output": "2", "explanation": "n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number." },
            { "input": "nums = [9,6,4,2,3,5,7,0,1]", "output": "8" },
        ],
        constraints: ["n == nums.length", "1 ≤ n ≤ 10⁴", "0 ≤ nums[i] ≤ n", "All the numbers of nums are unique"],
        starterCode: {
            javascript: `function missingNumber(nums) {
  // Write your solution here
  
}

// Test cases
console.log(missingNumber([3,0,1])); // Expected: 2
console.log(missingNumber([0,1])); // Expected: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Expected: 8`,
            python: `def missingNumber(nums):
    # Write your solution here
    pass

# Test cases
print(missingNumber([3,0,1]))  # Expected: 2
print(missingNumber([0,1]))  # Expected: 2
print(missingNumber([9,6,4,2,3,5,7,0,1]))  # Expected: 8`,
            java: `class Solution {
    public static int missingNumber(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(missingNumber(new int[]{3,0,1})); // Expected: 2
        System.out.println(missingNumber(new int[]{0,1})); // Expected: 2
        System.out.println(missingNumber(new int[]{9,6,4,2,3,5,7,0,1})); // Expected: 8
    }
}`,
        },
        expectedOutput: {
            javascript: "2\\n2\\n8",
            python: "2\\n2\\n8",
            java: "2\\n2\\n8",
        },
    },

    "counting-bits": {
        id: "counting-bits",
        title: "Counting Bits",
        difficulty: "Easy",
        category: "Dynamic Programming • Bit Manipulation",
        description: {
            text: "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.",
            notes: [],
        },
        examples: [
            { "input": "n = 2", "output": "[0,1,1]" },
            { "input": "n = 5", "output": "[0,1,1,2,1,2]" },
        ],
        constraints: ["0 ≤ n ≤ 10⁵"],
        starterCode: {
            javascript: `function countBits(n) {
  // Write your solution here
  
}

// Test cases
console.log(countBits(2)); // Expected: [0,1,1]
console.log(countBits(5)); // Expected: [0,1,1,2,1,2]`,
            python: `def countBits(n):
    # Write your solution here
    pass

# Test cases
print(countBits(2))  # Expected: [0, 1, 1]
print(countBits(5))  # Expected: [0, 1, 1, 2, 1, 2]`,
            java: `import java.util.*;

class Solution {
    public static int[] countBits(int n) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(countBits(2))); // Expected: [0, 1, 1]
        System.out.println(Arrays.toString(countBits(5))); // Expected: [0, 1, 1, 2, 1, 2]
    }
}`,
        },
        expectedOutput: {
            javascript: "[0,1,1]\\n[0,1,1,2,1,2]",
            python: "[0, 1, 1]\\n[0, 1, 1, 2, 1, 2]",
            java: "[0, 1, 1]\\n[0, 1, 1, 2, 1, 2]",
        },
    },

    "plus-one": {
        id: "plus-one",
        title: "Plus One",
        difficulty: "Easy",
        category: "Array • Math • Simulation",
        description: {
            text: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. Increment the large integer by one and return the resulting array of digits.",
            notes: [],
        },
        examples: [
            { "input": "digits = [1,2,3]", "output": "[1,2,4]", "explanation": "The array represents the integer 123. Incrementing by one gives 123 + 1 = 124." },
            { "input": "digits = [4,3,2,1]", "output": "[4,3,2,2]" },
            { "input": "digits = [9]", "output": "[1,0]" },
        ],
        constraints: ["1 ≤ digits.length ≤ 100", "0 ≤ digits[i] ≤ 9"],
        starterCode: {
            javascript: `function plusOne(digits) {
  // Write your solution here
  
}

// Test cases
console.log(plusOne([1,2,3])); // Expected: [1,2,4]
console.log(plusOne([4,3,2,1])); // Expected: [4,3,2,2]
console.log(plusOne([9])); // Expected: [1,0]`,
            python: `def plusOne(digits):
    # Write your solution here
    pass

# Test cases
print(plusOne([1,2,3]))  # Expected: [1, 2, 4]
print(plusOne([4,3,2,1]))  # Expected: [4, 3, 2, 2]
print(plusOne([9]))  # Expected: [1, 0]`,
            java: `import java.util.*;

class Solution {
    public static int[] plusOne(int[] digits) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(plusOne(new int[]{1,2,3}))); // Expected: [1, 2, 4]
        System.out.println(Arrays.toString(plusOne(new int[]{4,3,2,1}))); // Expected: [4, 3, 2, 2]
        System.out.println(Arrays.toString(plusOne(new int[]{9}))); // Expected: [1, 0]
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,2,4]\\n[4,3,2,2]\\n[1,0]",
            python: "[1, 2, 4]\\n[4, 3, 2, 2]\\n[1, 0]",
            java: "[1, 2, 4]\\n[4, 3, 2, 2]\\n[1, 0]",
        },
    },

    "search-a-2d-matrix": {
        id: "search-a-2d-matrix",
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        category: "Array • Binary Search • Matrix",
        description: {
            text: "You are given an m x n integer matrix with the following properties: each row is sorted in non-decreasing order, and the first integer of each row is greater than the last integer of the previous row. Given an integer target, return true if target is in matrix or false otherwise. You must write a solution in O(log(m*n)) time complexity.",
            notes: [],
        },
        examples: [
            { "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3", "output": "true" },
            { "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13", "output": "false" },
        ],
        constraints: ["m == matrix.length", "n == matrix[i].length", "1 ≤ m, n ≤ 100", "-10⁴ ≤ matrix[i][j], target ≤ 10⁴"],
        starterCode: {
            javascript: `function searchMatrix(matrix, target) {
  // Write your solution here
  
}

// Test cases
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // Expected: true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // Expected: false`,
            python: `def searchMatrix(matrix, target):
    # Write your solution here
    pass

# Test cases
print(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))  # Expected: True
print(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))  # Expected: False`,
            java: `class Solution {
    public static boolean searchMatrix(int[][] matrix, int target) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(searchMatrix(new int[][]{{1,3,5,7},{10,11,16,20},{23,30,34,60}}, 3)); // Expected: true
        System.out.println(searchMatrix(new int[][]{{1,3,5,7},{10,11,16,20},{23,30,34,60}}, 13)); // Expected: false
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse",
            python: "True\\nFalse",
            java: "true\\nfalse",
        },
    },

    "majority-element": {
        id: "majority-element",
        title: "Majority Element",
        difficulty: "Easy",
        category: "Array • Divide and Conquer • Hash Table • Sorting • Counting • Boyer-Moore Voting",
        description: {
            text: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than n/2 times. You may assume that the majority element always exists in the array.",
            notes: [],
        },
        examples: [
            { "input": "nums = [3,2,3]", "output": "3" },
            { "input": "nums = [2,2,1,1,1,2,2]", "output": "2" },
        ],
        constraints: ["n == nums.length", "1 ≤ n ≤ 5 * 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹"],
        starterCode: {
            javascript: `function majorityElement(nums) {
  // Write your solution here
  
}

// Test cases
console.log(majorityElement([3,2,3])); // Expected: 3
console.log(majorityElement([2,2,1,1,1,2,2])); // Expected: 2`,
            python: `def majorityElement(nums):
    # Write your solution here
    pass

# Test cases
print(majorityElement([3,2,3]))  # Expected: 3
print(majorityElement([2,2,1,1,1,2,2]))  # Expected: 2`,
            java: `class Solution {
    public static int majorityElement(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(majorityElement(new int[]{3,2,3})); // Expected: 3
        System.out.println(majorityElement(new int[]{2,2,1,1,1,2,2})); // Expected: 2
    }
}`,
        },
        expectedOutput: {
            javascript: "3\\n2",
            python: "3\\n2",
            java: "3\\n2",
        },
    },
    "middle-of-the-linked-list": {
        id: "middle-of-the-linked-list",
        title: "Middle of the Linked List",
        difficulty: "Easy",
        category: "Linked List • Two Pointers • Array",
        description: {
            text: "Given the head of a singly linked list, return the middle node of the linked list.",
            notes: ["If there are two middle nodes, return the second middle node."],
        },
        examples: [
            { "input": "head = [1,2,3,4,5]", "output": "[3,4,5]", "explanation": "The middle node of the list is node 3." },
            { "input": "head = [1,2,3,4,5,6]", "output": "[4,5,6]", "explanation": "Since the list has two middle nodes with values 3 and 4, we return the second one." },
        ],
        constraints: ["The number of nodes in the list is in the range [1, 100]", "1 ≤ Node.val ≤ 100"],
        starterCode: {
            javascript: `function middleNode(head) {
  // Write your solution here
  
}

// Helper usage: middleNode(buildList([1,2,3,4,5]))`,
            python: `def middleNode(head):
    # Write your solution here
    pass`,
            java: `class Solution {
    public ListNode middleNode(ListNode head) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[3,4,5]\\n[4,5,6]",
            python: "[3, 4, 5]\\n[4, 5, 6]",
            java: "[3, 4, 5]\\n[4, 5, 6]",
        },
    },

    "palindrome-linked-list": {
        id: "palindrome-linked-list",
        title: "Palindrome Linked List",
        difficulty: "Easy",
        category: "Linked List • Two Pointers • Stack • Recursion",
        description: {
            text: "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
            notes: [],
        },
        examples: [
            { "input": "head = [1,2,2,1]", "output": "true" },
            { "input": "head = [1,2]", "output": "false" },
        ],
        constraints: ["The number of nodes in the list is in the range [1, 10⁵]", "0 ≤ Node.val ≤ 9"],
        starterCode: {
            javascript: `function isPalindrome(head) {
  // Write your solution here
  
}`,
            python: `def isPalindrome(head):
    # Write your solution here
    pass`,
            java: `class Solution {
    public boolean isPalindrome(ListNode head) {
        // Write your solution here
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse",
            python: "True\\nFalse",
            java: "true\\nfalse",
        },
    },

    "remove-linked-list-elements": {
        id: "remove-linked-list-elements",
        title: "Remove Linked List Elements",
        difficulty: "Easy",
        category: "Linked List • Recursion • Iteration",
        description: {
            text: "Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.",
            notes: [],
        },
        examples: [
            { "input": "head = [1,2,6,3,4,5,6], val = 6", "output": "[1,2,3,4,5]" },
            { "input": "head = [], val = 1", "output": "[]" },
            { "input": "head = [7,7,7,7], val = 7", "output": "[]" },
        ],
        constraints: ["The number of nodes in the list is in the range [0, 10⁴]", "1 ≤ Node.val ≤ 50", "0 ≤ val ≤ 50"],
        starterCode: {
            javascript: `function removeElements(head, val) {
  // Write your solution here
  
}`,
            python: `def removeElements(head, val):
    # Write your solution here
    pass`,
            java: `class Solution {
    public ListNode removeElements(ListNode head, int val) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,2,3,4,5]\\n[]\\n[]",
            python: "[1, 2, 3, 4, 5]\\n[]\\n[]",
            java: "[1, 2, 3, 4, 5]\\n[]\\n[]",
        },
    },

    "delete-node-in-a-linked-list": {
        id: "delete-node-in-a-linked-list",
        title: "Delete Node in a Linked List",
        difficulty: "Medium",
        category: "Linked List",
        description: {
            text: "There is a singly-linked list head and we want to delete a node in it. You are given the node to be deleted node directly. You will not be given access to the head of the list.",
            notes: ["All the values of the linked list are unique.", "The given node will not be the tail node in the list."],
        },
        examples: [
            { "input": "head = [4,5,1,9], node = 5", "output": "[4,1,9]", "explanation": "You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function." },
        ],
        constraints: ["The number of the nodes in the given list is in the range [2, 1000]", "-1000 ≤ Node.val ≤ 1000", "Each node value in the list is unique."],
        starterCode: {
            javascript: `function deleteNode(node) {
  // Write your solution here
  
}`,
            python: `def deleteNode(node):
    # Write your solution here
    pass`,
            java: `class Solution {
    public void deleteNode(ListNode node) {
        // Write your solution here
    }
}`,
        },
        expectedOutput: {
            javascript: "[4,1,9]",
            python: "[4, 1, 9]",
            java: "[4, 1, 9]",
        },
    },

    "remove-duplicates-from-sorted-list": {
        id: "remove-duplicates-from-sorted-list",
        title: "Remove Duplicates from Sorted List",
        difficulty: "Easy",
        category: "Linked List • Two Pointers",
        description: {
            text: "Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.",
            notes: [],
        },
        examples: [
            { "input": "head = [1,1,2]", "output": "[1,2]" },
            { "input": "head = [1,1,2,3,3]", "output": "[1,2,3]" },
        ],
        constraints: ["The number of nodes in the list is in the range [0, 300]", "-100 ≤ Node.val ≤ 100", "The list is guaranteed to be sorted in ascending order."],
        starterCode: {
            javascript: `function deleteDuplicates(head) {
  // Write your solution here
  
}`,
            python: `def deleteDuplicates(head):
    # Write your solution here
    pass`,
            java: `class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,2]\\n[1,2,3]",
            python: "[1, 2]\\n[1, 2, 3]",
            java: "[1, 2]\\n[1, 2, 3]",
        },
    },

    "intersection-of-two-linked-lists": {
        id: "intersection-of-two-linked-lists",
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        category: "Linked List • Two Pointers • Hash Table",
        description: {
            text: "Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.",
            notes: ["The inputs are not given as cyclic structures.", "Your code should preferably run in O(n) time and use O(1) memory."],
        },
        examples: [
            { "input": "intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]", "output": "Intersected at '8'" },
        ],
        constraints: ["The number of nodes of listA is m", "The number of nodes of listB is n", "1 ≤ m, n ≤ 3 * 10⁴", "1 ≤ Node.val ≤ 10⁵"],
        starterCode: {
            javascript: `function getIntersectionNode(headA, headB) {
  // Write your solution here
  
}`,
            python: `def getIntersectionNode(headA, headB):
    # Write your solution here
    pass`,
            java: `public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "Intersected at '8'",
            python: "Intersected at '8'",
            java: "Intersected at '8'",
        },
    },

    "linked-list-cycle-ii": {
        id: "linked-list-cycle-ii",
        title: "Linked List Cycle II",
        difficulty: "Medium",
        category: "Linked List • Two Pointers",
        description: {
            text: "Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.",
            notes: ["Do not modify the linked list."],
        },
        examples: [
            { "input": "head = [3,2,0,-4], pos = 1", "output": "tail connects to node index 1" },
        ],
        constraints: ["The number of nodes in the list is in the range [0, 10⁴]", "-10⁵ ≤ Node.val ≤ 10⁵"],
        starterCode: {
            javascript: `function detectCycle(head) {
  // Write your solution here
  
}`,
            python: `def detectCycle(head):
    # Write your solution here
    pass`,
            java: `public class Solution {
    public ListNode detectCycle(ListNode head) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "tail connects to node index 1",
            python: "tail connects to node index 1",
            java: "tail connects to node index 1",
        },
    },

    "reorder-list": {
        id: "reorder-list",
        title: "Reorder List",
        difficulty: "Medium",
        category: "Linked List • Two Pointers • Stack • Recursion",
        description: {
            text: "You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln. Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …",
            notes: ["You may not modify the values in the list's nodes. Only nodes themselves may be changed."],
        },
        examples: [
            { "input": "head = [1,2,3,4]", "output": "[1,4,2,3]" },
            { "input": "head = [1,2,3,4,5]", "output": "[1,5,2,4,3]" },
        ],
        constraints: ["The number of nodes in the list is in the range [1, 5 * 10⁴]", "1 ≤ Node.val ≤ 1000"],
        starterCode: {
            javascript: `function reorderList(head) {
  // Write your solution here
  
}`,
            python: `def reorderList(head):
    # Write your solution here
    pass`,
            java: `class Solution {
    public void reorderList(ListNode head) {
        // Write your solution here
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,4,2,3]\\n[1,5,2,4,3]",
            python: "[1, 4, 2, 3]\\n[1, 5, 2, 4, 3]",
            java: "[1, 4, 2, 3]\\n[1, 5, 2, 4, 3]",
        },
    },

    "swap-nodes-in-pairs": {
        id: "swap-nodes-in-pairs",
        title: "Swap Nodes in Pairs",
        difficulty: "Medium",
        category: "Linked List • Recursion",
        description: {
            text: "Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes.",
            notes: [],
        },
        examples: [
            { "input": "head = [1,2,3,4]", "output": "[2,1,4,3]" },
            { "input": "head = []", "output": "[]" },
            { "input": "head = [1]", "output": "[1]" },
        ],
        constraints: ["The number of nodes in the list is in the range [0, 100]", "0 ≤ Node.val ≤ 100"],
        starterCode: {
            javascript: `function swapPairs(head) {
  // Write your solution here
  
}`,
            python: `def swapPairs(head):
    # Write your solution here
    pass`,
            java: `class Solution {
    public ListNode swapPairs(ListNode head) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[2,1,4,3]\\n[]\\n[1]",
            python: "[2, 1, 4, 3]\\n[]\\n[1]",
            java: "[2, 1, 4, 3]\\n[]\\n[1]",
        },
    },

    "add-two-numbers": {
        id: "add-two-numbers",
        title: "Add Two Numbers",
        difficulty: "Medium",
        category: "Linked List • Math • Recursion • Simulation",
        description: {
            text: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
            notes: ["You may assume the two numbers do not contain any leading zero, except the number 0 itself."],
        },
        examples: [
            { "input": "l1 = [2,4,3], l2 = [5,6,4]", "output": "[7,0,8]", "explanation": "342 + 465 = 807." },
        ],
        constraints: ["The number of nodes in each linked list is in the range [1, 100]", "0 ≤ Node.val ≤ 9", "It is guaranteed that the list represents a number that does not have leading zeros."],
        starterCode: {
            javascript: `function addTwoNumbers(l1, l2) {
  // Write your solution here
  
}`,
            python: `def addTwoNumbers(l1, l2):
    # Write your solution here
    pass`,
            java: `class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[7,0,8]",
            python: "[7, 0, 8]",
            java: "[7, 0, 8]",
        },
    },

    "odd-even-linked-list": {
        id: "odd-even-linked-list",
        title: "Odd Even Linked List",
        difficulty: "Medium",
        category: "Linked List • Two Pointers",
        description: {
            text: "Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.",
            notes: ["The first node is considered odd, the second node even, and so on.", "You should try to solve it in O(1) space complexity and O(n) time complexity."],
        },
        examples: [
            { "input": "head = [1,2,3,4,5]", "output": "[1,3,5,2,4]" },
            { "input": "head = [2,1,3,5,6,4,7]", "output": "[2,3,6,7,1,5,4]" },
        ],
        constraints: ["The number of nodes in the linked list is in the range [0, 10⁴]", "-10⁶ ≤ Node.val ≤ 10⁶"],
        starterCode: {
            javascript: `function oddEvenList(head) {
  // Write your solution here
  
}`,
            python: `def oddEvenList(head):
    # Write your solution here
    pass`,
            java: `class Solution {
    public ListNode oddEvenList(ListNode head) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,3,5,2,4]\\n[2,3,6,7,1,5,4]",
            python: "[1, 3, 5, 2, 4]\\n[2, 3, 6, 7, 1, 5, 4]",
            java: "[1, 3, 5, 2, 4]\\n[2, 3, 6, 7, 1, 5, 4]",
        },
    },

    "sort-list": {
        id: "sort-list",
        title: "Sort List",
        difficulty: "Medium",
        category: "Linked List • Divide and Conquer • Sorting • Merge Sort",
        description: {
            text: "Given the head of a linked list, return the list after sorting it in ascending order.",
            notes: ["Can you sort the linked list in O(n log n) time and O(1) memory space?"],
        },
        examples: [
            { "input": "head = [4,2,1,3]", "output": "[1,2,3,4]" },
            { "input": "head = [-1,5,3,4,0]", "output": "[-1,0,3,4,5]" },
        ],
        constraints: ["The number of nodes in the list is in the range [0, 5 * 10⁴]", "-10⁵ ≤ Node.val ≤ 10⁵"],
        starterCode: {
            javascript: `function sortList(head) {
  // Write your solution here
  
}`,
            python: `def sortList(head):
    # Write your solution here
    pass`,
            java: `class Solution {
    public ListNode sortList(ListNode head) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,2,3,4]\\n[-1,0,3,4,5]",
            python: "[1, 2, 3, 4]\\n[-1, 0, 3, 4, 5]",
            java: "[1, 2, 3, 4]\\n[-1, 0, 3, 4, 5]",
        },
    },

    "copy-list-with-random-pointer": {
        id: "copy-list-with-random-pointer",
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        category: "Linked List • Hash Table",
        description: {
            text: "A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null. Construct a deep copy of the list.",
            notes: [],
        },
        examples: [
            { "input": "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]", "output": "[[7,null],[13,0],[11,4],[10,2],[1,0]]" },
        ],
        constraints: ["0 ≤ n ≤ 1000", "-10⁴ ≤ Node.val ≤ 10⁴", "Node.random is null or is pointing to some node in the linked list."],
        starterCode: {
            javascript: `function copyRandomList(head) {
  // Write your solution here
  
}`,
            python: `def copyRandomList(head):
    # Write your solution here
    pass`,
            java: `class Solution {
    public Node copyRandomList(Node head) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
            python: "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
            java: "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        },
    },

    "rotate-list": {
        id: "rotate-list",
        title: "Rotate List",
        difficulty: "Medium",
        category: "Linked List • Two Pointers • Math",
        description: {
            text: "Given the head of a linked list, rotate the list to the right by k places.",
            notes: [],
        },
        examples: [
            { "input": "head = [1,2,3,4,5], k = 2", "output": "[4,5,1,2,3]" },
            { "input": "head = [0,1,2], k = 4", "output": "[2,0,1]" },
        ],
        constraints: ["The number of nodes in the list is in the range [0, 500]", "-100 ≤ Node.val ≤ 100", "0 ≤ k ≤ 2 * 10⁹"],
        starterCode: {
            javascript: `function rotateRight(head, k) {
  // Write your solution here
  
}`,
            python: `def rotateRight(head, k):
    # Write your solution here
    pass`,
            java: `class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[4,5,1,2,3]\\n[2,0,1]",
            python: "[4, 5, 1, 2, 3]\\n[2, 0, 1]",
            java: "[4, 5, 1, 2, 3]\\n[2, 0, 1]",
        },
    },

    "partition-list": {
        id: "partition-list",
        title: "Partition List",
        difficulty: "Medium",
        category: "Linked List • Two Pointers",
        description: {
            text: "Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.",
            notes: ["You should preserve the original relative order of the nodes in each of the two partitions."],
        },
        examples: [
            { "input": "head = [1,4,3,2,5,2], x = 3", "output": "[1,2,2,4,3,5]" },
            { "input": "head = [2,1], x = 2", "output": "[1,2]" },
        ],
        constraints: ["The number of nodes in the list is in the range [0, 200]", "-100 ≤ Node.val ≤ 100", "-200 ≤ x ≤ 200"],
        starterCode: {
            javascript: `function partition(head, x) {
  // Write your solution here
  
}`,
            python: `def partition(head, x):
    # Write your solution here
    pass`,
            java: `class Solution {
    public ListNode partition(ListNode head, int x) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,2,2,4,3,5]\\n[1,2]",
            python: "[1, 2, 2, 4, 3, 5]\\n[1, 2]",
            java: "[1, 2, 2, 4, 3, 5]\\n[1, 2]",
        },
    },

    "reverse-linked-list-ii": {
        id: "reverse-linked-list-ii",
        title: "Reverse Linked List II",
        difficulty: "Medium",
        category: "Linked List • Recursion",
        description: {
            text: "Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.",
            notes: [],
        },
        examples: [
            { "input": "head = [1,2,3,4,5], left = 2, right = 4", "output": "[1,4,3,2,5]" },
            { "input": "head = [5], left = 1, right = 1", "output": "[5]" },
        ],
        constraints: ["The number of nodes in the list is n", "1 ≤ n ≤ 500", "-500 ≤ Node.val ≤ 500", "1 ≤ left ≤ right ≤ n"],
        starterCode: {
            javascript: `function reverseBetween(head, left, right) {
  // Write your solution here
  
}`,
            python: `def reverseBetween(head, left, right):
    # Write your solution here
    pass`,
            java: `class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,4,3,2,5]\\n[5]",
            python: "[1, 4, 3, 2, 5]\\n[5]",
            java: "[1, 4, 3, 2, 5]\\n[5]",
        },
    },

    "remove-duplicates-from-sorted-list-ii": {
        id: "remove-duplicates-from-sorted-list-ii",
        title: "Remove Duplicates from Sorted List II",
        difficulty: "Medium",
        category: "Linked List • Two Pointers",
        description: {
            text: "Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.",
            notes: [],
        },
        examples: [
            { "input": "head = [1,2,3,3,4,4,5]", "output": "[1,2,5]" },
            { "input": "head = [1,1,1,2,3]", "output": "[2,3]" },
        ],
        constraints: ["The number of nodes in the list is in the range [0, 300]", "-100 ≤ Node.val ≤ 100", "The list is guaranteed to be sorted in ascending order."],
        starterCode: {
            javascript: `function deleteDuplicates(head) {
  // Write your solution here
  
}`,
            python: `def deleteDuplicates(head):
    # Write your solution here
    pass`,
            java: `class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,2,5]\\n[2,3]",
            python: "[1, 2, 5]\\n[2, 3]",
            java: "[1, 2, 5]\\n[2, 3]",
        },
    },

    "merge-k-sorted-lists": {
        id: "merge-k-sorted-lists",
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        category: "Linked List • Divide and Conquer • Heap • Merge Sort",
        description: {
            text: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
            notes: [],
        },
        examples: [
            { "input": "lists = [[1,4,5],[1,3,4],[2,6]]", "output": "[1,1,2,3,4,4,5,6]" },
            { "input": "lists = []", "output": "[]" },
        ],
        constraints: ["k == lists.length", "0 ≤ k ≤ 10⁴", "0 ≤ lists[i].length ≤ 500", "-10⁴ ≤ lists[i][j] ≤ 10⁴"],
        starterCode: {
            javascript: `function mergeKLists(lists) {
  // Write your solution here
  
}`,
            python: `def mergeKLists(lists):
    # Write your solution here
    pass`,
            java: `class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,1,2,3,4,4,5,6]\\n[]",
            python: "[1, 1, 2, 3, 4, 4, 5, 6]\\n[]",
            java: "[1, 1, 2, 3, 4, 4, 5, 6]\\n[]",
        },
    },

    "reverse-nodes-in-k-group": {
        id: "reverse-nodes-in-k-group",
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        category: "Linked List • Recursion",
        description: {
            text: "Given the head of a linked list, reverse the nodes of the list k at a time, and return its modified head.",
            notes: ["k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is."],
        },
        examples: [
            { "input": "head = [1,2,3,4,5], k = 2", "output": "[2,1,4,3,5]" },
            { "input": "head = [1,2,3,4,5], k = 3", "output": "[3,2,1,4,5]" },
        ],
        constraints: ["The number of nodes in the list is n", "1 ≤ k ≤ n ≤ 5000", "0 ≤ Node.val ≤ 1000"],
        starterCode: {
            javascript: `function reverseKGroup(head, k) {
  // Write your solution here
  
}`,
            python: `def reverseKGroup(head, k):
    # Write your solution here
    pass`,
            java: `class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        // Write your solution here
        return null;
    }
}`,
        },
        expectedOutput: {
            javascript: "[2,1,4,3,5]\\n[3,2,1,4,5]",
            python: "[2, 1, 4, 3, 5]\\n[3, 2, 1, 4, 5]",
            java: "[2, 1, 4, 3, 5]\\n[3, 2, 1, 4, 5]",
        },
    },

    "lru-cache": {
        id: "lru-cache",
        title: "LRU Cache",
        difficulty: "Medium",
        category: "Linked List • Design • Hash Table • Doubly Linked List",
        description: {
            text: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
            notes: ["Implement the LRUCache class with get(key) and put(key, value) running in O(1) average time complexity."],
        },
        examples: [
            { "input": "[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\"]\\n[[2], [1, 1], [2, 2], [1], [3, 3], [2]]", "output": "[null, null, null, 1, null, -1]" },
        ],
        constraints: ["1 ≤ capacity ≤ 3000", "0 ≤ key ≤ 10⁴", "0 ≤ value ≤ 10⁵", "At most 2 * 10⁵ calls will be made to get and put."],
        starterCode: {
            javascript: `class LRUCache {
  constructor(capacity) {}
  get(key) {}
  put(key, value) {}
}`,
            python: `class LRUCache:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        pass
    def put(self, key: int, value: int) -> None:
        pass`,
            java: `class LRUCache {
    public LRUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
}`,
        },
        expectedOutput: {
            javascript: "[null, null, null, 1, null, -1]",
            python: "[None, None, None, 1, None, -1]",
            java: "[null, null, null, 1, null, -1]",
        },
    },

    // ==========================================
    // ARRAY & TWO POINTERS PROBLEMS
    // ==========================================

    "three-sum-closest": {
        id: "three-sum-closest",
        title: "3Sum Closest",
        difficulty: "Medium",
        category: "Array • Two Pointers • Sorting",
        description: {
            text: "Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.",
            notes: ["Return the sum of the three integers.", "You may assume that each input would have exactly one solution."],
        },
        examples: [
            { "input": "nums = [-1,2,1,-4], target = 1", "output": "2", "explanation": "The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)." },
            { "input": "nums = [0,0,0], target = 1", "output": "0" },
        ],
        constraints: ["3 ≤ nums.length ≤ 500", "-1000 ≤ nums[i] ≤ 1000", "-10⁴ ≤ target ≤ 10⁴"],
        starterCode: {
            javascript: `function threeSumClosest(nums, target) {
  // Write your solution here
  
}`,
            python: `def threeSumClosest(nums, target):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int threeSumClosest(int[] nums, int target) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2\\n0",
            python: "2\\n0",
            java: "2\\n0",
        },
    },

    "four-sum": {
        id: "four-sum",
        title: "4Sum",
        difficulty: "Medium",
        category: "Array • Two Pointers • Sorting • Hash Table",
        description: {
            text: "Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that the sum adds up to target.",
            notes: ["The solution set must not contain duplicate quadruplets."],
        },
        examples: [
            { "input": "nums = [1,0,-1,0,-2,2], target = 0", "output": "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 200", "-10⁹ ≤ nums[i] ≤ 10⁹", "-10⁹ ≤ target ≤ 10⁹"],
        starterCode: {
            javascript: `function fourSum(nums, target) {
  // Write your solution here
  
}`,
            python: `def fourSum(nums, target):
    # Write your solution here
    pass`,
            java: `class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]",
            python: "[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]",
            java: "[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]",
        },
    },

    "remove-element": {
        id: "remove-element",
        title: "Remove Element",
        difficulty: "Easy",
        category: "Array • Two Pointers",
        description: {
            text: "Given an integer array nums and an integer val, remove all occurrences of val in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.",
            notes: [],
        },
        examples: [
            { "input": "nums = [3,2,2,3], val = 3", "output": "2, nums = [2,2,_,_]" },
        ],
        constraints: ["0 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 50", "0 ≤ val ≤ 100"],
        starterCode: {
            javascript: `function removeElement(nums, val) {
  // Write your solution here
  
}`,
            python: `def removeElement(nums, val):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int removeElement(int[] nums, int val) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2",
            python: "2",
            java: "2",
        },
    },

    "remove-duplicates-from-sorted-array": {
        id: "remove-duplicates-from-sorted-array",
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        category: "Array • Two Pointers",
        description: {
            text: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements.",
            notes: [],
        },
        examples: [
            { "input": "nums = [1,1,2]", "output": "2, nums = [1,2,_]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-100 ≤ nums[i] ≤ 100", "nums is sorted in non-decreasing order."],
        starterCode: {
            javascript: `function removeDuplicates(nums) {
  // Write your solution here
  
}`,
            python: `def removeDuplicates(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int removeDuplicates(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2",
            python: "2",
            java: "2",
        },
    },

    "remove-duplicates-from-sorted-array-ii": {
        id: "remove-duplicates-from-sorted-array-ii",
        title: "Remove Duplicates from Sorted Array II",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        description: {
            text: "Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.",
            notes: [],
        },
        examples: [
            { "input": "nums = [1,1,1,2,2,3]", "output": "5, nums = [1,1,2,2,3,_]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-10⁴ ≤ nums[i] ≤ 10⁴", "nums is sorted in non-decreasing order."],
        starterCode: {
            javascript: `function removeDuplicates(nums) {
  // Write your solution here
  
}`,
            python: `def removeDuplicates(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int removeDuplicates(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "5",
            python: "5",
            java: "5",
        },
    },

    "next-permutation": {
        id: "next-permutation",
        title: "Next Permutation",
        difficulty: "Medium",
        category: "Array • Two Pointers • Greedy",
        description: {
            text: "A permutation of an array of integers is an arrangement of its members into a sequence or linear order. Find the next lexicographically greater permutation of its integer array.",
            notes: ["The replacement must be in place and use only constant extra memory."],
        },
        examples: [
            { "input": "nums = [1,2,3]", "output": "[1,3,2]" },
            { "input": "nums = [3,2,1]", "output": "[1,2,3]" },
            { "input": "nums = [1,1,5]", "output": "[1,5,1]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 100"],
        starterCode: {
            javascript: `function nextPermutation(nums) {
  // Write your solution here
  
}`,
            python: `def nextPermutation(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public void nextPermutation(int[] nums) {
        // Write your solution here
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,3,2]\\n[1,2,3]\\n[1,5,1]",
            python: "[1, 3, 2]\\n[1, 2, 3]\\n[1, 5, 1]",
            java: "[1, 3, 2]\\n[1, 2, 3]\\n[1, 5, 1]",
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
            { "input": "nums = [0,1,0,3,12]", "output": "[1,3,12,0,0]" },
            { "input": "nums = [0]", "output": "[0]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁴", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
        starterCode: {
            javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}`,
            python: `def moveZeroes(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public void moveZeroes(int[] nums) {
        // Write your solution here
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,3,12,0,0]\\n[0]",
            python: "[1, 3, 12, 0, 0]\\n[0]",
            java: "[1, 3, 12, 0, 0]\\n[0]",
        },
    },

    "squares-of-a-sorted-array": {
        id: "squares-of-a-sorted-array",
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        category: "Array • Two Pointers • Sorting",
        description: {
            text: "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
            notes: [],
        },
        examples: [
            { "input": "nums = [-4,-1,0,3,10]", "output": "[0,1,9,16,100]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁴ ≤ nums[i] ≤ 10⁴", "nums is sorted in non-decreasing order."],
        starterCode: {
            javascript: `function sortedSquares(nums) {
  // Write your solution here
  
}`,
            python: `def sortedSquares(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int[] sortedSquares(int[] nums) {
        // Write your solution here
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[0,1,9,16,100]",
            python: "[0, 1, 9, 16, 100]",
            java: "[0, 1, 9, 16, 100]",
        },
    },

    "two-sum-ii-input-array-is-sorted": {
        id: "two-sum-ii-input-array-is-sorted",
        title: "Two Sum II - Input Array Is Sorted",
        difficulty: "Medium",
        category: "Array • Two Pointers • Binary Search",
        description: {
            text: "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.",
            notes: ["Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2."],
        },
        examples: [
            { "input": "numbers = [2,7,11,15], target = 9", "output": "[1,2]" },
        ],
        constraints: ["2 ≤ numbers.length ≤ 3 * 10⁴", "-1000 ≤ numbers[i] ≤ 1000", "numbers is sorted in non-decreasing order.", "-1000 ≤ target ≤ 1000"],
        starterCode: {
            javascript: `function twoSum(numbers, target) {
  // Write your solution here
  
}`,
            python: `def twoSum(numbers, target):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int[] twoSum(int[] numbers, int target) {
        // Write your solution here
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,2]",
            python: "[1, 2]",
            java: "[1, 2]",
        },
    },

    "sort-colors": {
        id: "sort-colors",
        title: "Sort Colors",
        difficulty: "Medium",
        category: "Array • Two Pointers • Sorting",
        description: {
            text: "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.",
            notes: ["We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.", "You must solve this problem without using the library's sort function."],
        },
        examples: [
            { "input": "nums = [2,0,2,1,1,0]", "output": "[0,0,1,1,2,2]" },
        ],
        constraints: ["n == nums.length", "1 ≤ n ≤ 300", "nums[i] is either 0, 1, or 2."],
        starterCode: {
            javascript: `function sortColors(nums) {
  // Write your solution here
  
}`,
            python: `def sortColors(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public void sortColors(int[] nums) {
        // Write your solution here
    }
}`,
        },
        expectedOutput: {
            javascript: "[0,0,1,1,2,2]",
            python: "[0, 0, 1, 1, 2, 2]",
            java: "[0, 0, 1, 1, 2, 2]",
        },
    },

    "trapping-rain-water": {
        id: "trapping-rain-water",
        title: "Trapping Rain Water",
        difficulty: "Hard",
        category: "Array • Two Pointers • Stack • Dynamic Programming • Monotonic Stack",
        description: {
            text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
            notes: [],
        },
        examples: [
            { "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]", "output": "6" },
        ],
        constraints: ["n == height.length", "1 ≤ n ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"],
        starterCode: {
            javascript: `function trap(height) {
  // Write your solution here
  
}`,
            python: `def trap(height):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int trap(int[] height) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "6",
            python: "6",
            java: "6",
        },
    },

    // ==========================================
    // SLIDING WINDOW & SUBARRAY PROBLEMS
    // ==========================================

    "minimum-size-subarray-sum": {
        id: "minimum-size-subarray-sum",
        title: "Minimum Size Subarray Sum",
        difficulty: "Medium",
        category: "Array • Sliding Window • Binary Search • Prefix Sum",
        description: {
            text: "Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.",
            notes: [],
        },
        examples: [
            { "input": "target = 7, nums = [2,3,1,2,4,3]", "output": "2", "explanation": "The subarray [4,3] has the minimal length under the problem constraint." },
        ],
        constraints: ["1 ≤ target ≤ 10⁹", "1 ≤ nums.length ≤ 10⁵", "1 ≤ nums[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function minSubArrayLen(target, nums) {
  // Write your solution here
  
}`,
            python: `def minSubArrayLen(target, nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2",
            python: "2",
            java: "2",
        },
    },

    "permutation-in-string": {
        id: "permutation-in-string",
        title: "Permutation in String",
        difficulty: "Medium",
        category: "String • Sliding Window • Hash Table • Two Pointers",
        description: {
            text: "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.",
            notes: ["In other words, return true if one of s1's permutations is the substring of s2."],
        },
        examples: [
            { "input": "s1 = \"ab\", s2 = \"eidbaooo\"", "output": "true", "explanation": "s2 contains one permutation of s1 (\"ba\")." },
            { "input": "s1 = \"ab\", s2 = \"eidboaoo\"", "output": "false" },
        ],
        constraints: ["1 ≤ s1.length, s2.length ≤ 10⁴", "s1 and s2 consist of lowercase English letters."],
        starterCode: {
            javascript: `function checkInclusion(s1, s2) {
  // Write your solution here
  
}`,
            python: `def checkInclusion(s1, s2):
    # Write your solution here
    pass`,
            java: `class Solution {
    public boolean checkInclusion(String s1, String s2) {
        // Write your solution here
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse",
            python: "True\\nFalse",
            java: "true\\nfalse",
        },
    },

    "sliding-window-maximum": {
        id: "sliding-window-maximum",
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        category: "Array • Sliding Window • Monotonic Queue • Heap • Dynamic Programming",
        description: {
            text: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.",
            notes: [],
        },
        examples: [
            { "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3", "output": "[3,3,5,5,6,7]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴", "1 ≤ k ≤ nums.length"],
        starterCode: {
            javascript: `function maxSlidingWindow(nums, k) {
  // Write your solution here
  
}`,
            python: `def maxSlidingWindow(nums, k):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[3,3,5,5,6,7]",
            python: "[3, 3, 5, 5, 6, 7]",
            java: "[3, 3, 5, 5, 6, 7]",
        },
    },

    "subarray-sum-equals-k": {
        id: "subarray-sum-equals-k",
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        category: "Array • Hash Table • Prefix Sum",
        description: {
            text: "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.",
            notes: ["A subarray is a contiguous non-empty sequence of elements within an array."],
        },
        examples: [
            { "input": "nums = [1,1,1], k = 2", "output": "2" },
            { "input": "nums = [1,2,3], k = 3", "output": "2" },
        ],
        constraints: ["1 ≤ nums.length ≤ 2 * 10⁴", "-1000 ≤ nums[i] ≤ 1000", "-10⁷ ≤ k ≤ 10⁷"],
        starterCode: {
            javascript: `function subarraySum(nums, k) {
  // Write your solution here
  
}`,
            python: `def subarraySum(nums, k):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int subarraySum(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2\\n2",
            python: "2\\n2",
            java: "2\\n2",
        },
    },

    "maximum-average-subarray-i": {
        id: "maximum-average-subarray-i",
        title: "Maximum Average Subarray I",
        difficulty: "Easy",
        category: "Array • Sliding Window",
        description: {
            text: "You are given an integer array nums consisting of n elements, and an integer k. Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.",
            notes: [],
        },
        examples: [
            { "input": "nums = [1,12,-5,-6,50,3], k = 4", "output": "12.75" },
        ],
        constraints: ["n == nums.length", "1 ≤ k ≤ n ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function findMaxAverage(nums, k) {
  // Write your solution here
  
}`,
            python: `def findMaxAverage(nums, k):
    # Write your solution here
    pass`,
            java: `class Solution {
    public double findMaxAverage(int[] nums, int k) {
        // Write your solution here
        return 0.0;
    }
}`,
        },
        expectedOutput: {
            javascript: "12.75",
            python: "12.75",
            java: "12.75",
        },
    },

    // ==========================================
    // HASH TABLE PROBLEMS
    // ==========================================

    "two-sum-fourth-input-is-a-bst": {
        id: "two-sum-fourth-input-is-a-bst",
        title: "Two Sum IV - Input is a BST",
        difficulty: "Easy",
        category: "Tree • Hash Table • Depth-First Search • Breadth-First Search • Two Pointers • Binary Search Tree",
        description: {
            text: "Given the root of a binary search tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.",
            notes: [],
        },
        examples: [
            { "input": "root = [5,3,6,2,4,null,7], k = 9", "output": "true" },
            { "input": "root = [5,3,6,2,4,null,7], k = 28", "output": "false" },
        ],
        constraints: ["The number of nodes in the tree is in the range [1, 10⁴]", "-10⁴ ≤ Node.val ≤ 10⁴", "root is guaranteed to be a valid binary search tree.", "-10⁵ ≤ k ≤ 10⁵"],
        starterCode: {
            javascript: `function findTarget(root, k) {
  // Write your solution here
  
}`,
            python: `def findTarget(root, k):
    # Write your solution here
    pass`,
            java: `class Solution {
    public boolean findTarget(TreeNode root, int k) {
        // Write your solution here
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse",
            python: "True\\nFalse",
            java: "true\\nfalse",
        },
    },

    "first-unique-character-in-a-string": {
        id: "first-unique-character-in-a-string",
        title: "First Unique Character in a String",
        difficulty: "Easy",
        category: "String • Hash Table • Counting • Queue",
        description: {
            text: "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
            notes: [],
        },
        examples: [
            { "input": "s = \"leetcode\"", "output": "0" },
            { "input": "s = \"loveleetcode\"", "output": "2" },
            { "input": "s = \"aabb\"", "output": "-1" },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁵", "s consists of lowercase English letters."],
        starterCode: {
            javascript: `function firstUniqChar(s) {
  // Write your solution here
  
}`,
            python: `def firstUniqChar(s):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int firstUniqChar(String s) {
        // Write your solution here
        return -1;
    }
}`,
        },
        expectedOutput: {
            javascript: "0\\n2\\n-1",
            python: "0\\n2\\n-1",
            java: "0\\n2\\n-1",
        },
    },

    "intersection-of-two-arrays": {
        id: "intersection-of-two-arrays",
        title: "Intersection of Two Arrays",
        difficulty: "Easy",
        category: "Array • Hash Table • Two Pointers • Sorting • Binary Search",
        description: {
            text: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.",
            notes: [],
        },
        examples: [
            { "input": "nums1 = [1,2,2,1], nums2 = [2,2]", "output": "[2]" },
            { "input": "nums1 = [4,9,5], nums2 = [9,4,9,8,4]", "output": "[4,9]" },
        ],
        constraints: ["1 ≤ nums1.length, nums2.length ≤ 1000", "0 ≤ nums1[i], nums2[i] ≤ 1000"],
        starterCode: {
            javascript: `function intersection(nums1, nums2) {
  // Write your solution here
  
}`,
            python: `def intersection(nums1, nums2):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        // Write your solution here
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[2]\\n[4,9]",
            python: "[2]\\n[4, 9]",
            java: "[2]\\n[4, 9]",
        },
    },

    "intersection-of-two-arrays-ii": {
        id: "intersection-of-two-arrays-ii",
        title: "Intersection of Two Arrays II",
        difficulty: "Easy",
        category: "Array • Hash Table • Sorting • Two Pointers • Binary Search",
        description: {
            text: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.",
            notes: [],
        },
        examples: [
            { "input": "nums1 = [1,2,2,1], nums2 = [2,2]", "output": "[2,2]" },
        ],
        constraints: ["1 ≤ nums1.length, nums2.length ≤ 1000", "0 ≤ nums1[i], nums2[i] ≤ 1000"],
        starterCode: {
            javascript: `function intersect(nums1, nums2) {
  // Write your solution here
  
}`,
            python: `def intersect(nums1, nums2):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        // Write your solution here
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[2,2]",
            python: "[2, 2]",
            java: "[2, 2]",
        },
    },

    "isomorphic-strings": {
        id: "isomorphic-strings",
        title: "Isomorphic Strings",
        difficulty: "Easy",
        category: "String • Hash Table • Array",
        description: {
            text: "Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t.",
            notes: ["All occurrences of a character must be replaced with another character while preserving the character order. No two characters may map to the same character, but a character may map to itself."],
        },
        examples: [
            { "input": "s = \"egg\", t = \"add\"", "output": "true" },
            { "input": "s = \"foo\", t = \"bar\"", "output": "false" },
            { "input": "s = \"paper\", t = \"title\"", "output": "true" },
        ],
        constraints: ["1 ≤ s.length ≤ 5 * 10⁴", "t.length == s.length", "s and t consist of any valid ascii character."],
        starterCode: {
            javascript: `function isIsomorphic(s, t) {
  // Write your solution here
  
}`,
            python: `def isIsomorphic(s, t):
    # Write your solution here
    pass`,
            java: `class Solution {
    public boolean isIsomorphic(String s, String t) {
        // Write your solution here
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse\\ntrue",
            python: "True\\nFalse\\nTrue",
            java: "true\\nfalse\\ntrue",
        },
    },

    "word-pattern": {
        id: "word-pattern",
        title: "Word Pattern",
        difficulty: "Easy",
        category: "String • Hash Table",
        description: {
            text: "Given a pattern and a string s, find if s follows the same pattern. Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.",
            notes: [],
        },
        examples: [
            { "input": "pattern = \"abba\", s = \"dog cat cat dog\"", "output": "true" },
            { "input": "pattern = \"abba\", s = \"dog cat cat fish\"", "output": "false" },
        ],
        constraints: ["1 ≤ pattern.length ≤ 300", "pattern consists of lowercase English letters.", "1 ≤ s.length ≤ 3000", "s contains lowercase English letters and spaces ' '."],
        starterCode: {
            javascript: `function wordPattern(pattern, s) {
  // Write your solution here
  
}`,
            python: `def wordPattern(pattern, s):
    # Write your solution here
    pass`,
            java: `class Solution {
    public boolean wordPattern(String pattern, String s) {
        // Write your solution here
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse",
            python: "True\\nFalse",
            java: "true\\nfalse",
        },
    },

    "happy-number": {
        id: "happy-number",
        title: "Happy Number",
        difficulty: "Easy",
        category: "Math • Hash Table • Two Pointers • Cycle Detection",
        description: {
            text: "Write an algorithm to determine if a number n is happy. A happy number is a number defined by a process where you replace the number by the sum of the squares of its digits, and repeat until it equals 1.",
            notes: ["If it loops endlessly in a cycle which does not include 1, the number is unhappy."],
        },
        examples: [
            { "input": "n = 19", "output": "true" },
            { "input": "n = 2", "output": "false" },
        ],
        constraints: ["1 ≤ n ≤ 2³¹ - 1"],
        starterCode: {
            javascript: `function isHappy(n) {
  // Write your solution here
  
}`,
            python: `def isHappy(n):
    # Write your solution here
    pass`,
            java: `class Solution {
    public boolean isHappy(int n) {
        // Write your solution here
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse",
            python: "True\\nFalse",
            java: "true\\nfalse",
        },
    },

    "subarray-sums-divisible-by-k": {
        id: "subarray-sums-divisible-by-k",
        title: "Subarray Sums Divisible by K",
        difficulty: "Medium",
        category: "Array • Hash Table • Prefix Sum • Math",
        description: {
            text: "Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.",
            notes: [],
        },
        examples: [
            { "input": "nums = [4,5,0,-2,-3,1], k = 5", "output": "7" },
        ],
        constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-10⁴ ≤ nums[i] ≤ 10⁴", "2 ≤ k ≤ 10⁴"],
        starterCode: {
            javascript: `function subarraysDivByK(nums, k) {
  // Write your solution here
  
}`,
            python: `def subarraysDivByK(nums, k):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "7",
            python: "7",
            java: "7",
        },
    },

    "find-all-anagrams-in-a-string": {
        id: "find-all-anagrams-in-a-string",
        title: "Find All Anagrams in a String",
        difficulty: "Medium",
        category: "String • Sliding Window • Hash Table • Two Pointers",
        description: {
            text: "Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.",
            notes: [],
        },
        examples: [
            { "input": "s = \"cbaebabacd\", p = \"abc\"", "output": "[0,6]" },
        ],
        constraints: ["1 ≤ s.length, p.length ≤ 3 * 10⁴", "s and p consist of lowercase English letters."],
        starterCode: {
            javascript: `function findAnagrams(s, p) {
  // Write your solution here
  
}`,
            python: `def findAnagrams(s, p):
    # Write your solution here
    pass`,
            java: `class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[0,6]",
            python: "[0, 6]",
            java: "[0, 6]",
        },
    },

    // ==========================================
    // STRING MANIPULATION PROBLEMS
    // ==========================================

    "longest-common-prefix": {
        id: "longest-common-prefix",
        title: "Longest Common Prefix",
        difficulty: "Easy",
        category: "String • Trie • Array • String Matching • Sorting",
        description: {
            text: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string \"\".",
            notes: [],
        },
        examples: [
            { "input": "strs = [\"flower\",\"flow\",\"flight\"]", "output": "\"fl\"" },
            { "input": "strs = [\"dog\",\"racecar\",\"car\"]", "output": "\"\"" },
        ],
        constraints: ["1 ≤ strs.length ≤ 200", "0 ≤ strs[i].length ≤ 200", "strs[i] consists of only lowercase English letters."],
        starterCode: {
            javascript: `function longestCommonPrefix(strs) {
  // Write your solution here
  
}`,
            python: `def longestCommonPrefix(strs):
    # Write your solution here
    pass`,
            java: `class Solution {
    public String longestCommonPrefix(String[] strs) {
        // Write your solution here
        return "";
    }
}`,
        },
        expectedOutput: {
            javascript: "fl\\n",
            python: "fl\\n",
            java: "fl\\n",
        },
    },

    "roman-to-integer": {
        id: "roman-to-integer",
        title: "Roman to Integer",
        difficulty: "Easy",
        category: "String • Hash Table • Math • Array",
        description: {
            text: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Given a roman numeral, convert it to an integer.",
            notes: [],
        },
        examples: [
            { "input": "s = \"III\"", "output": "3" },
            { "input": "s = \"LVIII\"", "output": "58" },
            { "input": "s = \"MCMXCIV\"", "output": "1994" },
        ],
        constraints: ["1 ≤ s.length ≤ 15", "s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')."],
        starterCode: {
            javascript: `function romanToInt(s) {
  // Write your solution here
  
}`,
            python: `def romanToInt(s):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int romanToInt(String s) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "3\\n58\\n1994",
            python: "3\\n58\\n1994",
            java: "3\\n58\\n1994",
        },
    },

    "integer-to-roman": {
        id: "integer-to-roman",
        title: "Integer to Roman",
        difficulty: "Medium",
        category: "String • Math • Greedy • Hash Table",
        description: {
            text: "Given an integer, convert it to a roman numeral string representation.",
            notes: [],
        },
        examples: [
            { "input": "num = 3749", "output": "\"MMMDCCXLIX\"" },
        ],
        constraints: ["1 ≤ num ≤ 3999"],
        starterCode: {
            javascript: `function intToRoman(num) {
  // Write your solution here
  
}`,
            python: `def intToRoman(num):
    # Write your solution here
    pass`,
            java: `class Solution {
    public String intToRoman(int num) {
        // Write your solution here
        return "";
    }
}`,
        },
        expectedOutput: {
            javascript: "MMMDCCXLIX",
            python: "MMMDCCXLIX",
            java: "MMMDCCXLIX",
        },
    },

    "string-to-integer-atoi": {
        id: "string-to-integer-atoi",
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        category: "String • Simulation",
        description: {
            text: "Implement the myAtoi(string s) function, which converts a string into a 32-bit signed integer (similar to C/C++'s atoi function).",
            notes: ["Whitespace: Ignore any leading whitespace.", "Signedness: Check if the next character is '-' or '+'.", "Conversion: Read in digits until a non-digit character is encountered.", "Rounding: If the integer is out of the 32-bit signed integer range, clamp it."],
        },
        examples: [
            { "input": "s = \"42\"", "output": "42" },
            { "input": "s = \" -042\"", "output": "-42" },
            { "input": "s = \"1337c0d3\"", "output": "1337" },
        ],
        constraints: ["0 ≤ s.length ≤ 200", "s consists of English letters, digits, spaces, '+', '-', and '.'."],
        starterCode: {
            javascript: `function myAtoi(s) {
  // Write your solution here
  
}`,
            python: `def myAtoi(s):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int myAtoi(String s) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "42\\n-42\\n1337",
            python: "42\\n-42\\n1337",
            java: "42\\n-42\\n1337",
        },
    },

    "valid-number": {
        id: "valid-number",
        title: "Valid Number",
        difficulty: "Hard",
        category: "String • Simulation • Finite State Machine",
        description: {
            text: "Given a string s, return true if s is a valid number.",
            notes: ["A valid number can be split into an optional sign, followed by a decimal number or an integer, optionally followed by an exponent character 'e' or 'E' and an integer."],
        },
        examples: [
            { "input": "s = \"0\"", "output": "true" },
            { "input": "s = \"e\"", "output": "false" },
            { "input": "s = \".\"", "output": "false" },
        ],
        constraints: ["1 ≤ s.length ≤ 20", "s consists of English letters, digits, '.', '+', and '-'."],
        starterCode: {
            javascript: `function isValidNumber(s) {
  // Write your solution here
  
}`,
            python: `def isValidNumber(s):
    # Write your solution here
    pass`,
            java: `class Solution {
    public boolean isValidNumber(String s) {
        // Write your solution here
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse\\nfalse",
            python: "True\\nFalse\\nFalse",
            java: "true\\nfalse\\nfalse",
        },
    },

    "reverse-words-in-a-string": {
        id: "reverse-words-in-a-string",
        title: "Reverse Words in a String",
        difficulty: "Medium",
        category: "String • Two Pointers",
        description: {
            text: "Given an input string s, reverse the order of the words.",
            notes: ["A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.", "Return a string of the words in reverse order concatenated by a single space."],
        },
        examples: [
            { "input": "s = \"the sky is blue\"", "output": "\"blue is sky the\"" },
            { "input": "s = \"  hello world  \"", "output": "\"world hello\"" },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁴", "s contains English letters, digits, and spaces."],
        starterCode: {
            javascript: `function reverseWords(s) {
  // Write your solution here
  
}`,
            python: `def reverseWords(s):
    # Write your solution here
    pass`,
            java: `class Solution {
    public String reverseWords(String s) {
        // Write your solution here
        return "";
    }
}`,
        },
        expectedOutput: {
            javascript: "blue is sky the\\nworld hello",
            python: "blue is sky the\\nworld hello",
            java: "blue is sky the\\nworld hello",
        },
    },

    "simplify-path": {
        id: "simplify-path",
        title: "Simplify Path",
        difficulty: "Medium",
        category: "String • Stack • Array",
        description: {
            text: "Given an absolute path for a Unix-style file system, which begins with a slash '/', transform this path into its simplified canonical path.",
            notes: ["The path is simplified by rules: Period '.' refers to current directory, double period '..' moves up a directory, multiple slashes are replaced by a single slash."],
        },
        examples: [
            { "input": "/home/", "output": "\"/home\"" },
            { "input": "/home//foo/", "output": "\"/home/foo\"" },
            { "input": "/../", "output": "\"/\"" },
        ],
        constraints: ["1 ≤ path.length ≤ 3000", "path consists of English letters, digits, '.', '/' or '_'."],
        starterCode: {
            javascript: `function simplifyPath(path) {
  // Write your solution here
  
}`,
            python: `def simplifyPath(path):
    # Write your solution here
    pass`,
            java: `class Solution {
    public String simplifyPath(String path) {
        // Write your solution here
        return "";
    }
}`,
        },
        expectedOutput: {
            javascript: "/home\\n/home/foo\\n/",
            python: "/home\\n/home/foo\\n/",
            java: "/home\\n/home/foo\\n/",
        },
    },

    // ==========================================
    // STACK & QUEUE PROBLEMS
    // ==========================================

    "implement-queue-using-stacks": {
        id: "implement-queue-using-stacks",
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
        category: "Stack • Queue • Design",
        description: {
            text: "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).",
            notes: [],
        },
        examples: [
            { "input": "[\"MyQueue\", \"push\", \"push\", \"peek\", \"pop\", \"empty\"]\\n[[], [1], [2], [], [], []]", "output": "[null, null, null, 1, 1, false]" },
        ],
        constraints: ["1 ≤ x ≤ 9", "At most 100 calls will be made to push, pop, peek, and empty.", "All calls to pop and peek are valid."],
        starterCode: {
            javascript: `class MyQueue {
  constructor() {}
  push(x) {}
  pop() {}
  peek() {}
  empty() {}
}`,
            python: `class MyQueue:
    def __init__(self):
        pass
    def push(self, x: int) -> None:
        pass
    def pop(self) -> int:
        pass
    def peek(self) -> int:
        pass
    def empty(self) -> bool:
        pass`,
            java: `class MyQueue {
    public MyQueue() {}
    public void push(int x) {}
    public int pop() { return 0; }
    public int peek() { return 0; }
    public boolean empty() { return false; }
}`,
        },
        expectedOutput: {
            javascript: "[null, null, null, 1, 1, false]",
            python: "[None, None, None, 1, 1, False]",
            java: "[null, null, null, 1, 1, false]",
        },
    },

    "implement-stack-using-queues": {
        id: "implement-stack-using-queues",
        title: "Implement Stack using Queues",
        difficulty: "Easy",
        category: "Stack • Queue • Design",
        description: {
            text: "Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).",
            notes: [],
        },
        examples: [
            { "input": "[\"MyStack\", \"push\", \"push\", \"top\", \"pop\", \"empty\"]\\n[[], [1], [2], [], [], []]", "output": "[null, null, null, 2, 2, false]" },
        ],
        constraints: ["1 ≤ x ≤ 9", "At most 100 calls will be made to push, pop, top, and empty.", "All calls to pop and top are valid."],
        starterCode: {
            javascript: `class MyStack {
  constructor() {}
  push(x) {}
  pop() {}
  top() {}
  empty() {}
}`,
            python: `class MyStack:
    def __init__(self):
        pass
    def push(self, x: int) -> None:
        pass
    def pop(self) -> int:
        pass
    def top(self) -> int:
        pass
    def empty(self) -> bool:
        pass`,
            java: `class MyStack {
    public MyStack() {}
    public void push(int x) {}
    public int pop() { return 0; }
    public int top() { return 0; }
    public boolean empty() { return false; }
}`,
        },
        expectedOutput: {
            javascript: "[null, null, null, 2, 2, false]",
            python: "[None, None, None, 2, 2, False]",
            java: "[null, null, null, 2, 2, false]",
        },
    },

    "valid-parenthesis-string": {
        id: "valid-parenthesis-string",
        title: "Valid Parenthesis String",
        difficulty: "Medium",
        category: "String • Stack • Greedy • Dynamic Programming",
        description: {
            text: "Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.",
            notes: ["Any left parenthesis '(' must have a corresponding right parenthesis ')'.", "Any right parenthesis ')' must have a corresponding left parenthesis '('.", "Left parenthesis '(' must go before the corresponding right parenthesis ')'.", "'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string \"\"."],
        },
        examples: [
            { "input": "s = \"()\"", "output": "true" },
            { "input": "s = \"(*)\"", "output": "true" },
            { "input": "s = \"(*))\"", "output": "true" },
        ],
        constraints: ["1 ≤ s.length ≤ 100", "s contains only '(', ')' and '*'."],
        starterCode: {
            javascript: `function checkValidString(s) {
  // Write your solution here
  
}`,
            python: `def checkValidString(s):
    # Write your solution here
    pass`,
            java: `class Solution {
    public boolean checkValidString(String s) {
        // Write your solution here
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\ntrue\\ntrue",
            python: "True\\nTrue\\nTrue",
            java: "true\\ntrue\\ntrue",
        },
    },

    "next-greater-element-i": {
        id: "next-greater-element-i",
        title: "Next Greater Element I",
        difficulty: "Easy",
        category: "Array • Hash Table • Monotonic Stack • Stack",
        description: {
            text: "The next greater element of some element x in an array is the first greater element that is to the right of x in the same array. Find all the next greater elements for nums1 values inside nums2.",
            notes: [],
        },
        examples: [
            { "input": "nums1 = [4,1,2], nums2 = [1,3,4,2]", "output": "[-1,3,-1]" },
        ],
        constraints: ["1 ≤ nums1.length ≤ nums2.length ≤ 1000", "0 ≤ nums1[i], nums2[i] ≤ 10⁴", "All integers in nums1 and nums2 are unique."],
        starterCode: {
            javascript: `function nextGreaterElement(nums1, nums2) {
  // Write your solution here
  
}`,
            python: `def nextGreaterElement(nums1, nums2):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        // Write your solution here
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[-1,3,-1]",
            python: "[-1, 3, -1]",
            java: "[-1, 3, -1]",
        },
    },

    "next-greater-element-ii": {
        id: "next-greater-element-ii",
        title: "Next Greater Element II",
        difficulty: "Medium",
        category: "Array • Monotonic Stack • Stack",
        description: {
            text: "Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.",
            notes: [],
        },
        examples: [
            { "input": "nums = [1,2,1]", "output": "[2,-1,2]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹"],
        starterCode: {
            javascript: `function nextGreaterElements(nums) {
  // Write your solution here
  
}`,
            python: `def nextGreaterElements(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int[] nextGreaterElements(int[] nums) {
        // Write your solution here
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[2,-1,2]",
            python: "[2, -1, 2]",
            java: "[2, -1, 2]",
        },
    },

    "largest-rectangle-in-histogram": {
        id: "largest-rectangle-in-histogram",
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
        category: "Array • Monotonic Stack • Stack",
        description: {
            text: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, find the area of the largest rectangle in the histogram.",
            notes: [],
        },
        examples: [
            { "input": "heights = [2,1,5,6,2,3]", "output": "10" },
        ],
        constraints: ["1 ≤ heights.length ≤ 10⁵", "0 ≤ heights[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function largestRectangleArea(heights) {
  // Write your solution here
  
}`,
            python: `def largestRectangleArea(heights):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int largestRectangleArea(int[] heights) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "10",
            python: "10",
            java: "10",
        },
    },

    // ==========================================
    // BINARY SEARCH PROBLEMS
    // ==========================================

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
            { "input": "nums = [1,3,5,6], target = 5", "output": "2" },
            { "input": "nums = [1,3,5,6], target = 2", "output": "1" },
            { "input": "nums = [1,3,5,6], target = 7", "output": "4" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁴ ≤ nums[i] ≤ 10⁴", "nums contains distinct values sorted in ascending order.", "-10⁴ ≤ target ≤ 10⁴"],
        starterCode: {
            javascript: `function searchInsert(nums, target) {
  // Write your solution here
  
}`,
            python: `def searchInsert(nums, target):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int searchInsert(int[] nums, int target) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2\\n1\\n4",
            python: "2\\n1\\n4",
            java: "2\\n1\\n4",
        },
    },

    "find-first-and-last-position-of-element-in-sorted-array": {
        id: "find-first-and-last-position-of-element-in-sorted-array",
        title: "Find First and Last Position of Element in Sorted Array",
        difficulty: "Medium",
        category: "Array • Binary Search",
        description: {
            text: "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1].",
            notes: ["You must write an algorithm with O(log n) runtime complexity."],
        },
        examples: [
            { "input": "nums = [5,7,7,8,8,10], target = 8", "output": "[3,4]" },
            { "input": "nums = [5,7,7,8,8,10], target = 6", "output": "[-1,-1]" },
        ],
        constraints: ["0 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹", "nums is a non-decreasing array.", "-10⁹ ≤ target ≤ 10⁹"],
        starterCode: {
            javascript: `function searchRange(nums, target) {
  // Write your solution here
  
}`,
            python: `def searchRange(nums, target):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int[] searchRange(int[] nums, int target) {
        // Write your solution here
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[3,4]\\n[-1,-1]",
            python: "[3, 4]\\n[-1, -1]",
            java: "[3, 4]\\n[-1, -1]",
        },
    },

    "search-in-rotated-sorted-array": {
        id: "search-in-rotated-sorted-array",
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        category: "Array • Binary Search",
        description: {
            text: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
            notes: ["You must write an algorithm with O(log n) runtime complexity."],
        },
        examples: [
            { "input": "nums = [4,5,6,7,0,1,2], target = 0", "output": "4" },
            { "input": "nums = [4,5,6,7,0,1,2], target = 3", "output": "-1" },
        ],
        constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴", "All values of nums are unique.", "nums is an ascending array that is possibly rotated.", "-10⁴ ≤ target ≤ 10⁴"],
        starterCode: {
            javascript: `function search(nums, target) {
  // Write your solution here
  
}`,
            python: `def search(nums, target):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`,
        },
        expectedOutput: {
            javascript: "4\\n-1",
            python: "4\\n-1",
            java: "4\\n-1",
        },
    },

    "search-in-rotated-sorted-array-ii": {
        id: "search-in-rotated-sorted-array-ii",
        title: "Search in Rotated Sorted Array II",
        difficulty: "Medium",
        category: "Array • Binary Search • Two Pointers",
        description: {
            text: "This problem is similar to Search in Rotated Sorted Array, but nums may contain duplicates. Return true if target is in nums, or false if it is not.",
            notes: [],
        },
        examples: [
            { "input": "nums = [2,5,6,0,0,1,2], target = 0", "output": "true" },
            { "input": "nums = [2,5,6,0,0,1,2], target = 3", "output": "false" },
        ],
        constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴", "nums is rotated but may contain duplicates.", "-10⁴ ≤ target ≤ 10⁴"],
        starterCode: {
            javascript: `function search(nums, target) {
  // Write your solution here
  
}`,
            python: `def search(nums, target):
    # Write your solution here
    pass`,
            java: `class Solution {
    public boolean search(int[] nums, int target) {
        // Write your solution here
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\\nfalse",
            python: "True\\nFalse",
            java: "true\\nfalse",
        },
    },

    "peak-index-in-a-mountain-array": {
        id: "peak-index-in-a-mountain-array",
        title: "Peak Index in a Mountain Array",
        difficulty: "Medium",
        category: "Array • Binary Search",
        description: {
            text: "An array arr is a mountain if it increases to a peak element then decreases. Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].",
            notes: ["You must solve it in O(log n) time complexity."],
        },
        examples: [
            { "input": "arr = [0,1,0]", "output": "1" },
            { "input": "arr = [0,2,1,0]", "output": "1" },
            { "input": "arr = [0,10,5,2]", "output": "1" },
        ],
        constraints: ["3 ≤ arr.length ≤ 10⁵", "0 ≤ arr[i] ≤ 10⁶", "arr is guaranteed to be a mountain array."],
        starterCode: {
            javascript: `function peakIndexInMountainArray(arr) {
  // Write your solution here
  
}`,
            python: `def peakIndexInMountainArray(arr):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int peakIndexInMountainArray(int[] arr) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "1\\n1\\n1",
            python: "1\\n1\\n1",
            java: "1\\n1\\n1",
        },
    },

    "find-peak-element": {
        id: "find-peak-element",
        title: "Find Peak Element",
        difficulty: "Medium",
        category: "Array • Binary Search",
        description: {
            text: "A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.",
            notes: ["You must write an algorithm that runs in O(log n) time."],
        },
        examples: [
            { "input": "nums = [1,2,3,1]", "output": "2", "explanation": "3 is a peak element and your function should return the index number 2." },
        ],
        constraints: ["1 ≤ nums.length ≤ 1000", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1", "nums[i] != nums[i + 1] for all valid i."],
        starterCode: {
            javascript: `function findPeakElement(nums) {
  // Write your solution here
  
}`,
            python: `def findPeakElement(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int findPeakElement(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2",
            python: "2",
            java: "2",
        },
    },

    "median-of-two-sorted-arrays": {
        id: "median-of-two-sorted-arrays",
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        category: "Array • Binary Search • Divide and Conquer • Two Pointers",
        description: {
            text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
            notes: ["The overall run time complexity should be O(log (m+n))."],
        },
        examples: [
            { "input": "nums1 = [1,3], nums2 = [2]", "output": "2.00000" },
            { "input": "nums1 = [1,2], nums2 = [3,4]", "output": "2.50000" },
        ],
        constraints: ["nums1.length == m", "nums2.length == n", "0 ≤ m, n ≤ 1000", "1 ≤ m + n ≤ 2000", "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶"],
        starterCode: {
            javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here
  
}`,
            python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass`,
            java: `class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        return 0.0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2.00000\\n2.50000",
            python: "2.0\\n2.5",
            java: "2.0\\n2.5",
        },
    },

    // ==========================================
    // MATRIX PROBLEMS
    // ==========================================

    "spiral-matrix-ii": {
        id: "spiral-matrix-ii",
        title: "Spiral Matrix II",
        difficulty: "Medium",
        category: "Array • Matrix • Simulation",
        description: {
            text: "Given a positive integer n, generate an n x n matrix filled with elements from 1 to n² in spiral order.",
            notes: [],
        },
        examples: [
            { "input": "n = 3", "output": "[[1,2,3],[8,9,4],[7,6,5]]" },
        ],
        constraints: ["1 ≤ n ≤ 20"],
        starterCode: {
            javascript: `function generateMatrix(n) {
  // Write your solution here
  
}`,
            python: `def generateMatrix(n):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int[][] generateMatrix(int n) {
        // Write your solution here
        return new int[0][0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[[1,2,3],[8,9,4],[7,6,5]]",
            python: "[[1, 2, 3], [8, 9, 4], [7, 6, 5]]",
            java: "[[1, 2, 3], [8, 9, 4], [7, 6, 5]]",
        },
    },

    "game-of-life": {
        id: "game-of-life",
        title: "Game of Life",
        difficulty: "Medium",
        category: "Array • Matrix • Simulation",
        description: {
            text: "According to John Conway's Game of Life, cells interact with neighbors to transition from live (1) or dead (0). Given a current board state, compute the next state in place.",
            notes: [],
        },
        examples: [
            { "input": "board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]", "output": "[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]" },
        ],
        constraints: ["m == board.length", "n == board[i].length", "1 ≤ m, n ≤ 25", "board[i][j] is 0 or 1."],
        starterCode: {
            javascript: `function gameOfLife(board) {
  // Write your solution here
  
}`,
            python: `def gameOfLife(board):
    # Write your solution here
    pass`,
            java: `class Solution {
    public void gameOfLife(int[][] board) {
        // Write your solution here
    }
}`,
        },
        expectedOutput: {
            javascript: "[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]",
            python: "[[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]]",
            java: "[[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]]",
        },
    },

    // ==========================================
    // BACKTRACKING PROBLEMS
    // ==========================================

    "subsets": {
        id: "subsets",
        title: "Subsets",
        difficulty: "Medium",
        category: "Array • Backtracking • Bit Manipulation • Recursion",
        description: {
            text: "Given an integer array nums of unique elements, return all possible subsets (the power set).",
            notes: ["The solution set must not contain duplicate subsets. Return the solution in any order."],
        },
        examples: [
            { "input": "nums = [1,2,3]", "output": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10", "All the numbers of nums are unique."],
        starterCode: {
            javascript: `function subsets(nums) {
  // Write your solution here
  
}`,
            python: `def subsets(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
            python: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]",
            java: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]",
        },
    },

    "subsets-ii": {
        id: "subsets-ii",
        title: "Subsets II",
        difficulty: "Medium",
        category: "Array • Backtracking • Sorting • Bit Manipulation",
        description: {
            text: "Given an integer array nums that may contain duplicates, return all possible subsets (the power set).",
            notes: ["The solution set must not contain duplicate subsets. Return the solution in any order."],
        },
        examples: [
            { "input": "nums = [1,2,2]", "output": "[[],[1],[1,2],[1,2,2],[2],[2,2]]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10"],
        starterCode: {
            javascript: `function subsetsWithDup(nums) {
  // Write your solution here
  
}`,
            python: `def subsetsWithDup(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[[],[1],[1,2],[1,2,2],[2],[2,2]]",
            python: "[[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]",
            java: "[[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]",
        },
    },

    "permutations": {
        id: "permutations",
        title: "Permutations",
        difficulty: "Medium",
        category: "Array • Backtracking • Recursion",
        description: {
            text: "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
            notes: [],
        },
        examples: [
            { "input": "nums = [1,2,3]", "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 6", "-10 ≤ nums[i] ≤ 10", "All the integers of nums are unique."],
        starterCode: {
            javascript: `function permute(nums) {
  // Write your solution here
  
}`,
            python: `def permute(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public List<List<Integer>> permute(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
            python: "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]",
            java: "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]",
        },
    },

    "permutations-ii": {
        id: "permutations-ii",
        title: "Permutations II",
        difficulty: "Medium",
        category: "Array • Backtracking • Sorting • Recursion",
        description: {
            text: "Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.",
            notes: [],
        },
        examples: [
            { "input": "nums = [1,1,2]", "output": "[[1,1,2],[1,2,1],[2,1,1]]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 8", "-10 ≤ nums[i] ≤ 10"],
        starterCode: {
            javascript: `function permuteUnique(nums) {
  // Write your solution here
  
}`,
            python: `def permuteUnique(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[[1,1,2],[1,2,1],[2,1,1]]",
            python: "[[1, 1, 2], [1, 2, 1], [2, 1, 1]]",
            java: "[[1, 1, 2], [1, 2, 1], [2, 1, 1]]",
        },
    },

    "combination-sum-ii": {
        id: "combination-sum-ii",
        title: "Combination Sum II",
        difficulty: "Medium",
        category: "Array • Backtracking • Sorting • Recursion",
        description: {
            text: "Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.",
            notes: ["Each number in candidates may only be used once in the combination.", "The solution set must not contain duplicate combinations."],
        },
        examples: [
            { "input": "candidates = [10,1,2,7,6,1,5], target = 8", "output": "[[1,1,6],[1,2,5],[1,7],[2,6]]" },
        ],
        constraints: ["1 ≤ candidates.length ≤ 100", "1 ≤ candidates[i] ≤ 50", "1 ≤ target ≤ 30"],
        starterCode: {
            javascript: `function combinationSum2(candidates, target) {
  // Write your solution here
  
}`,
            python: `def combinationSum2(candidates, target):
    # Write your solution here
    pass`,
            java: `class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[[1,1,6],[1,2,5],[1,7],[2,6]]",
            python: "[[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]",
            java: "[[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]",
        },
    },

    "letter-combinations-of-a-phone-number": {
        id: "letter-combinations-of-a-phone-number",
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        category: "String • Backtracking • Hash Table • Recursion",
        description: {
            text: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.",
            notes: ["A mapping of digits to letters (just like on the telephone buttons) is provided below. Note that 1 does not map to any letters."],
        },
        examples: [
            { "input": "digits = \"23\"", "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]" },
        ],
        constraints: ["0 ≤ digits.length ≤ 4", "digits[i] is a digit in the range ['2', '9']."],
        starterCode: {
            javascript: `function letterCombinations(digits) {
  // Write your solution here
  
}`,
            python: `def letterCombinations(digits):
    # Write your solution here
    pass`,
            java: `class Solution {
    public List<String> letterCombinations(String digits) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]",
            python: "['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']",
            java: "[ad, ae, af, bd, be, bf, cd, ce, cf]",
        },
    },

    "n-queens": {
        id: "n-queens",
        title: "N-Queens",
        difficulty: "Hard",
        category: "Array • Backtracking • Hash Table",
        description: {
            text: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle.",
            notes: [],
        },
        examples: [
            { "input": "n = 4", "output": "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]" },
        ],
        constraints: ["1 ≤ n ≤ 9"],
        starterCode: {
            javascript: `function solveNQueens(n) {
  // Write your solution here
  
}`,
            python: `def solveNQueens(n):
    # Write your solution here
    pass`,
            java: `class Solution {
    public List<List<String>> solveNQueens(int n) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]",
            python: "[['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]",
            java: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]",
        },
    },

    "word-search": {
        id: "word-search",
        title: "Word Search",
        difficulty: "Medium",
        category: "Array • Backtracking • Matrix • Depth-First Search",
        description: {
            text: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
            notes: ["The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once."],
        },
        examples: [
            { "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"", "output": "true" },
        ],
        constraints: ["m == board.length", "n = board[i].length", "1 ≤ m, n ≤ 6", "1 ≤ word.length ≤ 15"],
        starterCode: {
            javascript: `function exist(board, word) {
  // Write your solution here
  
}`,
            python: `def exist(board, word):
    # Write your solution here
    pass`,
            java: `class Solution {
    public boolean exist(char[][] board, String word) {
        // Write your solution here
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true",
            python: "True",
            java: "true",
        },
    },

    // ==========================================
    // BIT MANIPULATION PROBLEMS
    // ==========================================

    "number-of-one-bits": {
        id: "number-of-one-bits",
        title: "Number of 1 Bits",
        difficulty: "Easy",
        category: "Bit Manipulation • Math",
        description: {
            text: "Given a positive integer n, write a function that returns the number of set bits it has (also known as the Hamming weight).",
            notes: [],
        },
        examples: [
            { "input": "n = 11", "output": "3", "explanation": "The input binary string 1011 has a total of three set bits." },
        ],
        constraints: ["1 ≤ n ≤ 2³¹ - 1"],
        starterCode: {
            javascript: `function hammingWeight(n) {
  // Write your solution here
  
}`,
            python: `def hammingWeight(n):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int hammingWeight(int n) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "3",
            python: "3",
            java: "3",
        },
    },

    "reverse-bits": {
        id: "reverse-bits",
        title: "Reverse Bits",
        difficulty: "Easy",
        category: "Bit Manipulation • Divide and Conquer",
        description: {
            text: "Reverse bits of a given 32-bit unsigned integer.",
            notes: [],
        },
        examples: [
            { "input": "n = 00000010100101000001111010011100", "output": "964176192 (00111001011110000010100101000000)" },
        ],
        constraints: ["n must be a 32-bit integer"],
        starterCode: {
            javascript: `function reverseBits(n) {
  // Write your solution here
  
}`,
            python: `def reverseBits(n):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int reverseBits(int n) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "964176192",
            python: "964176192",
            java: "964176192",
        },
    },

    // ==========================================
    // DYNAMIC PROGRAMMING PROBLEMS
    // ==========================================

    "longest-common-subsequence": {
        id: "longest-common-subsequence",
        title: "Longest Common Subsequence",
        difficulty: "Medium",
        category: "String • Dynamic Programming • Memoization",
        description: {
            text: "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
            notes: [],
        },
        examples: [
            { "input": "text1 = \"abcde\", text2 = \"ace\"", "output": "3", "explanation": "The longest common subsequence is \"ace\" and its length is 3." },
        ],
        constraints: ["1 ≤ text1.length, text2.length ≤ 1000", "text1 and text2 consist of lowercase English characters only."],
        starterCode: {
            javascript: `function longestCommonSubsequence(text1, text2) {
  // Write your solution here
  
}`,
            python: `def longestCommonSubsequence(text1, text2):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "3",
            python: "3",
            java: "3",
        },
    },

    "edit-distance": {
        id: "edit-distance",
        title: "Edit Distance",
        difficulty: "Hard",
        category: "String • Dynamic Programming • Memoization",
        description: {
            text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
            notes: ["You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character."],
        },
        examples: [
            { "input": "word1 = \"horse\", word2 = \"ros\"", "output": "3", "explanation": "horse -> rorse (replace 'h' with 'r'), rorse -> rose (remove 'r'), rose -> ros (remove 'e')." },
        ],
        constraints: ["0 ≤ word1.length, word2.length ≤ 500", "word1 and word2 consist of lowercase English letters."],
        starterCode: {
            javascript: `function minDistance(word1, word2) {
  // Write your solution here
  
}`,
            python: `def minDistance(word1, word2):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int minDistance(String word1, String word2) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "3",
            python: "3",
            java: "3",
        },
    },

    "unique-paths": {
        id: "unique-paths",
        title: "Unique Paths",
        difficulty: "Medium",
        category: "Dynamic Programming • Math • Combinatorics",
        description: {
            text: "There is a robot on an m x n grid. The robot is initially located at the top-left corner. The robot tries to move to the bottom-right corner. The robot can only move either down or right at any point in time.",
            notes: ["Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner."],
        },
        examples: [
            { "input": "m = 3, n = 7", "output": "28" },
        ],
        constraints: ["1 ≤ m, n ≤ 100"],
        starterCode: {
            javascript: `function uniquePaths(m, n) {
  // Write your solution here
  
}`,
            python: `def uniquePaths(m, n):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int uniquePaths(int m, int n) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "28",
            python: "28",
            java: "28",
        },
    },

    "unique-paths-ii": {
        id: "unique-paths-ii",
        title: "Unique Paths II",
        difficulty: "Medium",
        category: "Array • Matrix • Dynamic Programming • Memoization",
        description: {
            text: "You are given an m x n integer grid obstacleGrid. A robot is initially located at the top-left corner. The robot tries to move to the bottom-right corner. The robot can only move either down or right at any point in time. An obstacle and space are marked as 1 and 0 respectively in the grid.",
            notes: [],
        },
        examples: [
            { "input": "obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]", "output": "2" },
        ],
        constraints: ["m == obstacleGrid.length", "n == obstacleGrid[i].length", "1 ≤ m, n ≤ 100", "obstacleGrid[i][j] is 0 or 1."],
        starterCode: {
            javascript: `function uniquePathsWithObstacles(obstacleGrid) {
  // Write your solution here
  
}`,
            python: `def uniquePathsWithObstacles(obstacleGrid):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2",
            python: "2",
            java: "2",
        },
    },

    "minimum-path-sum": {
        id: "minimum-path-sum",
        title: "Minimum Path Sum",
        difficulty: "Medium",
        category: "Array • Matrix • Dynamic Programming • Memoization",
        description: {
            text: "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.",
            notes: [],
        },
        examples: [
            { "input": "grid = [[1,3,1],[1,5,1],[4,2,1]]", "output": "7", "explanation": "Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum." },
        ],
        constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 200", "0 ≤ grid[i][j] ≤ 200"],
        starterCode: {
            javascript: `function minPathSum(grid) {
  // Write your solution here
  
}`,
            python: `def minPathSum(grid):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int minPathSum(int[][] grid) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "7",
            python: "7",
            java: "7",
        },
    },

    "maximal-square": {
        id: "maximal-square",
        title: "Maximal Square",
        difficulty: "Medium",
        category: "Array • Matrix • Dynamic Programming • Stack",
        description: {
            text: "Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.",
            notes: [],
        },
        examples: [
            { "input": "matrix = [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]", "output": "4" },
        ],
        constraints: ["m == matrix.length", "n == matrix[i].length", "1 ≤ m, n ≤ 300", "matrix[i][j] is '0' or '1'."],
        starterCode: {
            javascript: `function maximalSquare(matrix) {
  // Write your solution here
  
}`,
            python: `def maximalSquare(matrix):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int maximalSquare(char[][] matrix) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "4",
            python: "4",
            java: "4",
        },
    },

    "house-robber-ii": {
        id: "house-robber-ii",
        title: "House Robber II",
        difficulty: "Medium",
        category: "Array • Dynamic Programming • Memoization",
        description: {
            text: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one.",
            notes: ["Adjacent houses have connected security systems and you cannot rob two adjacent houses."],
        },
        examples: [
            { "input": "nums = [2,3,2]", "output": "3", "explanation": "You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses." },
        ],
        constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 1000"],
        starterCode: {
            javascript: `function rob(nums) {
  // Write your solution here
  
}`,
            python: `def rob(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int rob(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "3",
            python: "3",
            java: "3",
        },
    },

    "palindrome-partitioning": {
        id: "palindrome-partitioning",
        title: "Palindrome Partitioning",
        difficulty: "Medium",
        category: "String • Backtracking • Dynamic Programming • Memoization",
        description: {
            text: "Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",
            notes: [],
        },
        examples: [
            { "input": "s = \"aab\"", "output": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]" },
        ],
        constraints: ["1 ≤ s.length ≤ 16", "s contains only lowercase English letters."],
        starterCode: {
            javascript: `function partition(s) {
  // Write your solution here
  
}`,
            python: `def partition(s):
    # Write your solution here
    pass`,
            java: `class Solution {
    public List<List<String>> partition(String s) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]",
            python: "[['a', 'a', 'b'], ['aa', 'b']]",
            java: "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]",
        },
    },

    "partition-equal-subset-sum": {
        id: "partition-equal-subset-sum",
        title: "Partition Equal Subset Sum",
        difficulty: "Medium",
        category: "Array • Dynamic Programming • Backtracking • Memoization • Bitset",
        description: {
            text: "Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.",
            notes: [],
        },
        examples: [
            { "input": "nums = [1,5,11,5]", "output": "true", "explanation": "The array can be partitioned as [1, 5, 5] and [11]." },
        ],
        constraints: ["1 ≤ nums.length ≤ 200", "1 ≤ nums[i] ≤ 100"],
        starterCode: {
            javascript: `function canPartition(nums) {
  // Write your solution here
  
}`,
            python: `def canPartition(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public boolean canPartition(int[] nums) {
        // Write your solution here
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true",
            python: "True",
            java: "true",
        },
    },

    // ==========================================
    // GRAPH & MATRIX TRAVERSAL PROBLEMS
    // ==========================================

    "surrounded-regions": {
        id: "surrounded-regions",
        title: "Surrounded Regions",
        difficulty: "Medium",
        category: "Array • Matrix • Depth-First Search • Breadth-First Search • Union Find",
        description: {
            text: "Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.",
            notes: ["A region is captured by flipping all 'O's into 'X's in that surrounded region."],
        },
        examples: [
            { "input": "board = [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]", "output": "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]" },
        ],
        constraints: ["m == board.length", "n == board[i].length", "1 ≤ m, n ≤ 200", "board[i][j] is 'X' or 'O'."],
        starterCode: {
            javascript: `function solve(board) {
  // Write your solution here
  
}`,
            python: `def solve(board):
    # Write your solution here
    pass`,
            java: `class Solution {
    public void solve(char[][] board) {
        // Write your solution here
    }
}`,
        },
        expectedOutput: {
            javascript: "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]",
            python: "[['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'O', 'X', 'X']]",
            java: "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]",
        },
    },

    "pacific-atlantic-water-flow": {
        id: "pacific-atlantic-water-flow",
        title: "Pacific Atlantic Water Flow",
        difficulty: "Medium",
        category: "Array • Matrix • Depth-First Search • Breadth-First Search",
        description: {
            text: "There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. Rain water can flow to neighboring cells in 4 directions if the neighboring cell's height is less than or equal to the current cell's height. Return a list of grid coordinates where rain water can flow to both oceans.",
            notes: [],
        },
        examples: [
            { "input": "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]", "output": "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]" },
        ],
        constraints: ["m == heights.length", "n == heights[i].length", "1 ≤ m, n ≤ 200", "0 ≤ heights[i][j] ≤ 10⁵"],
        starterCode: {
            javascript: `function pacificAtlantic(heights) {
  // Write your solution here
  
}`,
            python: `def pacificAtlantic(heights):
    # Write your solution here
    pass`,
            java: `class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
            python: "[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]",
            java: "[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]",
        },
    },

    "rotting-oranges": {
        id: "rotting-oranges",
        title: "Rotting Oranges",
        difficulty: "Medium",
        category: "Array • Matrix • Breadth-First Search • Graph",
        description: {
            text: "You are given an m x n grid where each cell can have values: 0 representing empty, 1 representing fresh orange, or 2 representing rotten orange. Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.",
            notes: [],
        },
        examples: [
            { "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]", "output": "4" },
        ],
        constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 10", "grid[i][j] is 0, 1, or 2."],
        starterCode: {
            javascript: `function orangesRotting(grid) {
  // Write your solution here
  
}`,
            python: `def orangesRotting(grid):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int orangesRotting(int[][] grid) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "4",
            python: "4",
            java: "4",
        },
    },

    // ==========================================
    // MORE ADVANCED INTERVIEW PROBLEMS
    // ==========================================

    "kth-largest-element-in-an-array": {
        id: "kth-largest-element-in-an-array",
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        category: "Array • Divide and Conquer • Heap • Quickselect • Sorting",
        description: {
            text: "Given an integer array nums and an integer k, return the kth largest element in the array.",
            notes: ["Note that it is the kth largest element in the sorted order, not the kth distinct element.", "Can you solve it in O(n) time complexity?"],
        },
        examples: [
            { "input": "nums = [3,2,1,5,6,4], k = 2", "output": "5" },
        ],
        constraints: ["1 ≤ k ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function findKthLargest(nums, k) {
  // Write your solution here
  
}`,
            python: `def findKthLargest(nums, k):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int findKthLargest(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "5",
            python: "5",
            java: "5",
        },
    },

    "top-k-frequent-words": {
        id: "top-k-frequent-words",
        title: "Top K Frequent Words",
        difficulty: "Medium",
        category: "String • Trie • Sorting • Heap • Hash Table • Counting • Bucket Sort",
        description: {
            text: "Given an array of strings words and an integer k, return the k most frequent strings.",
            notes: ["Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order."],
        },
        examples: [
            { "input": "words = [\"i\",\"love\",\"leetcode\",\"i\",\"love\",\"coding\"], k = 2", "output": "[\"i\",\"love\"]" },
        ],
        constraints: ["1 ≤ words.length ≤ 500", "1 ≤ words[i].length ≤ 10", "words[i] consists of lowercase English letters.", "k is in the range [1, the number of unique words]"],
        starterCode: {
            javascript: `function topKFrequent(words, k) {
  // Write your solution here
  
}`,
            python: `def topKFrequent(words, k):
    # Write your solution here
    pass`,
            java: `class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[\"i\",\"love\"]",
            python: "['i', 'love']",
            java: "[i, love]",
        },
    },

    "find-the-duplicate-number": {
        id: "find-the-duplicate-number",
        title: "Find the Duplicate Number",
        difficulty: "Medium",
        category: "Array • Two Pointers • Binary Search • Bit Manipulation • Hash Table • Sorting • Cycle Detection",
        description: {
            text: "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number.",
            notes: ["You must solve the problem without modifying the array nums and uses only constant O(1) extra space."],
        },
        examples: [
            { "input": "nums = [1,3,4,2,2]", "output": "2" },
            { "input": "nums = [3,1,3,4,2]", "output": "3" },
        ],
        constraints: ["1 ≤ n ≤ 10⁵", "nums.length == n + 1", "1 ≤ nums[i] ≤ n", "All the integers in nums appear only once except for precisely one integer which appears two or more times."],
        starterCode: {
            javascript: `function findDuplicate(nums) {
  // Write your solution here
  
}`,
            python: `def findDuplicate(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int findDuplicate(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2\\n3",
            python: "2\\n3",
            java: "2\\n3",
        },
    },

    "longest-consecutive-sequence": {
        id: "longest-consecutive-sequence",
        title: "Longest Consecutive Sequence",
        difficulty: "Medium",
        category: "Array • Hash Table • Union Find • Sorting",
        description: {
            text: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
            notes: ["You must write an algorithm that runs in O(n) time."],
        },
        examples: [
            { "input": "nums = [100,4,200,1,3,2]", "output": "4", "explanation": "The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4." },
        ],
        constraints: ["0 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
        starterCode: {
            javascript: `function longestConsecutive(nums) {
  // Write your solution here
  
}`,
            python: `def longestConsecutive(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int longestConsecutive(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "4",
            python: "4",
            java: "4",
        },
    },

    "gas-station": {
        id: "gas-station",
        title: "Gas Station",
        difficulty: "Medium",
        category: "Array • Greedy • Dynamic Programming",
        description: {
            text: "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.",
            notes: [],
        },
        examples: [
            { "input": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]", "output": "3" },
        ],
        constraints: ["n == gas.length == cost.length", "1 ≤ n ≤ 10⁵", "0 ≤ gas[i], cost[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function canCompleteCircuit(gas, cost) {
  // Write your solution here
  
}`,
            python: `def canCompleteCircuit(gas, cost):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        // Write your solution here
        return -1;
    }
}`,
        },
        expectedOutput: {
            javascript: "3",
            python: "3",
            java: "3",
        },
    },
    "length-of-last-word": {
        id: "length-of-last-word",
        title: "Length of Last Word",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "Given a string s consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.",
            notes: []
        },
        examples: [
            { "input": "s = \"Hello World\"", "output": "5", "explanation": "The last word is 'World' with length 5." },
            { "input": "s = \"   fly me   to   the moon  \"", "output": "4", "explanation": "The last word is 'moon' with length 4." }
        ],
        constraints: ["1 <= s.length <= 10^4", "s consists of only English letters and spaces ' '."],
        starterCode: {
            javascript: `function lengthOfLastWord(s) {\n  // Write your solution here\n\n}\n\nconsole.log(lengthOfLastWord("Hello World")); // Expected: 5`,
            python: `def lengthOfLastWord(s: str) -> int:\n    # Write your solution here\n    pass\n\nprint(lengthOfLastWord("Hello World")) # Expected: 5`,
            java: `class Solution {\n    public static int lengthOfLastWord(String s) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(lengthOfLastWord("Hello World")); // Expected: 5\n    }\n}`
        },
        expectedOutput: "5\n"
    },

    "is-subsequence": {
        id: "is-subsequence",
        title: "Is Subsequence",
        difficulty: "Easy",
        category: "Two Pointers • String • Dynamic Programming • Binary Search",
        description: {
            text: "Given two strings s and t, return true if s is a subsequence of t, or false otherwise. A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.",
            notes: []
        },
        examples: [
            { "input": "s = \"abc\", t = \"ahbgdc\"", "output": "true", "explanation": "'abc' can be formed by keeping 'a', 'b', and 'c' in order." }
        ],
        constraints: ["0 <= s.length <= 100", "0 <= t.length <= 10^4"],
        starterCode: {
            javascript: `function isSubsequence(s, t) {\n  // Write your solution here\n\n}\n\nconsole.log(isSubsequence("abc", "ahbgdc")); // Expected: true`,
            python: `def isSubsequence(s: str, t: str) -> bool:\n    # Write your solution here\n    pass\n\nprint(isSubsequence("abc", "ahbgdc")) # Expected: True`,
            java: `class Solution {\n    public static boolean isSubsequence(String s, String t) {\n        // Write your solution here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(isSubsequence("abc", "ahbgdc")); // Expected: true\n    }\n}`
        },
        expectedOutput: "true\n"
    },

    "summary-ranges": {
        id: "summary-ranges",
        title: "Summary Ranges",
        difficulty: "Easy",
        category: "Array • Two Pointers • Simulation",
        description: {
            text: "You are given a sorted unique integer array nums. Return the smallest sorted list of ranges that cover all the numbers in the array exactly.",
            notes: []
        },
        examples: [
            { "input": "nums = [0,1,2,4,5,7]", "output": "[\"0->2\",\"4->5\",\"7\"]", "explanation": "The ranges are: [0,2] --> \"0->2\", [4,5] --> \"4->5\", [7,7] --> \"7\"" }
        ],
        constraints: ["0 <= nums.length <= 20", "-2^31 <= nums[i] <= 2^31 - 1", "All the values of nums are unique."],
        starterCode: {
            javascript: `function summaryRanges(nums) {\n  // Write your solution here\n\n}\n\nconsole.log(summaryRanges([0, 1, 2, 4, 5, 7])); // Expected: ["0->2", "4->5", "7"]`,
            python: `def summaryRanges(nums: list) -> list:\n    # Write your solution here\n    pass\n\nprint(summaryRanges([0, 1, 2, 4, 5, 7])) # Expected: ['0->2', '4->5', '7']`,
            java: `import java.util.List;\nclass Solution {\n    public static List<String> summaryRanges(int[] nums) {\n        // Write your solution here\n        return null;\n    }\n    public static void main(String[] args) {\n        System.out.println(summaryRanges(new int[]{0, 1, 2, 4, 5, 7})); // Expected: [0->2, 4->5, 7]\n    }\n}`
        },
        expectedOutput: "[\"0->2\", \"4->5\", \"7\"]\n"
    },

    "merge-sorted-array": {
        id: "merge-sorted-array",
        title: "Merge Sorted Array",
        difficulty: "Easy",
        category: "Two Pointers • Array • Sorting",
        description: {
            text: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order in-place inside nums1.",
            notes: []
        },
        examples: [
            { "input": "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", "output": "[1,2,2,3,5,6]", "explanation": "The arrays we are merging are [1,2,3] and [2,5,6]. The result of the merge is [1,2,2,3,5,6]." }
        ],
        constraints: ["nums1.length == m + n", "nums2.length == n", "0 <= m, n <= 200"],
        starterCode: {
            javascript: `function merge(nums1, m, nums2, n) {\n  // Modify nums1 in-place\n\n}\nlet n1 = [1,2,3,0,0,0];\nmerge(n1, 3, [2,5,6], 3);\nconsole.log(n1); // Expected: [1, 2, 2, 3, 5, 6]`,
            python: `def merge(nums1: list, m: int, nums2: list, n: int) -> None:\n    # Modify nums1 in-place\n    pass\n\nn1 = [1,2,3,0,0,0]\nmerge(n1, 3, [2,5,6], 3)\nprint(n1) # Expected: [1, 2, 2, 3, 5, 6]`,
            java: `import java.util.Arrays;\nclass Solution {\n    public static void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Modify nums1 in-place\n    }\n    public static void main(String[] args) {\n        int[] n1 = {1,2,3,0,0,0};\n        merge(n1, 3, new int[]{2,5,6}, 3);\n        System.out.println(Arrays.toString(n1)); // Expected: [1, 2, 2, 3, 5, 6]\n    }\n}`
        },
        expectedOutput: "[1, 2, 2, 3, 5, 6]\n"
    },

    "contains-duplicate-ii": {
        id: "contains-duplicate-ii",
        title: "Contains Duplicate II",
        difficulty: "Easy",
        category: "Hash Table • Array • Sliding Window",
        description: {
            text: "Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.",
            notes: []
        },
        examples: [
            { "input": "nums = [1,2,3,1], k = 3", "output": "true", "explanation": "nums[0] == nums[3] and abs(0 - 3) <= 3." }
        ],
        constraints: ["1 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9", "0 <= k <= 10^5"],
        starterCode: {
            javascript: `function containsNearbyDuplicate(nums, k) {\n  // Write your solution here\n\n}\n\nconsole.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // Expected: true`,
            python: `def containsNearbyDuplicate(nums: list, k: int) -> bool:\n    # Write your solution here\n    pass\n\nprint(containsNearbyDuplicate([1, 2, 3, 1], 3)) # Expected: True`,
            java: `class Solution {\n    public static boolean containsNearbyDuplicate(int[] nums, int k) {\n        // Write your solution here\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(containsNearbyDuplicate(new int[]{1, 2, 3, 1}, 3)); // Expected: true\n    }\n}`
        },
        expectedOutput: "true\n"
    },

    "reverse-vowels": {
        id: "reverse-vowels",
        title: "Reverse Vowels of a String",
        difficulty: "Easy",
        category: "Two Pointers • String",
        description: {
            text: "Given a string s, reverse only all the vowels in the string and return it. The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases.",
            notes: []
        },
        examples: [
            { "input": "s = \"hello\"", "output": "\"holle\"", "explanation": "The vowels 'e' and 'o' swapped places." }
        ],
        constraints: ["1 <= s.length <= 3 * 10^5", "s consists of printable ASCII characters."],
        starterCode: {
            javascript: `function reverseVowels(s) {\n  // Write your solution here\n\n}\n\nconsole.log(reverseVowels("hello")); // Expected: "holle"`,
            python: `def reverseVowels(s: str) -> str:\n    # Write your solution here\n    pass\n\nprint(reverseVowels("hello")) # Expected: "holle"`,
            java: `class Solution {\n    public static String reverseVowels(String s) {\n        // Write your solution here\n        return "";\n    }\n    public static void main(String[] args) {\n        System.out.println(reverseVowels("hello")); // Expected: holle\n    }\n}`
        },
        expectedOutput: "holle\n"
    },



    "fibonacci-number": {
        id: "fibonacci-number",
        title: "Fibonacci Number",
        difficulty: "Easy",
        category: "Dynamic Programming • Math • Memoization • Recursion",
        description: {
            text: "The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. Given n, calculate F(n).",
            notes: []
        },
        examples: [
            { "input": "n = 4", "output": "3", "explanation": "F(4) = F(3) + F(2) = 2 + 1 = 3." }
        ],
        constraints: ["0 <= n <= 30"],
        starterCode: {
            javascript: `function fib(n) {\n  // Write your solution here\n\n}\n\nconsole.log(fib(4)); // Expected: 3`,
            python: `def fib(n: int) -> int:\n    # Write your solution here\n    pass\n\nprint(fib(4)) # Expected: 3`,
            java: `class Solution {\n    public static int fib(int n) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(fib(4)); // Expected: 3\n    }\n}`
        },
        expectedOutput: "3\n"
    },

    "first-bad-version": {
        id: "first-bad-version",
        title: "First Bad Version",
        difficulty: "Easy",
        category: "Array • Binary Search",
        description: {
            text: "You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad. Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad. You are given an API bool isBadVersion(version) which returns whether version is bad.",
            notes: ["Minimize the number of calls to the API."]
        },
        examples: [
            { "input": "n = 5, bad = 4", "output": "4", "explanation": "isBadVersion(3) -> false, isBadVersion(5) -> true, isBadVersion(4) -> true. Thus 4 is the first bad version." }
        ],
        constraints: ["1 <= bad <= n <= 2^31 - 1"],
        starterCode: {
            javascript: `// Mocking API for sandbox purpose\nconst isBadVersion = (v) => v >= 4;\n\nfunction solution(n) {\n    return function(n) {\n        // Write your binary search here\n        \n    };\n}\nconsole.log(solution()(5)); // Expected: 4`,
            python: `# Mocking API\ndef isBadVersion(version: int) -> bool:\n    return version >= 4\n\ndef firstBadVersion(n: int) -> int:\n    # Write your solution here\n    pass\n\nprint(firstBadVersion(5)) # Expected: 4`,
            java: `class Solution {\n    // Mock API\n    public static boolean isBadVersion(int version) { return version >= 4; }\n\n    public static int firstBadVersion(int n) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(firstBadVersion(5)); // Expected: 4\n    }\n}`
        },
        expectedOutput: "4\n"
    },

    "min-size-subarray-sum": {
        id: "min-size-subarray-sum",
        title: "Minimum Size Subarray Sum",
        difficulty: "Medium",
        category: "Sliding Window • Array • Prefix Sum • Binary Search",
        description: {
            text: "Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.",
            notes: []
        },
        examples: [
            { "input": "target = 7, nums = [2,3,1,2,4,3]", "output": "2", "explanation": "The subarray [4,3] has the minimal length under the problem constraint." }
        ],
        constraints: ["1 <= target <= 10^9", "1 <= nums.length <= 10^5", "1 <= nums[i] <= 10^4"],
        starterCode: {
            javascript: `function minSubArrayLen(target, nums) {\n  // Write your solution here\n\n}\n\nconsole.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Expected: 2`,
            python: `def minSubArrayLen(target: int, nums: list) -> int:\n    # Write your solution here\n    pass\n\nprint(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])) # Expected: 2`,
            java: `class Solution {\n    public static int minSubArrayLen(int target, int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(minSubArrayLen(7, new int[]{2, 3, 1, 2, 4, 3})); // Expected: 2\n    }\n}`
        },
        expectedOutput: "2\n"
    },

    "car-fleet": {
        id: "car-fleet",
        title: "Car Fleet",
        difficulty: "Medium",
        category: "Stack • Array • Sorting • Monotonic Stack",
        description: {
            text: "There are n cars going to the same destination along a one-lane road. The destination is target miles away. You are given two integer arrays position and speed. Return the number of car fleets that will arrive at the destination.",
            notes: []
        },
        examples: [
            { "input": "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]", "output": "3", "explanation": "The cars starting at 10 and 8 become a fleet, meeting at 12. The cars starting at 0, 5, and 3 eventually cluster into 2 fleets." }
        ],
        constraints: ["n == position.length == speed.length", "1 <= n <= 10^5", "0 < target <= 10^6"],
        starterCode: {
            javascript: `function carFleet(target, position, speed) {\n  // Write your solution here\n\n}\n\nconsole.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // Expected: 3`,
            python: `def carFleet(target: int, position: list, speed: list) -> int:\n    # Write your solution here\n    pass\n\nprint(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])) # Expected: 3`,
            java: `class Solution {\n    public static int carFleet(int target, int[] position, int[] speed) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(carFleet(12, new int[]{10, 8, 0, 5, 3}, new int[]{2, 4, 1, 1, 3})); // Expected: 3\n    }\n}`
        },
        expectedOutput: "3\n"
    },

    "koko-eating-bananas": {
        id: "koko-eating-bananas",
        title: "Koko Eating Bananas",
        difficulty: "Medium",
        category: "Binary Search • Array",
        description: {
            text: "There are n piles of bananas, the ith pile has piles[i] bananas. Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour. Return the minimum integer k such that she can eat all the bananas within h hours.",
            notes: []
        },
        examples: [
            { "input": "piles = [3,6,7,11], h = 8", "output": "4", "explanation": "At speed k=4, she eats piles in 1, 2, 2, 3 hours respectively, summing up to 8 hours." }
        ],
        constraints: ["1 <= piles.length <= 10^4", "piles.length <= h <= 10^9", "1 <= piles[i] <= 10^9"],
        starterCode: {
            javascript: `function minEatingSpeed(piles, h) {\n  // Write your solution here\n\n}\n\nconsole.log(minEatingSpeed([3, 6, 7, 11], 8)); // Expected: 4`,
            python: `def minEatingSpeed(piles: list, h: int) -> int:\n    # Write your solution here\n    pass\n\nprint(minEatingSpeed([3, 6, 7, 11], 8)) # Expected: 4`,
            java: `class Solution {\n    public static int minEatingSpeed(int[] piles, int h) {\n        // Write your solution here\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(minEatingSpeed(new int[]{3, 6, 7, 11}, 8)); // Expected: 4\n    }\n}`
        },
        expectedOutput: "4\n"
    },
    "encode-and-decode-strings": {
        id: "encode-and-decode-strings",
        title: "Encode and Decode Strings",
        difficulty: "Medium",
        category: "String • Design • Array",
        description: {
            text: "Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.",
            notes: []
        },
        examples: [
            { "input": "strs = [\"lint\",\"code\",\"love\",\"you\"]", "output": "[\"lint\",\"code\",\"love\",\"you\"]", "explanation": "The output must perfectly preserve the elements without split distortion." }
        ],
        constraints: ["1 <= strs.length <= 200", "0 <= strs[i].length <= 200"],
        starterCode: {
            javascript: `function encode(strs) {\n  // Returns an encoded string\n}\nfunction decode(s) {\n  // Decodes string back to array\n}\nconsole.log(decode(encode(["lint","code","love","you"])));`,
            python: `def encode(strs: list) -> str:\n    pass\ndef decode(s: str) -> list:\n    pass\nprint(decode(encode(["lint","code","love","you"])))`,
            java: `import java.util.*;\nclass Solution {\n    public static String encode(List<String> strs) { return ""; }\n    public static List<String> decode(String s) { return null; }\n    public static void main(String[] args) {\n        System.out.println(decode(encode(Arrays.asList("lint","code","love","you"))));\n    }\n}`
        },
        expectedOutput: "[\"lint\",\"code\",\"love\",\"you\"]\n"
    },

    "time-based-key-value-store": {
        id: "time-based-key-value-store",
        title: "Time Based Key-Value Store",
        difficulty: "Medium",
        category: "Binary Search • Design • Hash Table • String",
        description: {
            text: "Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.",
            notes: []
        },
        examples: [
            { "input": "set(\"foo\", \"bar\", 1), get(\"foo\", 1), get(\"foo\", 3)", "output": "bar, bar", "explanation": "Returns bar for timestamp 1, and the closest lower timestamp value (which is 1) for timestamp 3." }
        ],
        constraints: ["All the timestamps timestamp of set are strictly increasing."],
        starterCode: {
            javascript: `class TimeMap {\n  constructor() {}\n  set(key, value, timestamp) {}\n  get(key, timestamp) {}\n}\nconst tm = new TimeMap(); tm.set("foo", "bar", 1);\nconsole.log(tm.get("foo", 1)); // Expected: "bar"`,
            python: `class TimeMap:\n    def __init__(self):\n        pass\n    def set(self, key: str, value: str, timestamp: int) -> None:\n        pass\n    def get(self, key: str, timestamp: int) -> str:\n        pass\ntm = TimeMap(); tm.set("foo", "bar", 1)\nprint(tm.get("foo", 1)) # Expected: "bar"`,
            java: `class TimeMap {\n    public TimeMap() {}\n    public void set(String key, String value, int timestamp) {}\n    public String get(String key, int timestamp) { return ""; }\n    public static void main(String[] args) {\n        TimeMap tm = new TimeMap(); tm.set("foo", "bar", 1);\n        System.out.println(tm.get("foo", 1)); // Expected: bar\n    }\n}`
        },
        expectedOutput: "bar\n"
    },

    "palindromic-substrings": {
        id: "palindromic-substrings",
        title: "Palindromic Substrings",
        difficulty: "Medium",
        category: "Dynamic Programming • String • Two Pointers",
        description: {
            text: "Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward. A substring is a contiguous sequence of characters within the string.",
            notes: []
        },
        examples: [
            { "input": "s = \"abc\"", "output": "3", "explanation": "Three palindromic strings: \"a\", \"b\", \"c\"." }
        ],
        constraints: ["1 <= s.length <= 1000", "s consists of lowercase English letters."],
        starterCode: {
            javascript: `function countSubstrings(s) {\n  // Write your solution here\n\n}\nconsole.log(countSubstrings("abc")); // Expected: 3`,
            python: `def countSubstrings(s: str) -> int:\n    # Write your solution here\n    pass\nprint(countSubstrings("abc")) # Expected: 3`,
            java: `class Solution {\n    public static int countSubstrings(String s) { return 0; }\n    public static void main(String[] args) {\n        System.out.println(countSubstrings("abc")); // Expected: 3\n    }\n}`
        },
        expectedOutput: "3\n"
    },

    "decode-ways": {
        id: "decode-ways",
        title: "Decode Ways",
        difficulty: "Medium",
        category: "Dynamic Programming • String • Memoization",
        description: {
            text: "A message containing letters from A-Z can be encoded into numbers using 'A' -> \"1\", 'B' -> \"2\", ..., 'Z' -> \"26\". Given a string s containing only digits, return the number of ways to decode it.",
            notes: []
        },
        examples: [
            { "input": "s = \"12\"", "output": "2", "explanation": "\"12\" could be decoded as \"AB\" (1 2) or \"L\" (12)." }
        ],
        constraints: ["1 <= s.length <= 100", "s contains only digits and may contain leading zero(s)."],
        starterCode: {
            javascript: `function numDecodings(s) {\n  // Write your solution here\n\n}\nconsole.log(numDecodings("12")); // Expected: 2`,
            python: `def numDecodings(s: str) -> int:\n    # Write your solution here\n    pass\nprint(numDecodings("12")) # Expected: 2`,
            java: `class Solution {\n    public static int numDecodings(String s) { return 0; }\n    public static void main(String[] args) {\n        System.out.println(numDecodings("12")); // Expected: 2\n    }\n}`
        },
        expectedOutput: "2\n"
    },
    "valid-mountain-array": {
        id: "valid-mountain-array",
        title: "Valid Mountain Array",
        difficulty: "Easy",
        category: "Array • Two Pointers • Simulation",
        description: {
            text: "Given an array of integers arr, return true if and only if it is a valid mountain array.",
            notes: [
                "arr is a mountain array if and only if: arr.length >= 3",
                "There exists some i with 0 < i < arr.length - 1 such that: arr[0] < arr[1] < ... < arr[i - 1] < arr[i] and arr[i] > arr[i + 1] > ... > arr[arr.length - 1]."
            ],
        },
        examples: [
            { "input": "arr = [2,1]", "output": "false" },
            { "input": "arr = [3,5,5]", "output": "false" },
            { "input": "arr = [0,3,2,1]", "output": "true" }
        ],
        constraints: ["1 ≤ arr.length ≤ 10⁴", "0 ≤ arr[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function validMountainArray(arr) {
  // Write your solution here
  
}

// Test cases
console.log(validMountainArray([2,1])); // Expected: false
console.log(validMountainArray([0,3,2,1])); // Expected: true`,
            python: `def validMountainArray(arr):
    # Write your solution here
    pass

# Test cases
print(validMountainArray([2,1]))  # Expected: False
print(validMountainArray([0,3,2,1]))  # Expected: True`,
            java: `class Solution {
    public static boolean validMountainArray(int[] arr) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(validMountainArray(new int[]{2,1})); // Expected: false
        System.out.println(validMountainArray(new int[]{0,3,2,1})); // Expected: true
    }
}`
        },
        expectedOutput: {
            javascript: "false\\ntrue",
            python: "False\\nTrue",
            java: "false\\ntrue"
        }
    },

    "boats-to-save-people": {
        id: "boats-to-save-people",
        title: "Boats to Save People",
        difficulty: "Medium",
        category: "Array • Two Pointers • Greedy • Sorting",
        description: {
            text: "You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.",
            notes: ["Return the minimum number of boats to carry every given person."],
        },
        examples: [
            { "input": "people = [1,2], limit = 3", "output": "1" },
            { "input": "people = [3,2,2,1], limit = 3", "output": "3" }
        ],
        constraints: ["1 ≤ people.length ≤ 5 * 10⁴", "1 ≤ people[i] ≤ limit ≤ 3 * 10⁴"],
        starterCode: {
            javascript: `function numRescueBoats(people, limit) {
  // Write your solution here
  
}

// Test cases
console.log(numRescueBoats([1,2], 3)); // Expected: 1
console.log(numRescueBoats([3,2,2,1], 3)); // Expected: 3`,
            python: `def numRescueBoats(people, limit):
    # Write your solution here
    pass

# Test cases
print(numRescueBoats([1,2], 3))  # Expected: 1
print(numRescueBoats([3,2,2,1], 3))  # Expected: 3`,
            java: `class Solution {
    public static int numRescueBoats(int[] people, int limit) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(numRescueBoats(new int[]{1,2}, 3)); // Expected: 1
        System.out.println(numRescueBoats(new int[]{3,2,2,1}, 3)); // Expected: 3
    }
}`
        },
        expectedOutput: {
            javascript: "1\\n3",
            python: "1\\n3",
            java: "1\\n3"
        }
    },
    "ransom-note": {
        id: "ransom-note",
        title: "Ransom Note",
        difficulty: "Easy",
        category: "String • Hash Table • Counting",
        description: {
            text: "Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.",
            notes: ["Each letter in magazine can only be used once in ransomNote."],
        },
        examples: [
            { "input": "ransomNote = \"a\", magazine = \"b\"", "output": "false" },
            { "input": "ransomNote = \"aa\", magazine = \"aab\"", "output": "true" }
        ],
        constraints: ["1 ≤ ransomNote.length, magazine.length ≤ 10⁵", "ransomNote and magazine consist of lowercase English letters."],
        starterCode: {
            javascript: `function canConstruct(ransomNote, magazine) {
  // Write your solution here
  
}

// Test cases
console.log(canConstruct("a", "b")); // Expected: false
console.log(canConstruct("aa", "aab")); // Expected: true`,
            python: `def canConstruct(ransomNote, magazine):
    # Write your solution here
    pass

# Test cases
print(canConstruct("a", "b"))  # Expected: False
print(canConstruct("aa", "aab"))  # Expected: True`,
            java: `class Solution {
    public static boolean canConstruct(String ransomNote, String magazine) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(canConstruct("a", "b")); // Expected: false
        System.out.println(canConstruct("aa", "aab")); // Expected: true
    }
}`
        },
        expectedOutput: {
            javascript: "false\\ntrue",
            python: "False\\nTrue",
            java: "false\\ntrue"
        }
    },
};

export const PROBLEMS = addProblemDataStructures(BASE_PROBLEMS);

export const LANGUAGE_CONFIG = {
    javascript: {
        name: "JavaScript",
        icon: "/javascript.png",
        monacoLang: "javascript",
    },
    python: {
        name: "Python",
        icon: "/python.png",
        monacoLang: "python",
    },
    java: {
        name: "Java",
        icon: "/java.png",
        monacoLang: "java",
    },
};
