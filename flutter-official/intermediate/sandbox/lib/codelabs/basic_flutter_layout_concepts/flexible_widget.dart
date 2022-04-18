import 'package:flutter/material.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/widgets/blue_box.dart';
import 'package:sandbox/widgets/setting_item_slider.dart';
import 'package:sandbox/widgets/toggle_button_setting_item.dart';

class FlexibleWidget extends StatefulWidget {
  const FlexibleWidget({Key? key}) : super(key: key);

  @override
  _FlexibleWidgetState createState() => _FlexibleWidgetState();
}

class _FlexibleWidgetState extends State<FlexibleWidget> {
  FlexFit _flexFit = FlexFit.tight;
  double _flexValue = 1.0;

  void _onChangedFlexFit(FlexFit flexFit) {
    setState(() {
      _flexFit = flexFit;
    });
  }

  void _onChangedFlexValue(double flexValue) {
    setState(() {
      _flexValue = flexValue;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('FlexibleWidget')),
      body: Column(
        children: [
          ToggleButtonSettingItem(
            title: 'FlexFit',
            buttonValues: FlexFit.values,
            value: _flexFit,
            onChanged: _onChangedFlexFit,
          ),
          SettingItemSlider(
            title: 'FlexValue',
            value: _flexValue,
            onChanged: _onChangedFlexValue,
            max: 20,
          ),
          Row(
            children: [
              const BlueBox(),
              Flexible(
                fit: _flexFit,
                flex: 1,
                child: const BlueBox(),
              ),
              Flexible(
                fit: _flexFit,
                flex: _flexValue.ceil(),
                child: const BlueBox(),
              ),
            ],
          )
        ],
      ),
    );
  }
}
