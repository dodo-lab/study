class Rectangle {
  double left, top, width, height;

  Rectangle(this.left, this.top, this.width, this.height);

  double get right => left + width;
  set right(double value) => left = value - width;
  double get bottom => top + height;
  set bottom(double value) => top = value - height;
}

void main() {
  final rect = Rectangle(3, 4, 20, 15);
  assert(rect.left == 3);
  assert(rect.right == 23);

  rect.right = 25;
  assert(rect.left == 5);
  assert(rect.right == 25);
}
