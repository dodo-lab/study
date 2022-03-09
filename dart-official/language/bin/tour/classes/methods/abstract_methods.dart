abstract class Doer {
  // Define an abstract method.
  void doSomething();
}

class EffectiveDoer extends Doer {
  @override
  void doSomething() {
    print('EffectiveDoer::doSomething');
  }
}

void main() {
  final obj = EffectiveDoer();
  obj.doSomething();
}
