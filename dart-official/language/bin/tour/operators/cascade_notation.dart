class Point {
  late int x;
  late int y;
}

class Paint {
  late String color;
  late double strokeWidth;
  late Point point;
}

Paint? getPaint() => null;

void main() {
  final paint = Paint()
    ..color = 'red'
    ..strokeWidth = 5.0
    ..point = (Point()
      ..x = 100
      ..y = 50);

  print('paint color: ${paint.color}');
  print('paint strokeWidth: ${paint.strokeWidth}');
  print('paint point: ${paint.point.x}, ${paint.point.y}');

  // '?..'とすることで、nullでなければカスケード操作を行う
  final nullPaint = getPaint()
    ?..color = 'blue'
    ..strokeWidth = 10.5;
  assert(nullPaint == null);
}
