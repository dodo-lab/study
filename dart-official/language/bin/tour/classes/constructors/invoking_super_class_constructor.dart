class Person {
  String? firstName;

  Person.fromJson(Map data) {
    print('in Person');
  }
}

class Employee extends Person {
  double x;
  double y;

  Employee.fromJson(Map data)
      : x = data['x'],
        y = data['y'],
        super.fromJson(data) {
    print('in Employee');
    print('  x = $x, y = $y');
  }
}

void main() {
  final employee = Employee.fromJson({'x': 10.0, 'y': 20.0});
  print(employee);
}
