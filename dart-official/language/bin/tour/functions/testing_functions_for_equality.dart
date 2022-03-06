void foo() {}

class A {
  static void bar() {}
  void baz() {}
}

void main() {
  Function x;

  // Comparing top-level functions
  x = foo;
  assert(foo == x);

  // Comparing static methods
  x = A.bar;
  assert(A.bar == x);

  // Comparing instance methods
  final v = A();
  final w = A();
  final y = w;
  x = w.baz;
  assert(y.baz == x);
  assert(v.baz != x);
  print('ok');
}
