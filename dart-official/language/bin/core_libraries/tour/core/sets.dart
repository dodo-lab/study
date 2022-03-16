void main() {
  // Create an empty set of strings.
  final ingredients = <String>{};
  assert(ingredients.isEmpty);

  // Add new items to it.
  ingredients.addAll(['gold', 'titanium', 'xenon']);
  assert(ingredients.length == 3);

  // Adding a duplicate item has no effect.
  ingredients.add('gold');
  assert(ingredients.length == 3);

  // Check whether on item is in the set.
  assert(ingredients.contains('titanium'));
  assert(ingredients.containsAll(['titanium', 'xenon']));
  assert(!ingredients.containsAll(['titanium', 'xenon', 'silver']));

  // Create the intersection of two sets.
  final nobleGases = {'xenon', 'argon'};
  final intersection = ingredients.intersection(nobleGases);
  assert(intersection.length == 1);
  assert(intersection.contains('xenon'));

  // Remove an item from a set.
  print('Before remove: $ingredients');
  ingredients.remove('gold');
  assert(ingredients.length == 2);
  print('After remove : $ingredients');

  // It is also possible to create a set from the constructor.
  // ignore: prefer_collection_literals
  final atomicNumbers = Set.from([79, 22, 54]);
  assert(atomicNumbers.length == 3);
}
