import 'package:flutter/material.dart';

class SelectOnlyOneToggleButton<T> extends StatefulWidget {
  final List<String>? buttonNames;
  final List<T> buttonValues;
  final T value;
  final void Function(T) onChanged;

  const SelectOnlyOneToggleButton(
      {Key? key,
      this.buttonNames,
      required this.buttonValues,
      required this.value,
      required this.onChanged})
      : super(key: key);

  @override
  _SelectOnlyOneToggleButtonState createState() =>
      _SelectOnlyOneToggleButtonState<T>();
}

class _SelectOnlyOneToggleButtonState<T>
    extends State<SelectOnlyOneToggleButton<T>> {
  late List<bool> _isSelected;

  @override
  void initState() {
    super.initState();

    setState(() {
      _isSelected = List.filled(widget.buttonValues.length, false);
      final selectedIndex = widget.buttonValues.indexOf(widget.value);
      if (selectedIndex != -1) {
        _isSelected[selectedIndex] = true;
      }
    });
  }

  void _onPressed(int index) {
    final selectedIndex = widget.buttonValues.indexOf(widget.value);
    if (index != selectedIndex) {
      setState(() {
        if (selectedIndex != -1) {
          _isSelected[selectedIndex] = false;
        }
        _isSelected[index] = true;
      });

      widget.onChanged(widget.buttonValues[index]);
    }
  }

  @override
  Widget build(BuildContext context) {
    final texts = widget.buttonNames != null
        ? widget.buttonNames!.map((name) => Text(name)).toList()
        : widget.buttonValues.map((value) => Text(value.toString())).toList();

    return Align(
      alignment: Alignment.topLeft,
      child: ToggleButtons(
        children: texts,
        isSelected: _isSelected,
        onPressed: _onPressed,
      ),
    );
  }
}
