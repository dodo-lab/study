import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:provider/provider.dart';
import 'package:test_app/models/favorites.dart';
import 'package:test_app/screens/favorites.dart';

late Favorites favorites;

Widget createFavoritesScreen() => ChangeNotifierProvider<Favorites>(
      create: (context) {
        favorites = Favorites();
        return favorites;
      },
      child: const MaterialApp(
        home: FavoritesPage(),
      ),
    );

void addItems() {
  for (var i = 0; i < 10; i += 2) {
    favorites.add(i);
  }
}

void main() {
  group('Favorites Page Widget Tests', () {
    testWidgets('Test if ListView shows up', (tester) async {
      await tester.pumpWidget(createFavoritesScreen());
      addItems();
      await tester.pumpAndSettle();
      expect(find.byType(ListView), findsOneWidget);
    });
    testWidgets('Testing Remove Button', (tester) async {
      await tester.pumpWidget(createFavoritesScreen());
      addItems();
      await tester.pumpAndSettle();
      final totalItems = tester.widgetList(find.byIcon(Icons.close)).length;
      await tester.tap(find.byIcon(Icons.close).first);
      await tester.pumpAndSettle();
      expect(tester.widgetList(find.byIcon(Icons.close)).length,
          lessThan(totalItems));
      expect(find.text('Removed from favorites.'), findsOneWidget);
    });
  });
}
