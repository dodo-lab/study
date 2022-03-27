import 'package:flutter/material.dart';

class _Todo {
  final String title;
  final String description;

  _Todo(this.title, this.description);
}

class SendDataToNewScreen extends StatelessWidget {
  const SendDataToNewScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final todos = List.generate(
      20,
      (i) => _Todo(
          'Todo $i', 'A description of what needs to be done for Todo $i'),
    );

    return Scaffold(
      appBar: AppBar(
        title: const Text('Todo List'),
      ),
      body: ListView.builder(
        itemCount: todos.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(todos[index].title),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) =>
                      SendDataToNewScreenTodoDetail(todo: todos[index]),
                ),
              );
            },
          );
        },
      ),
    );
  }
}

class SendDataToNewScreenTodoDetail extends StatelessWidget {
  final _Todo _todo;

  const SendDataToNewScreenTodoDetail({Key? key, required _Todo todo})
      : _todo = todo,
        super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_todo.title),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Text(_todo.description),
      ),
    );
  }
}
