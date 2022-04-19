import 'package:flutter/material.dart';

class TitleAndWidget extends StatelessWidget {
  final String title;
  final Widget widget;

  const TitleAndWidget({Key? key, required this.title, required this.widget})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(title, style: const TextStyle(fontSize: 18)),
        widget,
        const SizedBox(height: 20),
      ],
    );
  }
}
