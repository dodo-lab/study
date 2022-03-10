enum Color { red, green, blue }

void switchColor(Color color) {
  // enumをswitch文で使用した場合、ケース漏れがあると警告が出る
  switch (color) {
    case Color.red:
      print('Red!');
      break;
    case Color.green:
      print('Green!');
      break;
    case Color.blue:
      print('Blue!');
      break;
  }
}

void main() {
  assert(Color.red.index == 0);
  assert(Color.green.index == 1);
  assert(Color.blue.index == 2);

  List<Color> colors = Color.values;
  for (final color in colors) {
    print(color);
  }
}
