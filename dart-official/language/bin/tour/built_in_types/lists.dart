void spreadOperator() {
  final list = [1, 2, 3];
  final list2 = [0, ...list];
  assert(list2.length == 4);
  print(list2);
}

void nullableSpreadOperator() {
  var list;
  var list2 = [0, ...?list];
  assert(list2.length == 1);
  print(list2);
}

void collectionIf(bool promoActive) {
  var nav = ['Home', 'Furniture', 'Plants', if (promoActive) 'Outlet'];
  print(nav);
}

void collectionFor() {
  final listOfInts = [1, 2, 3];
  final listOfStrings = ['#0', for (var i in listOfInts) '#$i'];
  assert(listOfStrings[1] == '#1');
  print(listOfStrings);
}

void main() {
  spreadOperator();
  nullableSpreadOperator();
  collectionIf(true);
  collectionIf(false);
  collectionFor();
}
