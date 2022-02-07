import 'package:flutter/material.dart';

class NavigationBasics extends StatelessWidget {
  const NavigationBasics({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const FirstRoute();
  }
}

class FirstRoute extends StatelessWidget {
  const FirstRoute({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('First Route'),
      ),
      body: Center(
        child: ElevatedButton(
          child: const Text('Open route'),
          onPressed: () {
            // Navigate to second route when tapped.
          },
        ),
      ),
    );
  }
}
