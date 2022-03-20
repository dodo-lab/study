import 'dart:io';

void main() async {
  final config = File('config.txt');
  try {
    final contents = await config.readAsString();
    print(contents);
  } catch (e) {
    print(e);
  }
}
