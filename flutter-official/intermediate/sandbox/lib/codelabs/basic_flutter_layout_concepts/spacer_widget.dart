import 'package:flutter/material.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/widgets/blue_box.dart';
import 'package:sandbox/widgets/setting_item_slider.dart';

class SpacerWidget extends StatefulWidget {
  const SpacerWidget({Key? key}) : super(key: key);

  @override
  _SpacerWidgetState createState() => _SpacerWidgetState();
}

class _SpacerWidgetState extends State<SpacerWidget> {
  double _flexValue = 1.0;

  void _onChangedFlexValue(double value) {
    setState(() {
      _flexValue = value;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('SpacerWidget')),
      body: Column(
        children: [
          SettingItemSlider(
            title: 'FlexValue',
            value: _flexValue,
            onChanged: _onChangedFlexValue,
            min: 1,
            max: 10,
          ),
          Row(
            children: [
              const Flexible(flex: 1, fit: FlexFit.tight, child: BlueBox()),
              Spacer(flex: _flexValue.ceil()),
              const Flexible(flex: 1, fit: FlexFit.tight, child: BlueBox()),
            ],
          )
        ],
      ),
    );
  }
}
