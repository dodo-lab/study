abstract class Car {
  void run();
}

// 'on'キーワードで、指定のスーパークラスを継承しないとmixinできないように制約を設けることが可能
mixin DriveRecorder on Car {
  var camera = true;
  void startRecording() {
    print('Start recording');
  }
}

class Wagon extends Car with DriveRecorder {
  @override
  void run() {
    print('Run Wagon');
  }
}

void main() {
  final car = Wagon();
  car.run();
  car.startRecording();
}
