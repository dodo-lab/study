import 'package:flutter/material.dart';

class BusinessCard extends StatelessWidget {
  const BusinessCard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: const Text('BusinessCard')),
        body: Container(
          margin: const EdgeInsets.all(8.0),
          decoration: BoxDecoration(border: Border.all()),
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                _buildTop(context),
                const SizedBox(height: 16),
                _buildMiddle(),
                const SizedBox(height: 16),
                _buildBottom(),
              ],
            ),
          ),
        ));
  }

  Widget _buildTop(BuildContext context) {
    return Row(
      children: [
        const Padding(
          padding: EdgeInsets.all(8),
          child: Icon(
            Icons.account_circle,
            size: 50,
          ),
        ),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Flutter McFlutter',
              style: Theme.of(context).textTheme.headline5,
            ),
            const Text('Experienced App Developer'),
          ],
        )
      ],
    );
  }

  Widget _buildMiddle() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: const [
        Text('123 Main Street'),
        Text('(415) 555-0198'),
      ],
    );
  }

  Widget _buildBottom() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: const [
        Icon(Icons.accessibility),
        Icon(Icons.timer),
        Icon(Icons.phone_android),
        Icon(Icons.phone_iphone),
      ],
    );
  }
}
