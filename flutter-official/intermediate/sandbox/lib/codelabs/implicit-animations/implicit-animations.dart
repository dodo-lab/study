import 'package:flutter/material.dart';
import 'package:sandbox/codelabs/implicit-animations/fade_in_text.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class ImplicitAnimations extends StatelessWidget {
  const ImplicitAnimations({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(
      title: 'ImplicitAnimations',
      widgets: [FadeInText()],
    );
  }
}
