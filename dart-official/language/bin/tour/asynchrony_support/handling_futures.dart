Future<String> lookUpVersion() async {
  return Future.delayed(
    const Duration(seconds: 1),
    () => '1.0.5',
  );
}

Future<void> checkVersion() async {
  final version = await lookUpVersion();
  print('version: $version');
}

void main() async {
  await checkVersion();
}
