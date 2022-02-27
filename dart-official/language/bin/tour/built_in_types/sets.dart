void normalSet() {
  final hologens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'};
  print(hologens);

  var elements = <String>{};
  elements.add('fluorine');
  print(elements);
  elements.addAll(hologens);
  print(elements);
  assert(elements.length == 5);
}

void emptySet() {
  var names = <String>{};
  print(names);
}

void constantSet() {
  final constants = const {
    'fluorine',
    'chlorine',
    'bromine',
    'iodine',
    'astatine'
  };
  // constants.add('add element');  // error
  print(constants);
}

void main() {
  normalSet();
  emptySet();
  constantSet();
}
