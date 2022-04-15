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
  late Animation<Alignment> _animation;
  Alignment _dragAlignment = Alignment.center;

  @override
  void initState() {
    super.initState();
    _controller =
        AnimationController(vsync: this, duration: const Duration(seconds: 1));
    _controller.addListener(() {
      setState(() {
        _dragAlignment = _animation.value;
      });
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _runAnimation() {
    _animation = _controller.drive(
      AlignmentTween(
        begin: _dragAlignment,
        end: Alignment.center,
      ),
    );
    _controller.reset();
    _controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return Scaffold(
      appBar: AppBar(title: const Text('AnimateWidgetUsingPhysicsSimulation')),
      body: GestureDetector(
        onPanDown: (details) {
          _controller.stop();
        },
        onPanUpdate: (details) {
          setState(() {
            _dragAlignment += Alignment(
              details.delta.dx / (size.width / 2),
              details.delta.dy / (size.height / 2),
            );
          });
        },
        onPanEnd: (details) {
          _runAnimation();
        },
        child: Align(
          alignment: _dragAlignment,
          child: const FlutterLogo(size: 128),
        ),
      ),
    );
  }
}
