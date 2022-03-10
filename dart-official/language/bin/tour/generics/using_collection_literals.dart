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

  names.forEach(print);
  uniqueNames.forEach(print);
  pages.forEach((key, value) {
    print('$key: $value');
  });
}
