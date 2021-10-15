export default function MappedType() {
  console.log('[マップ型]');

  type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
  type Day = Weekday | 'Sat' | 'Sun';

  const nextDay: { [K in Weekday]: Day } = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat',
  };

  type Account = {
    id: number;
    isEmployee: boolean;
    notes: string[];
  };
  // すべてのフィールドを省略可能にする
  type OptionalAccount = {
    [K in keyof Account]?: Account[K];
  };
  // すべてのフィールドをnull許容にする
  type NullableAccount = {
    [K in keyof Account]: Account[K] | null;
  };
  // すべてのフィールドを読み取り専用にする
  type ReadonlyAccount = {
    readonly [K in keyof Account]: Account[K];
  };
  // すべてのフィールドを書き込み可能にする
  type Account2 = {
    -readonly [K in keyof ReadonlyAccount]: Account[K];
  };
  // すべてのフィールドを必須にする
  type Account3 = {
    [K in keyof OptionalAccount]-?: Account[K];
  };

  // 組込みのマップ型
  {
    // Record<Keys, Values>：Keys型のキーとValues型の値を持つオブジェクト
    type NextDay = Record<Weekday, Day>;

    // Partial<Object>：Object内のすべてのフィールドを省略可能とする
    type OptionalNextDay = Partial<NextDay>;

    // Required<Object>：Object内のすべてのフィールドを必須とする
    type RequiredNextDay = Required<OptionalNextDay>;

    // Readonly<Object>：Object内のすべてのフィールドを読み取り専用とする
    type ReadonlyNextDay = Required<NextDay>;

    // Pick<Object, Keys>：指定されたKeysだけを持つ、Objectのサブタイプを返す
    type MonNextDay = Pick<NextDay, 'Mon' | 'Fri'>;
  }
}
