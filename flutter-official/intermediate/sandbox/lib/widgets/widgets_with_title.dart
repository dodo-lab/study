import 'package:flutter/material.dart';

Container buildWidgetsWithTitle(String title, List<Widget> widgets) {
  return Container(
    margin: const EdgeInsets.symmetric(vertical: 10.0),
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          title,
          style: const TextStyle(
            fontWeight: FontWeight.bold,
            color: Colors.blue,
          ),
        ),
        ...widgets
      ],
    ),
  );
}
