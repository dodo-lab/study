import 'dart:io';

Future<void> write(FileMode mode) async {
  final logFile = File('log.txt');
  final sink = logFile.openWrite(mode: mode);
  sink.write('FILE ACCESSED ${DateTime.now()}\n');
  await sink.flush();
  await sink.close();
}

void main() async {
  await write(FileMode.write);
  await write(FileMode.append);
}
