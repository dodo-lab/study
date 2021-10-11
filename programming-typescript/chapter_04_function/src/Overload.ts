export default function Overload() {
  console.log('オーバーロード');

  type Reserve = {
    // 宿泊旅行予約
    (from: Date, to: Date, destination: string): void;
    // 日帰り旅行予約
    (from: Date, destination: string): void;
  };

  const reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
  ) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
      console.log('宿泊旅行予約', from, toOrDestination, destination);
    } else if (typeof toOrDestination === 'string') {
      console.log('日帰り旅行予約', from, toOrDestination);
    }
  };

  const date = new Date();
  reserve(date, date, 'sapporo');
  reserve(date, 'kyoto');
}
