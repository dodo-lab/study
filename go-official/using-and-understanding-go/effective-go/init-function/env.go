package main

import (
	"fmt"
	"os"
)

var (
	home = os.Getenv("HOME")
	user = os.Getenv("USER")
	gopath = os.Getenv("GOPATH")
)

func init() {
	fmt.Println("---env init")
	PrintEnv()

	if user == "" {
		user = "user"
	}
	if home == "" {
		home = "/home/" + user
	}
	if gopath == "" {
		gopath = home + "/go"
	}
}

func PrintEnv() {
	fmt.Printf("HOME: %s\n", home)
	fmt.Printf("USER: %s\n", user)
	fmt.Printf("GOPATH: %s\n", gopath)
}
