Iterable<int> naturalsTo(int n) sync* {
  int k = 0;
  while (k < n) {
    yield k++;
  }
}

void main() {
  final values = naturalsTo(5);
  for (var value in values) {
    print(value);
  }
}
