/*
- URL : https://leetcode.com/problems/power-of-three/
- Language : JavaScript

Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    var geun = Math.log(n) / Math.log(3);
    return Math.ceil(geun) - geun <= 0.00000000000001;
};
