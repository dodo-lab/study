import 'package:flutter/material.dart';

class NamedRoute extends StatelessWidget {
  const NamedRoute({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NamedRouteFirstScreen();
  }
}

class NamedRouteFirstScreen extends StatelessWidget {
  const NamedRouteFirstScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('First Screen')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.pushNamed(
                context, '/cookbook/navigation/named-route/second');
          },
          child: const Text('Launch screen'),
        ),
      ),
    );
  }
}

class NamedRouteSecondScreen extends StatelessWidget {
  const NamedRouteSecondScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Second Screen')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.pop(context);
          },
          child: const Text('Go back!'),
        ),
      ),
    );
  }
}
