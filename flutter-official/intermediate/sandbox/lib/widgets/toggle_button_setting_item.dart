import 'package:flutter/material.dart';
import 'package:sandbox/widgets/select_only_one_toggle_button.dart';

class ToggleButtonSettingItem<T> extends StatelessWidget {
  final String title;
  final List<T> buttonValues;
  final T value;
  final void Function(T) onChanged;
  final double bottomMargin;

  const ToggleButtonSettingItem(
      {Key? key,
      required this.title,
      required this.buttonValues,
      required this.value,
      required this.onChanged,
      this.bottomMargin = 20})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(title, style: const TextStyle(fontSize: 16)),
        SelectOnlyOneToggleButton(
          buttonValues: buttonValues,
          value: value,
          onChanged: onChanged,
        ),
        SizedBox(height: bottomMargin),
      ],
    );
  }
}
