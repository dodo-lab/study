import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shrine/model/product.dart';

class Backdrop extends StatefulWidget {
  final Category currentCategory;
  final Widget frontLayer;
  final Widget backLayer;
  final Widget frontTitle;
  final Widget backTitle;

  const Backdrop({
    Key? key,
    required this.currentCategory,
    required this.frontLayer,
    required this.backLayer,
    required this.frontTitle,
    required this.backTitle,
  }) : super(key: key);

  @override
  State<Backdrop> createState() => _BackdropState();
}

// TODO: Add _FrontLayer class (104)
// TODO: Add _BackdropTitle class (104)

// FIXED: Add _BackdropState class (104)
class _BackdropState extends State<Backdrop>
    with SingleTickerProviderStateMixin {
  final GlobalKey _backdropKey = GlobalKey(debugLabel: 'Backdrop');

  // TODO: Add AnimationController widget (104)

  // TODO: Add BuildContext and BoxConstraints parameters to _buildStack (104)
  Widget _buildStack() {
    return Stack(
      key: _backdropKey,
      children: [
        // TODO: Wrap backLayer in an ExcludeSemantics widget (104)
        widget.backLayer,
        widget.frontLayer,
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final appBar = AppBar(
      systemOverlayStyle: SystemUiOverlayStyle.dark,
      elevation: 0.0,
      titleSpacing: 0.0,
      // TODO: Replace leading menu icon with IconButton (104)
      // TODO: Remove leading property (104)
      // TODO: Create title with _BackdropTitle parameter (104)
      leading: Icon(Icons.menu),
      title: const Text('SHRINE'),
      actions: [
        // TODO: Add shortcut to login screen from trailing icons (104)
        IconButton(
          icon: const Icon(
            Icons.search,
            semanticLabel: 'search',
          ),
          onPressed: () {
            // TODO: Add open login (104)
          },
        ),
        IconButton(
          icon: const Icon(
            Icons.tune,
            semanticLabel: 'filter',
          ),
          onPressed: () {
            // TODO: Add open login (104)
          },
        ),
      ],
      backwardsCompatibility: false,
    );

    return Scaffold(
      appBar: appBar,
      body: _buildStack(),
    );
  }
}
