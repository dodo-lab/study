import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/animation/animate_page_route_transition.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class Cookbook extends StatelessWidget {
  const Cookbook({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(
      title: 'Cookbook',
      widgets: [AnimatePageRouteTransition()],
    );
  }
}
