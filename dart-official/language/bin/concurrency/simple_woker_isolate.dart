import 'dart:convert';
import 'dart:io';
import 'dart:isolate';

void main() async {
  final jsonData = await _parseInBackground();

  print('number of JSON keys = ${jsonData.length}');
  print(jsonData.keys);
}

Future<Map<String, dynamic>> _parseInBackground() async {
  final p = ReceivePort();
  await Isolate.spawn(_readAndParseJson, p.sendPort);
  return await p.first;
}

Future _readAndParseJson(SendPort p) async {
  final fileData = await File('workspace.code-workspace').readAsString();
  final jsonData = jsonDecode(fileData);
  Isolate.exit(p, jsonData);
}
