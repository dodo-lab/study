import 'dart:convert';
import 'dart:io';

void main() async {
  final readme = File('README.md');

  final contents = await readme.readAsBytes();
  print('The file is ${contents.length} bytes long.');
  print(utf8.decode(contents.toList()));
}
