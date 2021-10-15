export default function ConditionalType() {
  console.log('[条件型]');

  // 条件型
  {
    type IsString<T> = T extends string ? true : false;
    type A = IsString<string>; // true
    type B = IsString<number>; // false
  }

  // 分配条件型
  {
    type ToArray<T> = T[];
    type A = ToArray<number>; // number[]
    type B = ToArray<number | string>; // (string | number)[]

    type ToArray2<T> = T extends unknown ? T[] : T[];
    type C = ToArray2<number>; // number[]
    type D = ToArray2<number | string>; // string[] | number[]

    type WithOut<T, U> = T extends U ? never : T;
    type E = WithOut<boolean | number | string, boolean>; // string | number
  }

  // inferキーワード（ジェネリック型をインラインで宣言するための構文）
  {
    // 通常のジェネリック型（配列の要素型を取得する条件型）
    type ElementType<T> = T extends unknown[] ? T[number] : T;
    type A = ElementType<number[]>; // number

    // inferキーワード（配列の要素型を取得する条件型）
    type ElementType2<T> = T extends (infer U)[] ? U : T;
    type B = ElementType2<number[]>; // number

    // 2番目の引数を取得する条件型
    type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never;
    // Array.sliceの型を取得
    type Slice = typeof Array['prototype']['slice'];
    // Array.sliceの2番目の引数の型を取得
    type C = SecondArg<Slice>; // number | undefined
  }

  // 組込み条件型
  {
    // Exclude<T, U>：Tに含まれて、Uに含まれない型を抽出
    type A = Exclude<string | number, string>; // number

    // Extract<T, U>：Tに含まれている型のうち、Uに割り当てることができるものを抽出
    type B = Extract<string | number, string>; // string

    // NonNullable<T>：nullとundefinedを除外した型を抽出
    type C = NonNullable<string | boolean | null | undefined>; // string | boolean

    // ReturnType<F>：関数の戻り値の型を抽出
    type Func = (a: number) => string;
    type D = ReturnType<Func>; // string

    // InstanceType<C>：クラスコンストラクタのインスタンス型を抽出
    type Type1 = { new (): Type2 };
    type Type2 = { a: number; b: string };
    type E = InstanceType<Type1>; // {a: number; b: string;}
  }
}
