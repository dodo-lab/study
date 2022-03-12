// Synchronous generator
Iterable<int> naturalsTo(int n) sync* {
  int k = 0;
  while (k < n) {
    yield k++;
  }
}

// Generator using recursive calls
Iterable<int> naturalsDownFrom(int n) sync* {
  if (n > 0) {
    yield n;
    yield* naturalsDownFrom(n - 1);
  }
}

void main() {
  print('---naturalsTo---');
  final values = naturalsTo(5);
  for (var value in values) {
    print(value);
  }

  print('---naturalsDownFrom---');
  final downValues = naturalsDownFrom(5);
  for (var value in downValues) {
    print(value);
  }
}
