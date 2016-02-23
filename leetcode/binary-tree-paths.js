/*
- URL : https://leetcode.com/problems/binary-tree-paths/
- Language : JavaScript

Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5

All root-to-leaf paths are:
["1->2->5", "1->3"]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var res = [];
    
    if (!root) return [];
    
    if (root.left === null && root.right === null) return [root.val + ""];
    
    if (root.left) {
        bfs(root.left, root.val+"", res);
    }
    
    if (root.right) {
        bfs(root.right, root.val+"", res);
    }
    
    return res;
};

var bfs = function (node, path, res) {
    var base = path + "->" + node.val;
    
    if (node.left === null && node.right === null) res.push(base);
    
    if (node.left) {
        bfs(node.left, base, res);
    }
    
    if (node.right) {
        bfs(node.right, base, res);
    }
    
}
