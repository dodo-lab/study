package main

import "fmt"

func PrintString(value interface{}) {
	str, ok := value.(string)
	if ok {
		fmt.Printf("string value is: %q\n", str)
	} else {
		fmt.Println("value is not a string")
	}
}

func main() {
	PrintString("test")
	PrintString(123)
	PrintString(true)
}