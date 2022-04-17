import 'package:flutter/material.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/blue_box.dart';

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
  final _size = [MainAxisSize.min, MainAxisSize.max];
  final _isSelected = [true, false];
  MainAxisSize _value = MainAxisSize.min;

  void _onRadioSelected(MainAxisSize? value) {
    setState(() {
      if (value != null) {
        _value = value;
      }
    });
  }

  void _onPressed(int index) {
    setState(() {
      for (var i = 0; i < _isSelected.length; i++) {
        _isSelected[i] = index == i;
      }
      _value = _size[index];
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Align(
          alignment: Alignment.topLeft,
          child: ToggleButtons(
            children: const [Text('min'), Text('max')],
            isSelected: _isSelected,
            onPressed: _onPressed,
          ),
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
