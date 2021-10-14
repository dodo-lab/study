export default function FunctionDegeneration() {
  console.log('[関数の変性]');

  class Animal {}
  class Bird extends Animal {
    chirp() {
      console.log(this, 'chirp');
    }
  }
  class Crow extends Bird {
    caw() {
      console.log(this, 'caw');
    }
  }

  function chirp(bird: Bird): Bird {
    bird.chirp();
    return bird;
  }
  // chirp(new Animal); ★エラー
  chirp(new Bird());
  chirp(new Crow());

  function clone(f: (b: Bird) => Bird): void {
    console.log(f);
    f(new Bird());
  }
  function birdToBird(b: Bird): Bird {
    return b;
  }
  function birdToCrow(b: Bird): Crow {
    return new Crow();
  }
  function birdToAnimal(b: Bird): Animal {
    return new Animal();
  }
  function animalToBird(a: Animal): Bird {
    return new Bird();
  }
  function crowToBird(c: Crow): Bird {
    return new Bird();
  }
  clone(birdToCrow);
  clone(birdToBird);
  // clone(birdToAnimal); ★エラー
  clone(animalToBird);
  // clone(crowToBird); ★エラー
}
