import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:sandbox/cookbook/testing/widget/handle_scrolling/handle_scrolling_app.dart';

void main() {
  testWidgets('Counter increments smoke test', (WidgetTester tester) async {
    await tester.pumpWidget(HandleScrollingApp(
      items: List<String>.generate(10000, (index) => 'Item $index'),
    ));

    final listFinder = find.byType(Scrollable);
    final itemFinder = find.byKey(const ValueKey('item_50_text'));

    await tester.scrollUntilVisible(
      itemFinder,
      500.0,
      scrollable: listFinder,
    );

    expect(itemFinder, findsOneWidget);
  });
}
