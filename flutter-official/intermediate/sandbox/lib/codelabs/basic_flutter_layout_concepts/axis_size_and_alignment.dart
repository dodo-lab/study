import 'package:flutter/material.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/blue_box.dart';
import 'package:sandbox/widgets/select_only_one_toggle_button.dart';

class AxisSizeAndAlignment extends StatefulWidget {
  const AxisSizeAndAlignment({Key? key}) : super(key: key);

  @override
  State<AxisSizeAndAlignment> createState() => _AxisSizeAndAlignmentState();
}

class _AxisSizeAndAlignmentState extends State<AxisSizeAndAlignment> {
  MainAxisSize _mainAxisSize = MainAxisSize.min;
  MainAxisAlignment _mainAxisAlignment = MainAxisAlignment.start;

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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('AxisSizeAndAlignment')),
      body: Column(
        children: [
          // MainAxisSize
          const Text('MainAxisSize', style: TextStyle(fontSize: 16)),
          SelectOnlyOneToggleButton<MainAxisSize>(
            buttonValues: const [MainAxisSize.min, MainAxisSize.max],
            value: _mainAxisSize,
            onChanged: _onChangedMainAxisSize,
          ),
          const SizedBox(height: 20),
          // MainAxisAlignment
          const Text('MainAxisAlignment', style: TextStyle(fontSize: 16)),
          SelectOnlyOneToggleButton<MainAxisAlignment>(
            buttonValues: MainAxisAlignment.values,
            value: _mainAxisAlignment,
            onChanged: _onChangedMainAxisAlignment,
          ),
          const SizedBox(height: 20),
          // Box
          Container(
            color: Colors.grey,
            child: Row(
              mainAxisSize: _mainAxisSize,
              mainAxisAlignment: _mainAxisAlignment,
              children: const [BlueBox(), BlueBox(), BlueBox()],
            ),
          ),
        ],
      ),
    );
  }
}
