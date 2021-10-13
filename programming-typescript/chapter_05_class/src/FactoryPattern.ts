export default function FactoryPattern() {
  console.log('[ファクトリパターン]');

  type Shoe = {
    purpose: string;
  };

  class BalletFlat implements Shoe {
    purpose = 'dancing';
  }

  class Boot implements Shoe {
    purpose = 'woodcutting';
  }

  class Sneaker implements Shoe {
    purpose = 'walking';
  }

  const Shoe = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
      switch (type) {
        case 'balletFlat':
          return new BalletFlat();
        case 'boot':
          return new Boot();
        case 'sneaker':
          return new Sneaker();
      }
    },
  };

  const shoes = [
    Shoe.create('balletFlat'),
    Shoe.create('boot'),
    Shoe.create('sneaker'),
  ];
  for (const shoe of shoes) {
    console.log(shoe.purpose);
  }
}
