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

void main(List<String> arguments) {
  forInLoop();
  firstAndLast();
}
