class Person {
  String firstName;

  Person(this.firstName);
}

void main() {
  final person = Person('Bob');
  final Object obj = person;

  final firstName = (obj as Person).firstName;
  print('Forced type conversion: $firstName');

  // ignore: unnecessary_type_check
  if (obj is Person) {
    print('Type check: ${obj.firstName}');
  }
}
