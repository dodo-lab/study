import 'package:flutter/material.dart';

class RetrieveTheValueOfTextField extends StatefulWidget {
  const RetrieveTheValueOfTextField({Key? key}) : super(key: key);

  @override
  _RetrieveTheValueOfTextFieldState createState() =>
      _RetrieveTheValueOfTextFieldState();
}

class _RetrieveTheValueOfTextFieldState
    extends State<RetrieveTheValueOfTextField> {
  final myController = TextEditingController();

  @override
  void dispose() {
    myController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('RetrieveTheValueOfTextField')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: TextField(controller: myController),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          showDialog(
            context: context,
            builder: (context) {
              return AlertDialog(content: Text(myController.text));
            },
          );
        },
        tooltip: 'Show me tha value',
        child: const Icon(Icons.text_fields),
      ),
    );
  }
}
