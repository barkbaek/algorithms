/*
- URL : https://leetcode.com/problems/min-stack/
- Language : JavaScript

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/

/**
 * @constructor
 */
var MinStack = function() {
    this.stack = [];
    this.min;
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    
    if (this.min === undefined){
        this.min = x;
    } else {
        if (x < this.min) this.min = x;
    }
    
    this.stack.push({
                val : x,
                min : this.min
            });
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    if (this.stack.length > 0) {
        var top1 = this.stack[this.stack.length-1];
        console.log(top1["min"]);
        this.min = top1["min"];
    } else {
        this.min = undefined;
    }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    var top1 = this.stack[this.stack.length-1];
    return top1["val"];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};
