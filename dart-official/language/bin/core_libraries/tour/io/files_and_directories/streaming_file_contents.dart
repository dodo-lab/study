import 'dart:convert';
import 'dart:io';

void main() async {
  final changeLog = File('CHANGELOG.md');
  final inputStream = changeLog.openRead();

  final lines = utf8.decoder.bind(inputStream).transform(const LineSplitter());
  try {
    await for (final line in lines) {
      print('Got ${line.length} characters from stream');
    }
    print('file is now closed');
  } catch (e) {
    print(e);
  }
}
