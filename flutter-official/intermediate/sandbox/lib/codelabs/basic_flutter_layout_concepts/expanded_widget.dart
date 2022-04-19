import 'package:flutter/material.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/widgets/blue_box.dart';

class ExpandedWidget extends StatelessWidget {
  const ExpandedWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: const Text('ExpandedWidget')),
        body: Column(
          children: [
            const SizedBox(height: 20),
            Row(
              children: const [
                BlueBox(),
                Expanded(child: BlueBox()),
                BlueBox(),
              ],
            ),
          ],
        ));
  }
}
