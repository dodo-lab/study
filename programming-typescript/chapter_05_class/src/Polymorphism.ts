export default function Polymorphism() {
  console.log('[ポリモーフィズム]');

  class HashMap<T> {
    private items: { [key: string]: T };

    constructor(key: string, value: T) {
      this.items = { [key]: value };
    }

    get(key: string) {
      return this.items[key];
    }

    set(key: string, value: T) {
      this.items[key] = value;
    }

    static of<T>(key: string, value: T): HashMap<T> {
      return new HashMap(key, value);
    }
  }

  const booleanMap = new HashMap('a', true);
  const numberMap = HashMap.of('1', 1);

  booleanMap.set('b', false);
  numberMap.set('2', 2);

  console.log(booleanMap.get('a'));
  console.log(booleanMap.get('b'));
  console.log(numberMap.get('1'));
  console.log(numberMap.get('2'));
}
