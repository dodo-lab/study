import 'package:flutter/material.dart';

class PassArgumentsToNamedRouteArguments {
  final String title;
  final String message;

  PassArgumentsToNamedRouteArguments(this.title, this.message);
}

class PassArgumentsToNamedRoute extends StatelessWidget {
  const PassArgumentsToNamedRoute({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Pass arguments to a named route'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () {
                Navigator.pushNamed(
                  context,
                  ExtractArgumentsScreen.routeName,
                  arguments: PassArgumentsToNamedRouteArguments(
                    'Extract Arguments Screen',
                    'This message is extracted in the build methods',
                  ),
                );
              },
              child: const Text('Navigate to screen that extracts arguments'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.pushNamed(
                  context,
                  PassArgumentsScreen.routeName,
                  arguments: PassArgumentsToNamedRouteArguments(
                    'Accept Arguments Screen',
                    'This message is extracted in the onGenerateRoute function.',
                  ),
                );
              },
              child: const Text('Navigate to a named that accepts arguments'),
            ),
          ],
        ),
      ),
    );
  }
}

class ExtractArgumentsScreen extends StatelessWidget {
  const ExtractArgumentsScreen({Key? key}) : super(key: key);

  static const routeName =
      'cookbook/navigation/pass_arguments_to_a_named_route/extract_arguments';

  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)!.settings.arguments
        as PassArgumentsToNamedRouteArguments;

    return Scaffold(
      appBar: AppBar(
        title: Text(args.title),
      ),
      body: Center(
        child: Text(args.message),
      ),
    );
  }
}

class PassArgumentsScreen extends StatelessWidget {
  final String title;
  final String message;

  const PassArgumentsScreen(
      {Key? key, required this.title, required this.message})
      : super(key: key);

  static const routeName =
      'cookbook/navigation/pass_arguments_to_a_named_route/pass_arguments';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
        child: Text(message),
      ),
    );
  }
}
