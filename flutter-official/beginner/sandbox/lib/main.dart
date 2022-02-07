import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/navigation/namedRoute.dart';
import 'package:sandbox/cookbook/navigation/navigationBasics.dart';
import 'package:sandbox/cookbook/navigation/returningData.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      initialRoute: '/',
      routes: {
        '/': (context) => const NavigationMenu(
            widgets: [NavigationBasics(), NamedRoute(), ReturingData()]),
        NamedRoute.routeName: (context) => const NamedRoute(),
        NamedRouteSecondScreen.routeName: (context) =>
            const NamedRouteSecondScreen(),
      },
    );
  }
}

class NavigationMenu extends StatelessWidget {
  final List<Widget> widgets;
  const NavigationMenu({Key? key, required this.widgets}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final tiles = widgets.map((widget) {
      return ListTile(
        title: Text(widget.toString()),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => widget),
          );
        },
      );
    });

    final divided = tiles.isNotEmpty
        ? ListTile.divideTiles(context: context, tiles: tiles).toList()
        : <Widget>[];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Select Route'),
      ),
      body: ListView(children: divided),
    );
  }
}
