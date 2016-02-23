/*
- URL : https://leetcode.com/problems/add-digits/
- Language : JavaScript

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:
Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.



Follow up:
Could you do it without any loop/recursion in O(1) runtime?

Hint:
1. A naive implementation of the above process is trivial. Could you come up with other methods?
2. What are all the possible results?
3. How do they occur, periodically or randomly?
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return num === 0 ? 0 : (num % 9 === 0 ? 9 : num % 9);
};
