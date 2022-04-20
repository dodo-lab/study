import 'package:flutter/material.dart';

class HandleChangesToTextField extends StatefulWidget {
  const HandleChangesToTextField({Key? key}) : super(key: key);

  @override
  _HandleChangesToTextFieldState createState() =>
      _HandleChangesToTextFieldState();
}

class _HandleChangesToTextFieldState extends State<HandleChangesToTextField> {
  final textController = TextEditingController();

  @override
  void initState() {
    super.initState();
    textController.addListener(_printLatestValue);
  }

  @override
  void dispose() {
    textController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('HandleChangesToTextField')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              onChanged: (text) {
                print('First text field: $text');
              },
            ),
            TextField(
              controller: textController,
            ),
          ],
        ),
      ),
    );
  }

  void _printLatestValue() {
    print('Second text field: ${textController.text}');
  }
}
