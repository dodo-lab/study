Future<String> fetchUserOrder() {
  return Future.delayed(
    const Duration(seconds: 3),
    () => throw 'Cannot locate user order',
  );
}

Future<void> printOrderMessage() async {
  try {
    print('Awaiting user order...');
    final order = await fetchUserOrder();
    print(order);
  } catch (err) {
    print('Caught error: $err');
  }
}

void main() async {
  await printOrderMessage();
}
