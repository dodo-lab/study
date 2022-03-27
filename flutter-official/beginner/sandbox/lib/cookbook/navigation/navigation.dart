import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/navigation/animate_widget_across_screens.dart';
import 'package:sandbox/cookbook/navigation/navigate_to_a_new_screen_and_back.dart';
import 'package:sandbox/cookbook/navigation/navigate_with_named_routes.dart';
import 'package:sandbox/cookbook/navigation/pass_arguments_to_a_named_route.dart';
import 'package:sandbox/cookbook/navigation/return_data_from_a_screen.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class Navigation extends StatelessWidget {
  const Navigation({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(title: 'Navigation', widgets: [
      AnimateWidgetAcrossScreens(),
      NavigateToNewScreenAndBack(),
      NavigateWithNamedRoutes(),
      PassArgumentsToNamedRoute(),
      ReturnDataFromScreen(),
    ]);
  }
}
