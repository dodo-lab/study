class ImmutablePoint {
  final double x, y;

  const ImmutablePoint(this.x, this.y);
}

void main() {
  const p1 = ImmutablePoint(0, 0);
  const p2 = ImmutablePoint(0, 0);

  assert(identical(p1, p2));
}
