import 'package:flutter/material.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/widgets/blue_box.dart';
import 'package:sandbox/widgets/setting_item_toggle_buttons.dart';

class AxisSizeAndAlignment extends StatefulWidget {
  const AxisSizeAndAlignment({Key? key}) : super(key: key);

  @override
  State<AxisSizeAndAlignment> createState() => _AxisSizeAndAlignmentState();
}

class _AxisSizeAndAlignmentState extends State<AxisSizeAndAlignment> {
  MainAxisSize _mainAxisSize = MainAxisSize.max;
  MainAxisAlignment _mainAxisAlignment = MainAxisAlignment.spaceAround;
  CrossAxisAlignment _crossAxisAlignment = CrossAxisAlignment.center;

  void _onChangedMainAxisSize(MainAxisSize size) {
    setState(() {
      _mainAxisSize = size;
    });
  }

  void _onChangedMainAxisAlignment(MainAxisAlignment alignment) {
    setState(() {
      _mainAxisAlignment = alignment;
    });
  }

  void _onChangedCrossAxisAlignment(CrossAxisAlignment alignment) {
    setState(() {
      _crossAxisAlignment = alignment;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('AxisSizeAndAlignment')),
      body: Column(
        children: [
          SettingItemToggleButtons(
            title: 'MainAxisSize',
            buttonValues: MainAxisSize.values,
            value: _mainAxisSize,
            onChanged: _onChangedMainAxisSize,
          ),
          SettingItemToggleButtons(
            title: 'MainAxisAlignment',
            buttonValues: MainAxisAlignment.values,
            value: _mainAxisAlignment,
            onChanged: _onChangedMainAxisAlignment,
          ),
          SettingItemToggleButtons(
            title: 'CrossAxisAlignment',
            buttonValues: CrossAxisAlignment.values,
            value: _crossAxisAlignment,
            onChanged: _onChangedCrossAxisAlignment,
          ),
          Expanded(
            child: Container(
              color: Colors.grey,
              child: Row(
                mainAxisSize: _mainAxisSize,
                mainAxisAlignment: _mainAxisAlignment,
                crossAxisAlignment: _crossAxisAlignment,
                textBaseline: TextBaseline.alphabetic,
                children: const [
                  BlueBox(),
                  BlueBox(height: 100),
                  Text('small'),
                  Text('big', style: TextStyle(fontSize: 30)),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
