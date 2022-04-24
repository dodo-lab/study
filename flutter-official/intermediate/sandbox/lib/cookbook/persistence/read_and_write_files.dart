import 'dart:io';

import 'package:flutter/material.dart';
import 'package:path_provider/path_provider.dart';

class CounterStorage {
  Future<String> get _localPath async {
    final directory = await getApplicationDocumentsDirectory();
    return directory.path;
  }

  Future<File> get _localFile async {
    final path = await _localPath;
    return File('$path/counter.txt');
  }

  Future<int> readCounter() async {
    try {
      final file = await _localFile;

      final contents = await file.readAsString();
      return int.parse(contents);
    } catch (e) {
      return 0;
    }
  }

  Future<File> writeCounter(int counter) async {
    final file = await _localFile;
    return file.writeAsString('$counter');
  }
}

class ReadAndWriteFiles extends StatefulWidget {
  const ReadAndWriteFiles({Key? key}) : super(key: key);

  @override
  _ReadAndWriteFilesState createState() => _ReadAndWriteFilesState();
}

class _ReadAndWriteFilesState extends State<ReadAndWriteFiles> {
  final CounterStorage _storage = CounterStorage();
  int _counter = 0;

  @override
  void initState() {
    super.initState();
    _storage.readCounter().then((value) {
      setState(() {
        _counter = value;
      });
    });
  }

  Future<File> _incrementCounter() {
    setState(() {
      _counter++;
    });

    return _storage.writeCounter(_counter);
  }

  Future<File> _resetCounter() {
    setState(() {
      _counter = 0;
    });

    return _storage.writeCounter(_counter);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('ReadAndWriteFiles')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Button tapped $_counter time${_counter == 1 ? '' : 's'}'),
            ElevatedButton(
              onPressed: _resetCounter,
              child: const Text('reset'),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
