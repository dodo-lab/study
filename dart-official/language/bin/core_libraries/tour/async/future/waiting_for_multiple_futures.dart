Future<void> futureFunc(int delaySeconds, String printStr) async {
  return Future.delayed(Duration(seconds: delaySeconds), () => print(printStr));
}

void main() async {
  await Future.wait([
    futureFunc(1, "The first function is completed."),
    futureFunc(2, "The second function is completed."),
    futureFunc(3, "The third function is completed."),
  ]);

  print('All function is completed.');
}
