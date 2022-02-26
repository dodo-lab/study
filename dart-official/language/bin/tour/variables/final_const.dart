void main() {
  // finalは一度だけ代入可能
  final number = 1000;
  // number = 1001;     // 代入不可
  print(number);

  // constはコンパイル時に決定する定数
  const pi = 3.1415926;
  const pi2 = pi * 2;
  // const piNumber = pi * number;    // constにfinalの値を用いた代入は不可
  print(pi);
  print(pi2);
}
