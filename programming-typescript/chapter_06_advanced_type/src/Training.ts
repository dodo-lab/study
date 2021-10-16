// T, U どちらかに含まれ、両方に含まれるものは除外した型を計算
type Exclusive<T, U> = Exclude<T, U> | Exclude<U, T>;
type R = Exclusive<1 | 2 | 3, 2 | 3 | 4>; // 1 | 4
