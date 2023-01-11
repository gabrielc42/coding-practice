package main

import "fmt"

func main() {
	fmt.Println(non_repeating("abcab"))   // should return 'c'
	fmt.Println(non_repeating("abab"))    // should return ""
	fmt.Println(non_repeating("aabbbc"))  // should return 'c'
	fmt.Println(non_repeating("aabbdbc")) // should return 'd'
}

func non_repeating(s string) string {
	m := make(map[rune]uint, len(s))
	for _, c := range s {
		m[c]++
	}

	for _, c := range s {
		if m[c] == 1 {
			return string(c)
		}
	}
	return ""
}
