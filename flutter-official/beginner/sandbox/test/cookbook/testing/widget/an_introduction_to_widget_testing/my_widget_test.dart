import 'package:flutter_test/flutter_test.dart';
import 'package:sandbox/cookbook/testing/widget/an_introduction_to_widget_testing/my_widget.dart';

void main() {
  testWidgets('MyWidget has a title and message', (WidgetTester tester) async {
    await tester.pumpWidget(const MyWidget(title: 'T', message: 'M'));
    final titleFinder = find.text('T');
    final messageFinder = find.text('M');

    // Widgetツリー上に１つだけ存在することを検証
    expect(titleFinder, findsOneWidget);
    expect(messageFinder, findsOneWidget);
  });
}
