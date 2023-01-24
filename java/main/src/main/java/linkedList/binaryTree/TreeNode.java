package linkedList.binaryTree;

import java.util.Objects;


// Use this class to create binary trees.
public class TreeNode {
    int value;
    TreeNode left;
    TreeNode right;


    TreeNode(int value, TreeNode left, TreeNode right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

//    @Override
//    public String toString() {
//        return "TreeNode{" +
//                "value=" + value +
//                ", left=" + left +
//                ", right=" + right +
//                '}';
//    }

    // The string representation of this node.
    // Will be used for testing.
    @Override
    public String toString() {
        String output = String.valueOf("null".equals(value) ? null : value);
        if (output == null) return "null";
        return String.valueOf(value);
    }
}
