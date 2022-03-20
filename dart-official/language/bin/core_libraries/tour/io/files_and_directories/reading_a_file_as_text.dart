import 'dart:io';

void main() async {
  final changeLog = File('CHANGELOG.md');

  // Put the whole file in a single string.
  final stringContents = await changeLog.readAsString();
  print('The file is ${stringContents.length} characters long.');

  // Put each line of the file into its own string.
  final lines = await changeLog.readAsLines();
  print('The file is ${lines.length} lines long.');
}
