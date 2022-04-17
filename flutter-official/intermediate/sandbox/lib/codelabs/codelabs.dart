import 'package:flutter/material.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/basic_flutter_layout_concepts.dart';
import 'package:sandbox/codelabs/implicit-animations/implicit-animations.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class Codelabs extends StatelessWidget {
  const Codelabs({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(
      title: 'Codelabs',
      widgets: [
        ImplicitAnimations(),
        BasicFlutterLayoutConcepts(),
      ],
    );
  }
}
