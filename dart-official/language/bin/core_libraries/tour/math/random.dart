import 'dart:math';

void main() {
  final random = Random();
  final secureRandom = Random.secure();

  final doubles = <double>[];
  final ints = <int>[];
  final bools = <bool>[];
  final secureDoubles = <double>[];

  for (var i = 0; i < 5; i++) {
    doubles.add(random.nextDouble()); // Between 0.0 and 1.0.
    ints.add(random.nextInt(10)); // Between 0 and 9.
    bools.add(random.nextBool()); // true or false
    secureDoubles.add(secureRandom.nextDouble());
  }

  print('doubles: $doubles');
  print('ints: $ints');
  print('bools: $bools');
  print('secureDoubles: $secureDoubles');
}
