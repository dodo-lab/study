class Point {
  double x, y;

  // The main constructor
  Point(this.x, this.y);

  // Delegates to the main constructor
  Point.alongAxis(double x) : this(x, 0);
}

void main() {
  final point = Point.alongAxis(30);
  assert(point.x == 30);
  assert(point.y == 0);
}
