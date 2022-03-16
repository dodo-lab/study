class FooException implements Exception {
  final String? msg;

  FooException([this.msg]);

  @override
  String toString() => msg ?? 'FooException';
}

void main() {
  try {
    throw FooException();
  } on FooException catch (e) {
    print('catch error: $e');
  }
}
