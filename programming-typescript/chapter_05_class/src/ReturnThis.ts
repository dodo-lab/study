export default function ReturnThis() {
  console.log('[戻り値の型としてthisを使う]');

  class Set {
    protected numbers: number[] = [];

    has(value: number): boolean {
      return this.numbers.includes(value);
    }

    add(value: number): this {
      if (!this.has(value)) {
        this.numbers.push(value);
      }
      return this;
    }
  }

  const set = new Set();
  set.add(1).add(2).add(3);
  console.log(set.has(2));
  console.log(set.has(4));

  class MutableSet extends Set {
    add(value: number): this {
      // このオーバーライドは特に意味なし
      return super.add(value);
    }

    delete(value: number): this {
      this.numbers = this.numbers.filter((v) => v !== value);
      return this;
    }
  }

  const mutableSet = new MutableSet();
  mutableSet.add(1).add(2).add(3).delete(2).add(4);
  console.log(mutableSet.has(2));
  console.log(mutableSet.has(4));
}
