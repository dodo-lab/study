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

func main() {
	normalSwitch('C')
	normalSwitch('g')
	normalSwitch('7')
	normalSwitch('-')
}
