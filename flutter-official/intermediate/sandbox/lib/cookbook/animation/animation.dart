import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/animation/animate_page_route_transition.dart';
import 'package:sandbox/cookbook/animation/animate_widget_using_physics_simulation.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class Animation extends StatelessWidget {
  const Animation({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(
      title: 'Animation',
      widgets: [
        AnimatePageRouteTransition(),
        AnimateWidgetUsingPhysicsSimulation(),
      ],
    );
  }
}
