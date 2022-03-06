void printElement(int element) {
  print(element);
}

void variableFunction() {
  loudify(String msg) => '!!! ${msg.toUpperCase()} !!!';

  print(loudify('hello'));
}

void main() {
  final list = [1, 2, 3];
  list.forEach(printElement);
  variableFunction();
}
