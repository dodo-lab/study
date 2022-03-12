typedef IntList = List<int>;
typedef ListMapper<X> = Map<X, List<X>>;

typedef Compare<T> = int Function(T a, T b);

int sort(int a, int b) => a - b;

void main() {
  IntList il = [1, 2, 3];
  assert(il.length == 3);

  // 同じ定義だが、m2の方がよりシンプルに記述できる
  Map<String, List<String>> m1 = {};
  ListMapper<String> m2 = {};

  // ignore: unnecessary_type_check
  assert(sort is Compare<int>);
}
