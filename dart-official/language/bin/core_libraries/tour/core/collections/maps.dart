void generateMap() {
  // Maps often use strings as keys.
  final hawaiianBeaches = {
    'Oahu': ['Waikiki', 'Kailua', 'Waimanalo'],
    'Big Island': ['Wailea Bay', 'Pololu Beach'],
    'Kauai': ['Hanalei', 'Poipu'],
  };

  // Maps can be built from a constructor.
  final searchTerms = Map();

  // Maps are parameterized types; you can specify what types the key and value should be.
  final nobleGases = Map<int, String>();
}

void main() {
  final nobleGases = {54: 'xenon'};

  // Retrieve a value with a key.
  assert(nobleGases[54] == 'xenon');

  // Check whether a map contains a key.
  assert(nobleGases.containsKey(54));

  // Use the putIfAbsent() method.
  nobleGases.putIfAbsent(99, () => 'gold');
  nobleGases.putIfAbsent(99, () => 'silver');
  assert(nobleGases.length == 2);
  assert(nobleGases[99] == 'gold');
  assert(!nobleGases.containsValue('silver'));

  // Remove a key and its value.
  nobleGases.remove(54);
  assert(!nobleGases.containsKey(54));

  final hawaiianBeaches = {
    'Oahu': ['Waikiki', 'Kailua', 'Waimanalo'],
    'Big Island': ['Wailea Bay', 'Pololu Beach'],
    'Kauai': ['Hanalei', 'Poipu'],
  };

  // Get all the keys as an unordered collection(an Iterable).
  final keys = hawaiianBeaches.keys;
  assert(keys.length == 3);
  assert(Set.from(keys).contains('Oahu'));
  print('keys: $keys');

  // Get all the values as an unordered collection(an Iterable of Lists).
  final values = hawaiianBeaches.values;
  assert(values.length == 3);
  assert(values.any((v) => v.contains('Waikiki')));
  print('values: $values');
}
