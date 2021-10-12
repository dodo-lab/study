export default function Interface() {
  console.log('[インターフェース]');

  // 宣言のマージ
  interface User {
    name: string;
  }
  interface User {
    age: number;
  }
  const user: User = {
    name: 'Ashley',
    age: 30,
  };
  console.log(user);

  // 実装
  interface Animal {
    readonly name: string;
    eat(food: string): void;
    sleep(hours: number): void;
  }
  interface Feline {
    meow(): void;
  }
  class Cat implements Animal, Feline {
    name = 'Whiskers';
    eat(food: string) {
      console.log('Ate some', food, '. Mmm!');
    }
    sleep(hours: number) {
      console.log('Slept for', hours, 'hours');
    }
    meow() {
      console.log('Meow');
    }
  }
  const cat = new Cat();
  cat.eat('fish');
  cat.sleep(10);
  cat.meow();
}
