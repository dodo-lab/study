export default function TypeAlias() {
  console.log('[型エイリアス]');
  type Age = number;
  type Person = {
    name: string;
    age: Age;
  };

  let driver: Person = {
    name: 'James May',
    age: 55,
  };
  console.log(driver);
}
