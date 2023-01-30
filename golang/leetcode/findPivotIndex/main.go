// no. 724

package main

import "fmt"

func main() {
	nums := []int{1, 7, 3, 6, 5, 6}
	fmt.Printf("%d\n", pivotIndex(nums)) // 3
	nums = []int{1, 2, 3}
	fmt.Printf("%d\n", pivotIndex(nums)) // -1
	nums = []int{2, 1, -1}
	fmt.Printf("%d\n", pivotIndex(nums)) // 0
}

func pivotIndex(nums []int) int {
	leftSum := 0
	rightSum := 0

	for i := 0; i < len(nums); i++ {
		rightSum += nums[i]
	}
	for j := 0; j < len(nums); j++ {
		if j != 0 {
			leftSum += nums[j-1]
		}

		rightSum -= nums[j]

		if leftSum == rightSum {
			return j
		}
	}
	return -1
}
