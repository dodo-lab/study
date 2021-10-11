export default function Training() {
  console.log('[練習問題]');

  type Reserve = {
    // 宿泊旅行予約
    (from: Date, to: Date, destination: string): void;
    // 日帰り旅行予約
    (from: Date, destination: string): void;
    // すぐに出発する旅行
    (destination: string): void;
  };

  const reserve: Reserve = (
    fromOrDestination: Date | string,
    toOrDestination?: Date | string,
    destination?: string
  ) => {
    if (
      fromOrDestination instanceof Date &&
      toOrDestination instanceof Date &&
      destination !== undefined
    ) {
      console.log(
        '宿泊旅行予約',
        fromOrDestination,
        toOrDestination,
        destination
      );
    } else if (
      fromOrDestination instanceof Date &&
      typeof toOrDestination === 'string'
    ) {
      console.log('日帰り旅行予約', fromOrDestination, toOrDestination);
    } else if (typeof fromOrDestination === 'string') {
      console.log('すぐに出発する旅行予約', fromOrDestination);
    }
  };

  const date = new Date();
  reserve(date, date, 'sapporo');
  reserve(date, 'kyoto');
  reserve('osaka');

  function is<T>(a: T, ...args: T[]) {
    return args.every((v) => v === a);
  }

  console.log(is('string', 'otherstring'));
  console.log(is(true, false));
  console.log(is(true));
  console.log(is(42, 42));
  // console.log(is(10, 'foo')); ★コンパイルエラー
  console.log(is([1], [1, 2], [1, 2, 3]));
}
