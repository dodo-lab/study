import 'dart:convert';
import 'dart:io';

Future<void> readFileByAwaitFor() async {
  print('---readFileByAwaitFor');
  final changeLog = File('./CHANGELOG.md');
  final inputStream = changeLog.openRead();

  final lines =
      inputStream.transform(utf8.decoder).transform(const LineSplitter());
  try {
    await for (final line in lines) {
      print(line);
    }
    print('File read is completed.');
  } catch (e) {
    print(e);
  }
}

void readFileByStream() {
  print('---readFileByStream');
  final changeLog = File('./CHANGELOG.md');
  final inputStream = changeLog.openRead();

  inputStream.transform(utf8.decoder).transform(const LineSplitter()).listen(
      (line) {
    print(line);
  }, onDone: () {
    print('File read is completed.');
  }, onError: (e) {
    print(e);
  });
}

void main() async {
  await readFileByAwaitFor();
  readFileByStream();
}
