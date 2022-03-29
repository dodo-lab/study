import 'package:test/test.dart';
import 'package:test_app/models/favorites.dart';

void main() {
  group('Testing App Provider', () {
    final favorites = Favorites();

    test('A new item should be added', () {
      const number = 35;
      favorites.add(number);
      expect(favorites.items.contains(number), true);
    });
    test('An item should be removed', () {
      const number = 45;
      favorites.add(number);
      expect(favorites.items.contains(number), true);
      favorites.remove(number);
      expect(favorites.items.contains(number), false);
    });
  });
}
