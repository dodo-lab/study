# memo

1. `go mod init example.hello`
2. `go mod edit -replace example.com/greetings=../greeting` : 'example.com/greetings'がローカルの'../greeting'モヅジュールを参照するように
3. `go mod tidy`
4. `go run .`
