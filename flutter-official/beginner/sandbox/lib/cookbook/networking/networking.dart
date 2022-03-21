import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/networking/fetch_data_from_the_internet.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class Networking extends StatelessWidget {
  const Networking({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(title: 'Networking', widgets: [
      FetchDataFromTheInternet(),
    ]);
  }
}
