import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/networking/delete_data_on_the_internet.dart';
import 'package:sandbox/cookbook/networking/fetch_data_from_the_internet.dart';
import 'package:sandbox/cookbook/networking/parse_json_in_the_background.dart';
import 'package:sandbox/cookbook/networking/send_data_to_the_internet.dart';
import 'package:sandbox/cookbook/networking/update_data_over_the_internet.dart';
import 'package:sandbox/cookbook/networking/work_with_web_sockets.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class Networking extends StatelessWidget {
  const Networking({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(title: 'Networking', widgets: [
      FetchDataFromTheInternet(),
      DeleteDataOnTheInternet(),
      ParseJsonInTheBackground(),
      SendDataToTheInternet(),
      UpdateDataOverTheInternet(),
      WorkWithWebSockets(),
    ]);
  }
}
