import 'package:flutter/material.dart';

class BlueBox extends StatelessWidget {
  final double? height;

  const BlueBox({Key? key, this.height}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 50,
      height: height ?? 50,
      decoration: BoxDecoration(
        color: Colors.blue,
        border: Border.all(),
      ),
    );
  }
}
