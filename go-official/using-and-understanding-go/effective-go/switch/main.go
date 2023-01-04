package main

import "fmt"

func normalSwitch(c byte) {
	switch {
	case 'A' <= c && c <= 'Z':
		fmt.Printf("A to Z : %c\n", c)
	case 'a' <= c && c <= 'z':
		fmt.Printf("a to z : %c\n", c)
	case '0' <= c && c <= '9':
		fmt.Printf("0 to 9 : %c\n", c)
	default:
		fmt.Printf("unknown : %c\n", c)
	}
}

func separateSwitch(c byte) {
	switch c {
	case 'A', 'B', 'C':
		fmt.Printf("A to C : %c\n", c)
	case 'a', 'b', 'c':
		fmt.Printf("a to c : %c\n", c)
	case '0', '1', '2', '3':
		fmt.Printf("0 to 3 : %c\n", c)
	default:
		fmt.Printf("unknown : %c\n", c)
	}
}

func main() {
	fmt.Println("---normalSwitch")
	normalSwitch('C')
	normalSwitch('g')
	normalSwitch('7')
	normalSwitch('-')

	fmt.Println("\n---separateSwitch")
	separateSwitch('A')
	separateSwitch('b')
	separateSwitch('2')
	separateSwitch('G')
}
