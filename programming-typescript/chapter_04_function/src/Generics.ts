export default function Generics() {
  console.log('[ジェネリック型]');

  type Filter = <T>(items: T[], f: (item: T) => boolean) => T[];

  const filter: Filter = (items, f) => {
    let result = [];
    for (const item of items) {
      if (f(item)) {
        result.push(item);
      }
    }

    console.log(result);
    return result;
  };

  filter([1, 2, 3], (n) => n <= 2);
  filter(['a', 'b', 'c'], (n) => n !== 'b');
  filter([{ name: 'beth' }, { name: 'caitlyn' }, { name: 'xin' }], (item) =>
    item.name.startsWith('b')
  );
}
