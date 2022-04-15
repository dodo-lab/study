import 'package:flutter/material.dart';

class AnimatePageRouteTransition extends StatelessWidget {
  const AnimatePageRouteTransition({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('AnimatePageRouteTransition')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.of(context).push(_createRoute());
          },
          child: const Text('Go!'),
        ),
      ),
    );
  }
}

Route _createRoute() {
  return PageRouteBuilder(
      pageBuilder: (context, animation, secondaryAnimation) =>
          const AnimatePageRouteTransition2(),
      transitionsBuilder: (context, animation, secondaryAnimation, child) {
        return child;
      });
}

class AnimatePageRouteTransition2 extends StatelessWidget {
  const AnimatePageRouteTransition2({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: const Center(
        child: Text('Page 2'),
      ),
    );
  }
}
