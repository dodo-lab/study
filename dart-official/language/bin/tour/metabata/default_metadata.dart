class Television {
  @Deprecated('Use turnOn instead')
  void activate() {
    turnOn();
  }

  void turnOn() {
    print('turnOn');
  }
}

void main() {
  final t = Television();
  t.activate();
  t.turnOn();
}
