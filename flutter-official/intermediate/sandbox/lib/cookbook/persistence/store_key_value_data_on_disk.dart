import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class StoreKeyValueDataOnDisk extends StatefulWidget {
  const StoreKeyValueDataOnDisk({Key? key}) : super(key: key);

  @override
  _StoreKeyValueDataOnDiskState createState() =>
      _StoreKeyValueDataOnDiskState();
}

class _StoreKeyValueDataOnDiskState extends State<StoreKeyValueDataOnDisk> {
  int _counter = 0;

  @override
  void initState() {
    super.initState();
    _loadCounter();
  }

  void _loadCounter() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _counter = (prefs.getInt('counter') ?? 0);
    });
  }

  void _incrementCounter() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _counter++;
      prefs.setInt('counter', _counter);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('StoreKeyValueDataOnDisk')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('You have pushed the button this many times:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
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
