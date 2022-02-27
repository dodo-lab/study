void conversionNumbersAndStrings() {
  final ten = int.parse('10');
  assert(ten == 10);

  final onePointOne = double.parse('1.1');
  assert(onePointOne == 1.1);

  final oneAsString = 1.toString();
  assert(oneAsString == '1');

  final piAsString = 3.1415926.toStringAsFixed(2);
  assert(piAsString == '3.14');
}

void bitOperation() {
  assert((2 << 1) == 4);
  assert((2 << 2) == 8);
  assert((3 | 4) == 7);
  assert((3 & 4) == 0);
}

void main() {
  conversionNumbersAndStrings();
  bitOperation();
}
