import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/navigation/navigate_with_named_routes.dart';
import 'package:sandbox/cookbook/navigation/navigation.dart';
import 'package:sandbox/cookbook/networking/networking.dart';
import 'package:sandbox/development/development.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

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
              title: 'Top',
              widgets: [
                Navigation(),
                Networking(),
                Development(),
              ],
            ),
        NavigateWithNamedRoutes.routeName: (context) =>
            const NavigateWithNamedRoutes(),
        NamedRouteSecondScreen.routeName: (context) =>
            const NamedRouteSecondScreen(),
      },
    );
  }
}
