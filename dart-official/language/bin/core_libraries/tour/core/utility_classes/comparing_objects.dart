import 'dart:async';

class Name implements Comparable<Name> {
  final String name;
  const Name(this.name);

  @override
  int compareTo(Name other) => name.length - other.name.length;
}

void main() {
  final short = const Name('Bob');
  final long = const Name('Toby');
  assert(short.compareTo(long) < 0);
}
