import 'package:flutter/material.dart';

const owlUrl =
    'https://raw.githubusercontent.com/flutter/website/master/src/images/owl.jpg';

class FadeInText extends StatefulWidget {
  const FadeInText({Key? key}) : super(key: key);

  @override
  State<FadeInText> createState() => _FadeInTextState();
}

class _FadeInTextState extends State<FadeInText> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('FadeInText')),
      body: Center(
        child: Column(children: [
          Image.network(owlUrl),
          TextButton(
            onPressed: () => {},
            child: const Text(
              'Show Details',
              style: TextStyle(color: Colors.blueAccent),
            ),
          ),
          Column(
            children: const [
              Text('Type: Owl'),
              Text('Age: 39'),
              Text('Employment: None'),
            ],
          )
        ]),
      ),
    );
  }
}
