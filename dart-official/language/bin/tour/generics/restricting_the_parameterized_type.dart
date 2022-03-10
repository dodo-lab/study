// ignore_for_file: unnecessary_type_check

class Car {
  void run() {
    print('Run the car');
  }
}

class Wagon extends Car {
  @override
  void run() {
    print('Run the wagon');
  }
}

class CarManager<T extends Car> {
  final T car;
  CarManager(this.car);
  void exec() {
    car.run();
  }
}

void main() {
  final car = CarManager(Car());
  final wagon = CarManager(Wagon());

  assert(car is CarManager<Car>);
  assert(wagon is CarManager<Wagon>);

  car.exec();
  wagon.exec();
}
