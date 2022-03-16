class Person {
  final String firstName, lastName;

  Person(this.firstName, this.lastName);

  @override
  int get hashCode => Object.hash(firstName, lastName);

  @override
  bool operator ==(dynamic other) {
    return other is Person &&
        other.firstName == firstName &&
        other.lastName == lastName;
  }
}

void main() {
  final p1 = Person('Bob', 'Smith');
  final p2 = Person('Bob', 'Smith');
  final p3 = Person('Bob', 'Toby');
  final p4 = 'not a person';
  assert(p1.hashCode == p2.hashCode);
  assert(p1 == p2);
  assert(p1 != p3);
  assert(p1 != p4);
}
