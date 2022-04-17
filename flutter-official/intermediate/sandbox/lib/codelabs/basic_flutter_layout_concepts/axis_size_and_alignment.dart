import 'package:flutter/material.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/blue_box.dart';
import 'package:sandbox/widgets/select_only_one_toggle_button.dart';

class AxisSizeAndAlignment extends StatelessWidget {
  const AxisSizeAndAlignment({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('AxisSizeAndAlignment')),
      body: Column(
        children: const [
          MainAxisSizeProperty(),
        ],
      ),
    );
  }
}

class MainAxisSizeProperty extends StatefulWidget {
  const MainAxisSizeProperty({Key? key}) : super(key: key);

  @override
  State<MainAxisSizeProperty> createState() => _MainAxisSizePropertyState();
}

class _MainAxisSizePropertyState extends State<MainAxisSizeProperty> {
  MainAxisSize _value = MainAxisSize.min;

  void onChanged(MainAxisSize size) {
    setState(() {
      _value = size;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SelectOnlyOneToggleButton<MainAxisSize>(
          buttonValues: const [MainAxisSize.min, MainAxisSize.max],
          value: _value,
          onChanged: onChanged,
        ),
        Container(
          color: Colors.grey,
          child: Row(
            mainAxisSize: _value,
            children: const [BlueBox(), BlueBox(), BlueBox()],
          ),
        ),
      ],
    );
  }
}
