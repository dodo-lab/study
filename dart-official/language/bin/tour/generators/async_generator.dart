Stream<int> asyncNaturalsTo(int n) async* {
  int k = 0;
  while (k < n) {
    yield k++;
  }
}

void main() async {
  final values = asyncNaturalsTo(5);
  await for (var value in values) {
    print(value);
  }
}
