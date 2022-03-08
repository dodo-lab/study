import 'dart:math';

void constantConstructors() {
  final p1 = Point(1, 1);
  final p2 = Point(1, 1);
  final c1 = const Point(1, 1);
  final c2 = const Point(1, 1);

  assert(!identical(p1, p2));
  assert(!identical(c1, c1));

  // 同じパラメータを持つコンパイル時定数は同一オブジェクトとなる
  assert(identical(c1, c2));
}

void constantMap() {
  const pointAndLine = {
    'point': [Point(0, 0)],
    'line': [Point(1, 10), Point(-2, 11)],
  };
  print(pointAndLine);

  // 定数のため変更不可
  // pointAndLine['line']?[0].x = 100;
}

void main() {
  constantConstructors();
  constantMap();
}
