import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/navigation/namedRoute.dart';
import 'package:sandbox/cookbook/navigation/navigationBasics.dart';
import 'package:sandbox/cookbook/navigation/returningData.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class Navigation extends StatelessWidget {
  const Navigation({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(title: 'Navigation', widgets: [
      NavigationBasics(),
      NamedRoute(),
      ReturingData(),
    ]);
  }
}
