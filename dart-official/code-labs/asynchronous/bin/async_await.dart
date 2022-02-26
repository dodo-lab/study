Future<String> fetchUserOrder() {
  return Future.delayed(const Duration(seconds: 4), () => 'Large Latte');
}

Future<void> printOrderMessage() async {
  print('Awaiting user order...');
  final order = await fetchUserOrder();
  print('Your order is: $order');
}

void countSeconds(int sec) {
  for (var i = 1; i <= sec; i++) {
    Future.delayed(Duration(seconds: i), () => print(i));
  }
}

void main() async {
  countSeconds(4);
  await printOrderMessage();
}
