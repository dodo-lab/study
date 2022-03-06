Function makeAdder(int addBy) {
  return (int i) => addBy + i;
}

void main() {
  final add2 = makeAdder(2);
  final add4 = makeAdder(4);

  assert(add2(3) == 5);
  assert(add4(3) == 7);
  print('ok');
}
