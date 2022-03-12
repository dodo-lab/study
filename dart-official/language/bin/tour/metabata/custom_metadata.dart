import 'dart:mirrors';

class Todo {
  final String who;
  final String what;

  const Todo(this.who, this.what);
}

@Todo('seth', 'make this do something')
void doSomething() {
  print('do something');
}

void main() {
  currentMirrorSystem()
      .isolate
      .rootLibrary
      .declarations
      .forEach((symbol, declaration) {
    if (declaration.metadata.isNotEmpty) {
      final instance = declaration.metadata.first;
      if (instance.reflectee is Todo) {
        final Todo todo = instance.reflectee;
        print('$symbol is Todo: ${todo.who} -> ${todo.what}');
      }
    }
  });
}
