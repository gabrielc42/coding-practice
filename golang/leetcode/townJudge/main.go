// no. 997

package main

import (
	"fmt"
)

func main() {
	n := 2
	trust := [][]int{
		{1, 2},
	}
	// trust := [][]uint{2: 1, 2}

	// a := [][]uint8{
	//   {0, 1, 2, 3},
	//   {4, 5, 6, 7},
	// }
	fmt.Printf("%d\n", findJudge(n, trust))
	n = 3
	trust = [][]int{
		{1, 3},
		{2, 3},
	}
	fmt.Printf("%d\n", findJudge(n, trust))

	trust = [][]int{
		{1, 3}, {2, 3}, {3, 1},
	}
	fmt.Printf("%d\n", findJudge(n, trust))

}

func findJudge(n int, trust [][]int) int {
	if len(trust) > 0 {
		tr := make([]int, n+1)
		for _, t := range trust {
			tr[t[0]]--
			tr[t[1]]++
		}
		for i := 0; i <= n; i++ {
			if tr[i] == n-1 {
				return i
			}
		}
	} else if n == 1 {
		return n
	}
	return -1
}
