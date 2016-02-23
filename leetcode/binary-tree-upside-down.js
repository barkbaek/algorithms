/*
- URL : https://leetcode.com/problems/binary-tree-upside-down/
- Language : JavaScript

Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.

For example:
Given a binary tree {1,2,3,4,5},
    1
   / \
  2   3
 / \
4   5

return the root of the binary tree [4,5,2,#,#,3,1].
   4
  / \
 5   2
    / \
   3   1 
   
------------------------------------------------------
OJ's Binary Tree Serialization:
The serialization of a binary tree follows a level order traversal, where '#' signifies a path terminator where no node exists below.

Here's an example:
   1
  / \
 2   3
    /
   4
    \
     5
The above binary tree is serialized as "{1,2,3,#,#,4,#,#,5}".   
------------------------------------------------------
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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {
    
    if (!root || !root.left) return root;
    console.log(typeof root);
    console.dir(root);
    
    var prev,// = new TreeNode(null),
    next,// = new TreeNode(null),
    right;// = new TreeNode(null);
    
    var count = 1;
    while (root) {
        console.log("\n" + count);
        console.dir(root);
        next = root.left;
        root.left = right;
	    right = root.right;
	    root.right = prev;

	    prev = root;
	    root = next;
    }

	return prev;
};
