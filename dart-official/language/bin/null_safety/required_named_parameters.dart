void requiredName({int? a, required int? b, int? c, required int? d}) {
  print('a: $a, b: $b, c: $c, d: $d');
}

void main() {
  requiredName(b: null, d: 10);
}
