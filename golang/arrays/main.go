package main

import "fmt"

func main() {
	fmt.Printf("hello! world! :) !")
	println("")

	//false
	array1 := []int{1, 2, 3, 4, 5, 6, 7}
	array2a := []int{4, 5, 6, 7, 8, 1, 2, 3}
	fmt.Printf("%t", rotate_array(array1, array2a))
	println("")

	//true
	array2b := []int{4, 5, 6, 7, 1, 2, 3}
	fmt.Printf("%t", rotate_array(array1, array2b))
	println("")

	//false
	array2c := []int{4, 5, 6, 9, 1, 2, 3}
	fmt.Printf("%t", rotate_array(array1, array2c))
	println("")

	//false
	array2d := []int{4, 6, 5, 7, 1, 2, 3}
	fmt.Printf("%t", rotate_array(array1, array2d))
	println("")

	//false
	array2e := []int{4, 5, 6, 7, 0, 2, 3}
	fmt.Printf("%t", rotate_array(array1, array2e))
	println("")

	//true
	array2f := []int{1, 2, 3, 4, 5, 6, 7}
	fmt.Printf("%t", rotate_array(array1, array2f))
	println("")
}

func rotate_array(list1 []int, list2 []int) bool {
	if len(list1) != len(list2) {
		return false
	}
	key := list1[0]
	key_loc := -1
	for i := range list2 {
		if list2[i] == key {
			key_loc = i
			break
		}
	}
	if key_loc == -1 {
		return false
	}

	for i := range list1 {
		j := (key_loc + i) % len(list1)
		if list1[i] != list2[j] {
			return false
		}
	}
	return true
}
