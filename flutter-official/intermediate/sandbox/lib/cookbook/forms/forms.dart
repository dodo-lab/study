import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/forms/create_and_style_text_field.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class Forms extends StatelessWidget {
  const Forms({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(
      title: 'Forms',
      widgets: [
        CreateAndStyleTextField(),
      ],
    );
  }
}
