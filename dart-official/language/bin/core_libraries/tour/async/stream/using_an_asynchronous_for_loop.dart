import 'dart:io';

void searchFilesByStream(String path) {
  print('----searchFilesByStream');
  FileSystemEntity.isDirectory(path).then((isDir) {
    if (isDir) {
      final startingDir = Directory(path);
      startingDir.list().listen((entity) {
        if (entity is File) {
          print(entity.path);
        }
      });
    }
  });
}

Future<void> searchFilesByAwait(String path) async {
  print('----searchFilesByAwait');
  if (await FileSystemEntity.isDirectory(path)) {
    final startingDir = Directory(path);
    await for (final entity in startingDir.list()) {
      if (entity is File) {
        print(entity.path);
      }
    }
  }
}

void main() async {
  await searchFilesByAwait('./');
  searchFilesByStream('./');
}
