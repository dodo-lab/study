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
}
