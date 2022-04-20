import 'package:flutter/material.dart';

class FocusAndTextFields extends StatefulWidget {
  const FocusAndTextFields({Key? key}) : super(key: key);

  @override
  State<FocusAndTextFields> createState() => _FocusAndTextFieldsState();
}

class _FocusAndTextFieldsState extends State<FocusAndTextFields> {
  late FocusNode focusNode;

  @override
  void initState() {
    super.initState();

    focusNode = FocusNode();
  }

  @override
  void dispose() {
    focusNode.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('FocusAndTextFields')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            // Auto focus.
            const TextField(autofocus: true),
            // Focus when the FloatingActionButton is tapped.
            TextField(focusNode: focusNode),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => focusNode.requestFocus(),
        tooltip: 'Focus Second Text Field',
        child: const Icon(Icons.edit),
      ),
    );
  }
}
