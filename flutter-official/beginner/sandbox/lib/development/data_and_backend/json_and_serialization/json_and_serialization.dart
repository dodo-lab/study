import 'package:flutter/material.dart';
import 'package:sandbox/development/data_and_backend/json_and_serialization/serializing_json_manually_using_dart_convert.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class JsonAndSerialization extends StatelessWidget {
  const JsonAndSerialization({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(title: 'Json and serialization', widgets: [
      SerializingJsonManuallyUsingDartConvert(),
    ]);
  }
}
