import 'package:flutter/material.dart';

class AnimateWidgetUsingPhysicsSimulation extends StatefulWidget {
  const AnimateWidgetUsingPhysicsSimulation({Key? key}) : super(key: key);

  @override
  _AnimateWidgetUsingPhysicsSimulationState createState() =>
      _AnimateWidgetUsingPhysicsSimulationState();
}

class _AnimateWidgetUsingPhysicsSimulationState
    extends State<AnimateWidgetUsingPhysicsSimulation>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  Alignment _dragAlignment = Alignment.center;

  @override
  void initState() {
    super.initState();
    _controller =
        AnimationController(vsync: this, duration: const Duration(seconds: 1));
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return Scaffold(
      appBar: AppBar(title: const Text('AnimateWidgetUsingPhysicsSimulation')),
      body: GestureDetector(
        onPanDown: (details) {},
        onPanUpdate: (details) {
          setState(() {
            _dragAlignment += Alignment(
              details.delta.dx / (size.width / 2),
              details.delta.dy / (size.height / 2),
            );
          });
        },
        onPanEnd: (details) {},
        child: Align(
          alignment: _dragAlignment,
          child: const FlutterLogo(size: 128),
        ),
      ),
    );
  }
}
