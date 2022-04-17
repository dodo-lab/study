import 'package:flutter/material.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/blue_box.dart';

class RowAndColumnClasses extends StatelessWidget {
  const RowAndColumnClasses({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('RowAndColumnClasses')),
      body: Column(
        children: [
          Row(
            children: const [
              BlueBox(),
              BlueBox(),
              BlueBox(),
            ],
          ),
          const SizedBox(height: 10),
          Align(
            alignment: Alignment.topLeft,
            child: Column(
              children: const [
                BlueBox(),
                BlueBox(),
                BlueBox(),
              ],
            ),
          )
        ],
      ),
    );
  }
}
