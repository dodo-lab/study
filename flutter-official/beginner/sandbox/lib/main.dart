import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/navigation/namedRoute.dart';
import 'package:sandbox/cookbook/navigation/navigation.dart';
import 'package:sandbox/cookbook/networking/networking.dart';
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
              ],
            ),
        NamedRoute.routeName: (context) => const NamedRoute(),
        NamedRouteSecondScreen.routeName: (context) =>
            const NamedRouteSecondScreen(),
      },
    );
  }
}
