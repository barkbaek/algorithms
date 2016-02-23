/*
- URL : https://leetcode.com/problems/longest-substring-without-repeating-characters/
- Language : JavaScript

Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.

Show Company Tags
Show Tags
Show Similar Problems
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var list = [];
    var cur=0, prev=0, temp;
    for (var i = 0; i < s.length; i++) {
        
        if (list.indexOf(s[i]) === -1) {
            // 존재 안하므로 카운트
            list.push(s[i]);
            cur++;
        } else {
            // 존재하므로 초기화
            if (prev <= cur) {
                prev = cur;    
            }
            
            if (s[i] === list[list.length - 1]) {
                cur = 1;
                list.length = 0;
                list.push(s[i]);
            } else {
                list = list.slice( list.indexOf(s[i]) + 1, list.length );
                list.push(s[i]);
                cur = list.length;
            }
        }
    }
    
    return prev > cur ? prev: cur;
};
