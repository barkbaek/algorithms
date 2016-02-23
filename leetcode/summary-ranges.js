/*
- URL : https://leetcode.com/problems/summary-ranges/
- Language: JavaScript

Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function(nums) {
    
    if (nums.length === 0) return [];
    var start = nums.shift();
    if (nums.length === 0) return [start + ""];
    
    var cur, prev = start;
    var res = [];
    
    while (nums.length !== 0) {
        cur = nums.shift();
        if (nums.length === 0) {
            if (prev + 1 === cur) {
                res.push(start + "->" + cur);
            } else {
                if (start === prev) {
                    res.push(start + "");
                    res.push(cur + "");
                } else {
                    res.push(start + "->" + prev);
                    res.push(cur + "");
                }
            }
        } else {
            if (prev + 1 === cur) {
                prev = cur;
            } else {
                if (start === prev) {
                    res.push(start + "");
                } else {
                    res.push(start + "->" + prev);
                }
                start = prev = cur;
            }
        }
    }
    return res;
}
