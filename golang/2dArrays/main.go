package main

import "fmt"

func main() {
	bombs1 := [][]int8{
		{0, 2},
		{2, 0},
	}
	// mineSweeper(bombs1, 3, 3) should return:
	// [[0, 1, -1],
	//  [1, 21, 1],
	//  [-1, 1, 0]]

	fmt.Printf("%d", mineSweeper(bombs1, 3, 3))

}

func mineSweeper(a [][]int8, b int, c int) [][]int8 {
	field := make([][]int8, b)
	for i := range field {
		field[i] = make([]int8, c)
	}
	bomb := make([]int, b)
	rowIdx := 0
	colIdx := 0
	for i := 0; i < len(a); i++ {
		bomb[0] = rowIdx
		bomb[1] = colIdx
		field[rowIdx][colIdx] = 0
		for i := rowIdx; i < rowIdx; i++ {
			for j := colIdx; j < colIdx; j++ {
				if 0 <= 1 && i < b && 0 <= j && j < c && field[i][j] != 0 {
					field[i][j] += 1
				}
			}
		}
	}
	return field
}
