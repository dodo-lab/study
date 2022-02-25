void forInLoop() {
  const iterable = ['Salad', 'Popcorn', 'Toast'];
  for (final element in iterable) {
    print(element);
  }
}

void firstAndLast() {
  const Iterable<String> iterable = ['Salad', 'Popcorn', 'Toast'];

  // 空のIterableに'first'や'last'でアクセスすると、StateErrorが発生するため、'isNotEmpty'でチェックしておく
  if (iterable.isNotEmpty) {
    print('The first element is ${iterable.first}');
    print('The last element is ${iterable.last}');
  }
}

bool predicate(String item) {
  return item.length > 5;
}

void firstWhere() {
  const items = ['Salad', 'Popcorn', 'Toast', 'Lasagne'];

  final foundItem1 = items.firstWhere((item) => item.length > 5);
  print('foundItem1: $foundItem1');

  final foundItem2 = items.firstWhere((item) {
    return item.length > 5;
  });
  print('foundItem2: $foundItem2');

  final foundItem3 = items.firstWhere(predicate);
  print('foundItem3: $foundItem3');

  // 第一引数の条件にマッチしない場合、orElseを指定しないとStateErrorが発生する
  final foundItem4 = items.firstWhere(
    (item) => item.length > 10,
    orElse: () => 'None!',
  );
  print('foundItem4: $foundItem4');
}

void main(List<String> arguments) {
  forInLoop();
  firstAndLast();
  firstWhere();
}
