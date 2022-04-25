import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/persistence/model/dog.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class AppDatabase {
  late final Database database;

  void initialize() async {
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

  Future<void> insertDog(Dog dog) async {
    await database.insert(
      'dogs',
      dog.toMap(),
      conflictAlgorithm: ConflictAlgorithm.replace,
    );
  }

  Future<List<Dog>> dogs() async {
    final List<Map<String, dynamic>> maps = await database.query('dogs');

    return List.generate(maps.length, (index) {
      return Dog(
        id: maps[index]['id'],
        name: maps[index]['name'],
        age: maps[index]['age'],
      );
    });
  }

  Future<void> updateDog(Dog dog) async {
    await database.update(
      'dogs',
      dog.toMap(),
      where: 'id = ?',
      whereArgs: [dog.id],
    );
  }

  Future<void> deleteDog(int id) async {
    await database.delete(
      'dogs',
      where: 'id = ?',
      whereArgs: [id],
    );
  }
}

class PersistDataWithSqlite extends StatefulWidget {
  const PersistDataWithSqlite({Key? key}) : super(key: key);

  @override
  _PersistDataWithSqliteState createState() => _PersistDataWithSqliteState();
}

class _PersistDataWithSqliteState extends State<PersistDataWithSqlite> {
  final database = AppDatabase();

  @override
  void initState() {
    super.initState();
    database.initialize();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: const Text('PersistDataWithSqlite')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton(
                onPressed: () async {
                  const fido = Dog(id: 0, name: 'Fido', age: 35);
                  await database.insertDog(fido);
                },
                child: const Text('Insert'),
              ),
              ElevatedButton(
                onPressed: () async {
                  final dogs = await database.dogs();
                  print(dogs);
                },
                child: const Text('Read'),
              ),
              ElevatedButton(
                onPressed: () async {
                  const fido = Dog(id: 0, name: 'Fido', age: 42);
                  await database.updateDog(fido);
                },
                child: const Text('Update'),
              ),
              ElevatedButton(
                onPressed: () async {
                  await database.deleteDog(0);
                },
                child: const Text('Delete'),
              ),
            ],
          ),
        ));
  }
}
