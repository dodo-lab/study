import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:sandbox/widgets/widgets_with_title.dart';

class User {
  final String name;
  final String email;

  User(this.name, this.email);

  User.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        email = json['email'];

  Map<String, dynamic> toJson() => {
        'name': name,
        'email': email,
      };
}

class SerializingJsonManuallyUsingDartConvert extends StatelessWidget {
  const SerializingJsonManuallyUsingDartConvert({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    const jsonString =
        "{\"name\": \"John Smith\",\"email\": \"john@example.com\"}";
    final userJson = jsonDecode(jsonString);
    final user = User.fromJson(userJson);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Serializing json manually using dart convert'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            buildWidgetsWithTitle('Decode from json to User class.', [
              Text('Howdy, ${user.name}!'),
              Text('We sent the verification link to ${user.email}.'),
            ]),
            buildWidgetsWithTitle('User class to json.', [
              Text('${user.toJson()}'),
            ]),
            buildWidgetsWithTitle('Encode from User class to json.', [
              Text(jsonEncode(user)),
            ]),
          ],
        ),
      ),
    );
  }
}
