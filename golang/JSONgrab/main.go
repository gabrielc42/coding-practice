package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

// statements in Go can be classified into various categories such as
// Declaration - variables, constants, types
// Control flow - flow of execution
// Function - define and invoke functions
// Advanced - more complex, deal w/ advanced Go features

func main() {
	// goto statements
	i := 0
loop:
	if i < 10 {
		fmt.Printf("%d ", i)
		i++
		goto loop
	}
	// 0 1 2 3 4 5 6 7 8 9

	// break and continue
	for i := 0; i < 10; i++ {
		if i == 5 {
			break
		}
		fmt.Printf("%d ", i)
	}
	// 0 1 2 3 4

	for i := 0; i < 10; i++ {
		if i%2 == 0 {
			continue
		}
		fmt.Printf("%d ", i)
	}
	// 1 3 5 7 9

	// anonymous function
	// execute when called
	sum := func(a, b int) int {
		return a + b
	}

	// executes immediately
	func() {
		fmt.Println("Hello, anonymous function!")
	}()

	fmt.Println("Sum is : ", sum(3, 4))

	// Hello, anonymous function!
	// Sum is : 7

	// function closure
	a := adder()
	fmt.Println(a(1)) // 0 + 1 = 1
	fmt.Println(a(2)) // 1 + 2 = 3
	fmt.Println(a(3)) // 3 + 3 = 6

	// blank identifier
	_, err := someFunction()
	if err != nil {
		fmt.Println("Error:", err)
	}

	// variadic functions
	// dynamic number of args
	result := concatStrings(" ", "hello", "world", "!")
	fmt.Println(result) // Output: "hello world !"

	// type assertion
	performOperation(77, "hey", 0.54)

	// label statements
outer:
	for i := 0; i < 5; i++ {
		for j := 0; j < 5; j++ {
			if i*j >= 10 {
				break outer
			}
			fmt.Println(i, j)
		}
	}

	// select statements
	select {
	case <-channel1:
		// handle channel1
	case data := <-channel2:
		// handle channel2
	case channel3 <- value:
		// handle channel4
	default:
		// handle default case
	}

}

// panic and recover
func handleRequest(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if r := recover(); r != nil {
			log.Println("Recovered error: ", r)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		}
	}()
	// code that may cause a panic, will be handled by recover()
	panic("Request not handle properly")
}

// output will be printed

// function closure
func adder() func(int) int {
	total := 0               // outer function's variable
	return func(x int) int { // modify total's value across function calls
		total += x // references total and modify it
		return total
	}
}

// variadic functions
// dynamic number of args
func concatStrings(separator string, words ...string) string {
	var result string
	for i, s := range words {
		if i > 0 {
			result += separator
		}
		result += s
	}
	return result
}

// type assertion
func performOperation(args ...interface{}) {
	for _, arg := range args {
		switch val := arg.(type) {
		case int:
			// Handle integer input
			fmt.Println("Integer input:", val)
		case float64:
			// Handle floating-point input
			fmt.Println("Float input:", val)
		case string:
			// Handle string input
			fmt.Println("String input:", val)
		default:
			// Handle unrecognized input
			fmt.Println("Unrecognized input:", val)
		}
	}
}

// defer statements
func readFile(filename string) error {
	file, err := os.Open(filename)
	if err != nil {
		return err
	}
	defer file.Close() // defer file.Close() call until function returns

	// read file contents
	return nil
}
