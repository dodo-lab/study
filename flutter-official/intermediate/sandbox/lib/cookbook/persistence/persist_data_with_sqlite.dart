import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class AppDatabase {
  late final Database database;

  AppDatabase() {
    _initDb();
  }

  void _initDb() async {
    database = await openDatabase(
      join(await getDatabasesPath(), 'doggie_database.db'),
      onCreate: ((db, version) {
        return db.execute(
          'CREATE TABLE dogs(id INTEGER PRIMARY KEY, name TEXT, age INTEGER)',
        );
      }),
      version: 1,
    );
  }
}
