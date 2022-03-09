class Vector2 {
  double x, y;

  Vector2(this.x, this.y);
}

class Vector3 extends Vector2 {
  double z;

  Vector3(double x, double y, this.z) : super(x, y);
}

void main() {
  final v = Vector3(10, 20, 30);
  assert(v.x == 10);
  assert(v.y == 20);
  assert(v.z == 30);
}
