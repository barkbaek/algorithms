/*
- URL : https://leetcode.com/problems/two-sum/
- Language : JavaScript

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

UPDATE (2016/2/13):
The return format had been changed to zero-based indices. Please read the above updated description carefully.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var returned = [];
    for (var a = 0; a < nums.length; a++) {
        for (var b = 0; b < nums.length; b++) {
            if (a == b) continue;
            
            if (nums[a] + nums[b] === target) {
                // Compare Size
                return [a+1, b+1];
                /*
                if (nums[a] > nums[b]) {
                    return [b+1, a+1];
                } else {
                    return [a+1, b+1];
                }*/
            }
        }
    }
};

