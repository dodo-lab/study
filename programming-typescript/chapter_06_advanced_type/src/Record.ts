export default function Record() {
  console.log('[レコード型]');

  type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
  type Day = Weekday | 'Sat' | 'Sun';

  // Weekdayの定義が１つでもなければ、エラーになる
  const nextDay: Record<Weekday, Day> = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat',
  };
}
