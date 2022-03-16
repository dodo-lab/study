final coffees = <String>[];
final teas = ['green', 'black', 'chamomile', 'earl grey'];
final hawaiianBeaches = {
  'Oahu': ['Waikiki', 'Kailua', 'Waimanalo'],
  'Big Island': ['Wailea Bay', 'Pololu Beach'],
  'Kauai': ['Hanalei', 'Poipu'],
};

void empty() {
  assert(coffees.isEmpty);
  assert(teas.isNotEmpty);
}

void forEach() {
  // ignore: avoid_function_literals_in_foreach_calls
  teas.forEach((tea) => print('I drink $tea'));

  hawaiianBeaches.forEach((key, value) {
    print('I want to visit $key and swim at $value');
  });
}

void map() {
  final loudTeas = teas.map((tea) => tea.toUpperCase()).toList();
  loudTeas.forEach(print);
}

void where() {
  bool isDecaffeinated(String teaName) => teaName == 'chamomile';

  final decaffeinatedTeas = teas.where(isDecaffeinated);
  print(decaffeinatedTeas);

  assert(teas.any(isDecaffeinated));
  assert(!teas.every(isDecaffeinated));
}

void main() {
  empty();
  forEach();
  map();
  where();
}
