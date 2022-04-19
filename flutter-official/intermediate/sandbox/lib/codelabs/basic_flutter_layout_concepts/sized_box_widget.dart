import 'package:flutter/material.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/widgets/blue_box.dart';
import 'package:sandbox/widgets/title_and_widget.dart';

class SizedBoxWidget extends StatelessWidget {
  const SizedBoxWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('SizedBoxWidget')),
      body: Column(
        children: [
          TitleAndWidget(
            title: 'Resizing a widget',
            widget: Row(
              children: const [
                BlueBox(),
                SizedBox(
                  width: 100,
                  child: BlueBox(),
                ),
                BlueBox(),
              ],
            ),
          ),
          TitleAndWidget(
            title: 'Creating space',
            widget: Row(
              children: const [
                BlueBox(),
                SizedBox(
                  width: 50,
                ),
                BlueBox(),
                BlueBox(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
