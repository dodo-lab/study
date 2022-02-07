import 'package:flutter/material.dart';
import './cookbook/navigation/navigationBasics.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Flutter Demo',
      home: NavigationMenu(
        widgets: [NavigationBasics()],
      ),
      // home: FirstRoute(),
    );
  }
}

class NavigationMenu extends StatelessWidget {
  final List<Widget> widgets;
  const NavigationMenu({Key? key, required this.widgets}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Select Route'),
      ),
      body: ListView.builder(
        itemBuilder: (context, i) {
          final widget = widgets[i];
          return ListTile(
            title: Text(widget.toString()),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => widget),
              );
            },
          );
        },
        itemCount: widgets.length,
      ),
    );
  }
}
