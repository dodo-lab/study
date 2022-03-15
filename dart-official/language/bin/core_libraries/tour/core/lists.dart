void main() {
  // Create on empty list os stings.
  final grains = <String>[];
  assert(grains.isEmpty);

  // Create a list using a list literal.
  final fruits = ['oranges', 'apples'];

  // Add a list.
  fruits.add('kiwis');
  fruits.addAll(['grapes', 'bananas']);

  // Get the list length.
  assert(fruits.length == 5);

  // Sort a list.
  print('Before sort: $fruits');
  fruits.sort((a, b) => a.compareTo(b));
  assert(fruits[0] == 'apples');
  print('After sort : $fruits');

  // Remove a single item.
  final appleIndex = fruits.indexOf('apples');
  if (appleIndex != -1) {
    fruits.removeAt(appleIndex);
    assert(fruits.length == 4);
    print('Removed apples: $fruits');
  }

  // Remove all elements from a list.
  fruits.clear();
  assert(fruits.isEmpty);

  // It is also possible to generate a list from the constructor.
  final vegetables = List.filled(10, 'broccoli');
  assert(vegetables.every((v) => v == 'broccoli'));
  print(vegetables);
}
