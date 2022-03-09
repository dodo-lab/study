class A {
  @override
  void noSuchMethod(Invocation invocation) {
    print('You tried to use a non-existent member: ${invocation.memberName}');
  }
}

void main() {
  dynamic a = A();
  a.hoge();
}
