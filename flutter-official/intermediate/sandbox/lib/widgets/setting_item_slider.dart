import 'package:flutter/material.dart';
import 'package:sandbox/widgets/title_and_widget.dart';

class SettingItemSlider extends StatelessWidget {
  final String title;
  final double value;
  final void Function(double) onChanged;
  final double min;
  final double max;
  final double step;

  const SettingItemSlider(
      {Key? key,
      required this.title,
      required this.value,
      required this.onChanged,
      this.min = 0,
      this.max = 100,
      this.step = 1})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    final divisions = (max - min) ~/ step;

    return TitleAndWidget(
      title: '$title : $value',
      widget: Slider(
        value: value,
        min: min,
        max: max,
        divisions: divisions,
        onChanged: onChanged,
      ),
    );
  }
}
