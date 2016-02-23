/*
- URL : https://leetcode.com/problems/add-two-numbers/
- Language : JavaScript

You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return computeNode(l1, l2, 0);
};

var computeNode = function (a, b, c) {
    var sum = a.val + b.val + c;
    var sd = sum % 10;
    var carry = sum > 9 ? 1 : 0;
    
    var node = new ListNode(sd);
    
    if (carry || a.next || b.next) {
        node.next = computeNode(a.next || new ListNode(0), b.next || new ListNode(0), carry);
    }
    return node;
}

