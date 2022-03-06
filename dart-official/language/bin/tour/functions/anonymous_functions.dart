void main() {
  const list = ['apples', 'bananas', 'oranges'];
  // ignore: avoid_function_literals_in_foreach_calls
  list.forEach((item) => print('${list.indexOf(item)}: $item'));
}
