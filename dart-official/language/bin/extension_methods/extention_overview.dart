extension NumberParsing on String {
  int parseInt() {
    return int.parse(this);
  }
}

void main() {
  final n = '128'.parseInt();
  assert(n == 128);
}
