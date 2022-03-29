import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:sandbox/cookbook/testing/widget/tap_drag_and_enter_text/todo_list.dart';

void main() {
  testWidgets('Add and remove a todo', (WidgetTester tester) async {
    await tester.pumpWidget(const TodoList());

    // TextFieldに'hi'と入力.
    await tester.enterText(find.byType(TextField), 'hi');

    // FloatingActionButtonをtap.
    await tester.tap(find.byType(FloatingActionButton));

    // Widgetを再構築.
    await tester.pump();

    // Todoに'hi'が追加されたことを検証.
    expect(find.text('hi'), findsOneWidget);

    // 追加されたTodoをスワイプすると削除される.
    await tester.drag(find.byType(Dismissible), const Offset(500.0, 0.0));

    // 削除アニメーションが終了するまで、Widgetを構築.
    await tester.pumpAndSettle();

    // 追加されたTodoが削除されていることを検証.
    expect(find.text('hi'), findsNothing);
  });
}
