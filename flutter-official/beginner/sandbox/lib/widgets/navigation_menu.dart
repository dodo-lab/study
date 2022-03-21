import 'package:flutter/material.dart';

class NavigationMenu extends StatelessWidget {
  final String title;
  final List<Widget> widgets;
  const NavigationMenu({Key? key, required this.title, required this.widgets})
      : super(key: key);

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
        title: Text(title),
      ),
      body: ListView(children: divided),
    );
  }
}
