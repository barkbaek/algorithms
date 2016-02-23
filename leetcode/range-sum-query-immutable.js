/*
- URL : https://leetcode.com/problems/range-sum-query-immutable/
- Language: JavaScript

Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

Note:
1. You may assume that the array does not change.
2. There are many calls to sumRange function.
*/

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var len = nums.length;
    this.nums = [];
    this.nums.push(nums[0]);
    
    for (var i = 1; i < len; i++) {
        this.nums.push(nums[i] + this.nums[i-1]);
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if ( i == 0) {
        return this.nums[j];
    }
    return this.nums[j] - this.nums[i-1];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
