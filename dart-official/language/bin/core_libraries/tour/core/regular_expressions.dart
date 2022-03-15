void main() {
  final numbers = RegExp(r'\d+');

  final allCharacters = 'llamas live fifteen to twenty years';
  final someDigits = 'llamas live 15 to 20 years';

  assert(!allCharacters.contains(numbers));
  assert(someDigits.contains(numbers));

  final exedOut = someDigits.replaceAll(numbers, 'XX');
  assert(exedOut == 'llamas live XX to XX years');
  print('from: $someDigits');
  print('to  : $exedOut');

  assert(numbers.hasMatch(someDigits));

  for (final match in numbers.allMatches(someDigits)) {
    print('matched: ${match.group(0)}');
  }
}
