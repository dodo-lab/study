import 'package:flutter/material.dart';

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
              _BlueBox(),
              _BlueBox(),
              _BlueBox(),
            ],
          ),
          const SizedBox(height: 10),
          Align(
            alignment: Alignment.topLeft,
            child: Column(
              children: const [
                _BlueBox(),
                _BlueBox(),
                _BlueBox(),
              ],
            ),
          )
        ],
      ),
    );
  }
}

class _BlueBox extends StatelessWidget {
  const _BlueBox({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 50,
      height: 50,
      decoration: BoxDecoration(
        color: Colors.blue,
        border: Border.all(),
      ),
    );
  }
}
