import 'dart:math';

import 'package:flutter/material.dart';

double randomBorderRadius() {
  // easeInOutBackでマイナスの値にならないよう+10を補正.
  return Random().nextDouble() * 54 + 10;
}

double randomMargin() {
  // easeInOutBackでマイナスの値にならないよう+10を補正.
  return Random().nextDouble() * 54 + 10;
}

Color randomColor() {
  return Color(0xFFFFFFFF & Random().nextInt(0xFFFFFFFF));
}

class ShapeShiftingEffect extends StatefulWidget {
  const ShapeShiftingEffect({Key? key}) : super(key: key);

  @override
  State<ShapeShiftingEffect> createState() => _ShapeShiftingEffectState();
}

class _ShapeShiftingEffectState extends State<ShapeShiftingEffect> {
  late Color color;
  late double borderRadius;
  late double margin;

  @override
  void initState() {
    super.initState();

    color = randomColor();
    borderRadius = randomBorderRadius();
    margin = randomMargin();
  }

  void change() {
    setState(() {
      color = randomColor();
      borderRadius = randomBorderRadius();
      margin = randomMargin();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: const Text('ShapeShiftingEffect')),
        body: Center(
          child: Column(
            children: [
              SizedBox(
                width: 128,
                height: 128,
                child: AnimatedContainer(
                  margin: EdgeInsets.all(margin),
                  decoration: BoxDecoration(
                    color: color,
                    borderRadius: BorderRadius.circular(borderRadius),
                  ),
                  duration: const Duration(milliseconds: 400),
                  curve: Curves.easeInOutBack,
                ),
              ),
              ElevatedButton(
                onPressed: () => change(),
                child: const Text('change'),
              ),
            ],
          ),
        ));
  }
}
