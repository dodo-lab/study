import 'package:flutter/material.dart';
import 'package:sandbox/development/data_and_backend/json_and_serialization/json_and_serialization.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class Development extends StatelessWidget {
  const Development({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(
      title: 'Development',
      widgets: [
        JsonAndSerialization(),
      ],
    );
  }
}
