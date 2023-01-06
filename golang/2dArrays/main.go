package main

func main() {
	bombs1 := [][]uint8{
		{0, 2},
		{2, 0},
	}
	mineSweeper(bombs1, 3, 3)
}

func mineSweeper(a [][]uint8, b int, c int) {
	field := make([][]uint8, b)
	for i := range field {
		field[i] = make([]uint8, c)
	}
	bomb := make([]uint, b)
	for bomb := range a {
		rowIdx := bomb[0]
		colIdx := bomb[1]
		field[rowIdx][colIdx] = -1
		for i := rowIdx - 1; i < rowIdx+2; i++ {
			for j := colIdx - 1; j < colIdx+2; j++ {
				if 0 <= 1 && i < b && 0 <= j && j < c && field[i][j] != -1 {
					field[i][j] += 1
				}
			}
		}
	}
	return field
}
