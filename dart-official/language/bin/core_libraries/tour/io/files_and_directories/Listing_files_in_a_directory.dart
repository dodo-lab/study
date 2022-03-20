import 'dart:io';

void main() async {
  final dir = Directory('./');

  try {
    final dirList = dir.list();
    await for (final f in dirList) {
      if (f is File) {
        print('Found file ${f.path}');
      } else if (f is Directory) {
        print('Found dir ${f.path}');
      }
    }
  } catch (e) {
    print(e);
  }
}
