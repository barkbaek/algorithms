/*
- URL : https://leetcode.com/problems/zigzag-iterator/
- Language: JavaScript

Given two 1d vectors, implement an iterator to return their elements alternately.

For example, given two 1d vectors:

v1 = [1, 2]
v2 = [3, 4, 5, 6]
By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1, 3, 2, 4, 5, 6].

Follow up: What if you are given k 1d vectors? How well can your code be extended to such cases?

Clarification for the follow up question - Update (2015-09-18):
The "Zigzag" order is not clearly defined and is ambiguous for k > 2 cases. If "Zigzag" does not look right to you, replace "Zigzag" with "Cyclic". For example, given the following input:

[1,2,3]
[4,5,6,7]
[8,9]
It should return [1,4,8,2,5,9,3,6,7].
Show Company Tags
Show Tags
Show Similar Problems

*/

/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.v1 = v1;
    this.v2 = v2;
    this.idx = 0;
    this.isV1 = true;
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    if (this.idx >= this.v1.length && this.idx >= this.v2.length) {
        return false;
    } else return true;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    var num;
    
    if (this.idx >= this.v1.length) {
        this.isV1 = false;
    }
    if (this.idx >= this.v2.length) {
        this.isV1 = true;
    }
    
    if (this.isV1) {
        num = this.v1[this.idx];
        if (this.idx >= this.v2.length) {
            this.idx++;
        } else {
            this.isV1 = false;
        }
    } else {
        num = this.v2[this.idx];
        if (this.idx >= this.v1.length) {
            this.idx++;
        } else {
            this.isV1 = true;
            this.idx++;
        }
    }
    return num;
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
