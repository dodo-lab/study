void where() {
  final evenNumbers = const [1, -2, 3, 42].where((number) => number.isEven);

  for (final number in evenNumbers) {
    print('$number is even.');
  }

  if (evenNumbers.any((number) => number.isNegative)) {
    print('evenNumbers contains negative numbers.');
  }

  final largeNumbers = evenNumbers.where((number) => number > 1000);
  if (largeNumbers.isEmpty) {
    print('largeNumbers is empty!');
  }
}

void takeWhileAndSkipWhile() {
  const numbers = [1, 3, -2, 0, 4, 5];

  // 値が'0'より前の要素を抽出
  final numbersUntilZero = numbers.takeWhile((value) => value != 0);
  print('Numbers until 0: $numbersUntilZero');

  // 値が'0'以降の要素を抽出
  final numbersStartingAtZero = numbers.skipWhile((value) => value != 0);
  print('Numbers starting at 0: $numbersStartingAtZero');
}

void main() {
  where();
  takeWhileAndSkipWhile();
}
