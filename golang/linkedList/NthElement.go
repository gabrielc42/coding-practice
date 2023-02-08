package main

func NthElement() {

}

func nthFromLast(head Node, n int) Node {
	left := head
	right := head

	for i := 0; i < n; i++ {
		if right == nil {
			return nil
		}
		right = right.child
	}
	for right != nil {
		right = right.child
		left = left.child
	}
	return left
}

//func linkedListToString

func main() {

}
