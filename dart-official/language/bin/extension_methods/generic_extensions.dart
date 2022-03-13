extension MyFancyList<T> on List<T> {
  int get doubleLength => length * 2;
  List<T> operator -() => reversed.toList();
  List<List<T>> split(int at) => [sublist(0, at), sublist(at)];
}

void main() {
  print('---doubleLength---');
  final numbers = [1, 2, 3];
  print(numbers.doubleLength);

  print('---operator---');
  final reversedNumbers = -numbers;
  for (var number in reversedNumbers) {
    print(number);
  }

  print('---split---');
  final splitNumbers = numbers.split(1);
  for (var items in splitNumbers) {
    print(items);
  }
}
