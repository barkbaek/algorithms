/*
- URL : https://leetcode.com/problems/strobogrammatic-number/
- Language : JavaScript

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Write a function to determine if a number is strobogrammatic. The number is represented as a string.

For example, the numbers "69", "88", and "818" are all strobogrammatic.
*/

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    var stack = [], cur;
    var stack_len = Math.floor(num.length / 2);
    for (var i = 0; i < stack_len; i++) {
        stack.push(num[i]);
    }
    if (num.length % 2 !== 0 ) {
        if (num[stack_len] !== '0' &&
        num[stack_len] !== '1' &&
        num[stack_len] !== '8') return false;
        for (var j = stack_len + 1; j < num.length; j++) {
            cur = stack.pop();
            if (cur !== '0' &&
                cur !== '1' &&
                cur !== '8' &&
                cur !== '6' &&
                cur !== '9' ) return false;
            switch (cur) {
                case '0':
                case '1':
                case '8':
                    if (cur === num[j]) break;
                    else return false;
                case '6':
                    if (num[j] === '9') break;
                    else return false;
                case '9':
                    if (num[j] === '6') break;
                    else return false;
                default:
                    return false;
            }
        }
    } else {
        for (var j = stack_len; j < num.length; j++) {
            cur = stack.pop();
            if (cur !== '0' &&
                cur !== '1' &&
                cur !== '8' &&
                cur !== '6' &&
                cur !== '9' ) return false;
            switch (cur) {
                case '0':
                case '1':
                case '8':
                    if (cur === num[j]) break;
                    else return false;
                case '6':
                    if (num[j] === '9') break;
                    else return false;
                case '9':
                    if (num[j] === '6') break;
                    else return false;
                default:
                    return false;
            }
        }
    }
    
    return true;
    
};
