import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:sandbox/development/data_and_backend/json_and_serialization/model/user.dart';
import 'package:sandbox/widgets/widgets_with_title.dart';

class GeneratingCodeForNestedClasses extends StatelessWidget {
  const GeneratingCodeForNestedClasses({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    const jsonString =
        "{\"name\": \"John Smith\",\"email\": \"john@example.com\",\"address\": {\"street\": \"Shijo\", \"city\": \"Kyoto\"}}";
    final user = User.fromJson(jsonDecode(jsonString));

    return Scaffold(
      appBar: AppBar(
        title: const Text('Generating code for nested classes'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            buildWidgetsWithTitle('Decode from json to User class.', [
              Text('Howdy, ${user.name}!'),
              Text('We sent the verification link to ${user.email}.'),
              Text('city: ${user.address.city}, street: ${user.address.street}')
            ]),
            buildWidgetsWithTitle(
                'User class to json.', [Text(user.toJson().toString())])
          ],
        ),
      ),
    );
  }
}
