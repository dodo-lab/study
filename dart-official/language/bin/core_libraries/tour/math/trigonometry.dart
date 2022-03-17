import 'dart:math';

void main() {
  // Cosine
  assert(cos(pi) == -1.0);

  // Sine
  final degrees = 30;
  final radians = degrees * (pi / 180);
  // radians is now 0.52359
  final sinOf30degrees = sin(radians);
  // sin 30° = 0.5
  assert((sinOf30degrees - 0.5).abs() < 0.01);

  print('radians: $radians');
  print('sinOf30degrees: $sinOf30degrees');
}
