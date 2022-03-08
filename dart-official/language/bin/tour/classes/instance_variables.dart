class Point {
  double? x;
  double? y;
  double z = 0;
}

class ProfileMark {
  final String name;
  final DateTime start = DateTime.now();

  ProfileMark(this.name);
  ProfileMark.unnamed() : name = '';
}

void main() {
  final point = Point();
  point.x = 4;
  assert(point.x == 4);
  assert(point.y == null);
  assert(point.z == 0);

  final mark1 = ProfileMark('Bob');
  final mark2 = ProfileMark.unnamed();
  assert(mark1.name == 'Bob');
  assert(mark2.name == '');
}
