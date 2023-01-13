// no. 145

package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func main() {
	root := InitTree(1, 0, 2, 3)
	postorderTraversal(root)
}

func postorderTraversal(root *TreeNode) []int {
	result := []int{}
	var traverse func(root *TreeNode, result []int)
	traverse = func(root *TreeNode, result []int) {
		if root == nil {
			return
		}
		traverse(root.Left, result)
		traverse(root.Right, result)
		result = append(result, root.Val)
		fmt.Print(result)
	}
	traverse(root, result)
	return result
}

var DefaultValue int = -1024

func InsertNodeToTree(tree *TreeNode, node *TreeNode) {
	if tree == nil {
		return
	}
	if tree.Val == DefaultValue {
		tree.Val = node.Val
		return
	}
	if node.Val > tree.Val {
		if tree.Right == nil {
			tree.Right = &TreeNode{Val: DefaultValue}
		}
		InsertNodeToTree(tree.Right, node)
	}
	if node.Val < tree.Val {
		if tree.Left == nil {
			tree.Left = &TreeNode{Val: DefaultValue}
		}
		InsertNodeToTree(tree.Left, node)
	}
}

func InitTree(values ...int) (root *TreeNode) {
	rootNode := TreeNode{Val: DefaultValue, Right: nil, Left: nil}
	for _, value := range values {
		node := TreeNode{Val: value}
		InsertNodeToTree(&rootNode, &node)
	}
	return &rootNode
}
