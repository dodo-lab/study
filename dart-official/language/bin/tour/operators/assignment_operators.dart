void main() {
  final int a = 0;
  int? b = 1;
  // ignore: avoid_init_to_null
  int? c = null;

  // 左辺がnullの場合だけ代入する
  // ignore: dead_null_aware_expression
  b ??= a;
  c ??= a;

  assert(a != b);
  assert(a == c);
  print(a);
  print(b);
  print(c);
}
