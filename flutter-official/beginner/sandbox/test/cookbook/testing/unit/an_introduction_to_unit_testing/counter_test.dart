import 'package:sandbox/cookbook/testing/unit/an_introduction_to_unit_testing/counter.dart';
import 'package:test/test.dart';

void main() {
  group('Counter', () {
    test('value should be start at 0', () {
      expect(Counter().value, 0);
    });
    test('Counter value should be incremented', () {
      final counter = Counter();
      counter.increment();
      expect(counter.value, 1);
    });
    test('value should be decremented', () {
      final counter = Counter();
      counter.decrement();
      expect(counter.value, -1);
    });
  });
}
