import 'package:flutter/material.dart';
import 'package:flutter/physics.dart';

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

  void _runAnimation(Offset pixelsPerSecond, Size size) {
    _animation = _controller.drive(
      AlignmentTween(
        begin: _dragAlignment,
        end: Alignment.center,
      ),
    );

    final unitsPerSecondX = pixelsPerSecond.dx / size.width;
    final unitsPerSecondY = pixelsPerSecond.dy / size.height;
    final unitsPerSecond = Offset(unitsPerSecondX, unitsPerSecondY);
    final unitVelocity = unitsPerSecond.distance;

    const spring = SpringDescription(
      mass: 30,
      stiffness: 1,
      damping: 1,
    );

    final simulation = SpringSimulation(spring, 0, 1, -unitVelocity);

    _controller.animateWith(simulation);
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
          _runAnimation(details.velocity.pixelsPerSecond, size);
        },
        child: Align(
          alignment: _dragAlignment,
          child: const Card(
            child: FlutterLogo(size: 128),
          ),
        ),
      ),
    );
  }
}
