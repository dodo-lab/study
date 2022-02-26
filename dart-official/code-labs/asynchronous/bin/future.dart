Future<void> fetchUserOrder() {
  return Future.delayed(const Duration(seconds: 2), () => print('Large Latte'));
}

Future<void> fetchUserOrderError() {
  return Future.delayed(const Duration(seconds: 3),
      () => throw Exception('Logout failed: user ID is invalid'));
}

void main(List<String> arguments) {
  fetchUserOrder();
  fetchUserOrderError();
  print('Fetching user order...');
}
