import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/animation/animation.dart' as animation;
import 'package:sandbox/cookbook/forms/forms.dart';
import 'package:sandbox/cookbook/persistence/persistence.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class Cookbook extends StatelessWidget {
  const Cookbook({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(
      title: 'Cookbook',
      widgets: [
        animation.Animation(),
        Forms(),
        Persistence(),
      ],
    );
  }
}
