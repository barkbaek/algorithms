/*
- URL : https://leetcode.com/problems/valid-parentheses/
- Language : JavaScript

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if (s.length % 2 !== 0 ) return false;
    
    var stack = [], temp;
    
    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
            case '{':
            case '[':
                stack.push(s[i]);
                break;
            case ')':
                temp = stack.pop();
                if (temp !== '(') return false;
                break;
            case '}':
                temp = stack.pop();
                if (temp !== '{') return false;
                break;
            case ']':
                temp = stack.pop();
                if (temp !== '[') return false;
                break;
            default:
                return false;
        }
    }
    return stack.length === 0;
};
