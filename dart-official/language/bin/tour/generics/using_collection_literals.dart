// ignore_for_file: unnecessary_type_check

void main() {
  // List<String>
  final names = <String>['Seth', 'Kothy', 'Lars'];
  // Set<String>
  final uniqueNames = <String>{'Seth', 'Kothy', 'Lars'};
  // Map<String, String>
  final pages = <String, String>{
    'index.html': 'Homepage',
    'robots.txt': 'Hints for web robots',
    'humans.txt': 'We are people, not machines',
  };

  assert(names is List<String>);
  assert(uniqueNames is Set<String>);
  assert(pages is Map<String, String>);

  names.forEach(print);
  uniqueNames.forEach(print);
  pages.forEach((key, value) {
    print('$key: $value');
  });
}
