# ラムダ式とストリーム

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [ラムダ式とストリーム](#ラムダ式とストリーム)
  - [1.メソッド参照の文法](#1メソッド参照の文法)
  - [2.標準関数型インターフェース](#2標準関数型インターフェース)
    - [2-1.ベースとなる標準関数型インターフェース](#2-1ベースとなる標準関数型インターフェース)
    - [2-2.基本型のための標準関数インターフェース](#2-2基本型のための標準関数インターフェース)
      - [2-2-1.基本型のためのFunctionインターフェース](#2-2-1基本型のためのfunctionインターフェース)
      - [2-2-2.基本型のためのPredicateインターフェース](#2-2-2基本型のためのpredicateインターフェース)
      - [2-2-3.基本型のためのConsumerインターフェース](#2-2-3基本型のためのconsumerインターフェース)
      - [2-2-4.基本型のためのSupplierインターフェース](#2-2-4基本型のためのsupplierインターフェース)
  - [2-3.演算的な標準関数インターフェース](#2-3演算的な標準関数インターフェース)
  - [2-4.２引数の標準関数インターフェース](#2-4２引数の標準関数インターフェース)

<!-- /code_chunk_output -->

## 1.メソッド参照の文法

  |対象|文法|実例|
  |:--|:--|:--|
  |クラスメソッド|クラス名::クラスメソッド|String::toString|
  |インスタンスメソッド|オブジェクト参照::インスタンスメソッド|System.out::println|
  |インスタンスメソッド（レシーバオブジェクトが第一引数）|型名::インスタンスメソッド名|StringBuilder::append|
  |コンストラクタ|クラス名::new|String::new|

## 2.標準関数型インターフェース

### 2-1.ベースとなる標準関数型インターフェース

  |インターフェース|抽象メソッド|メソッドの形の説明|
  |:--|:--|:--|
  |Function`<T,R>`|`R apply(T t)`|入力が`T`型のオブジェクト、出力が`R`型のオブジェクト|
  |Predicate`<T>`|`boolean test(T t)`|入力が`T`型オブジェクト、出力が`boolean`|
  |Consumer`<T>`|`void accept(T t)`|入力が`T`型オブジェクト、出力なし|
  |Supplier`<T>`|`T get()`|入力なし、出力は`T`型オブジェクト|

### 2-2.基本型のための標準関数インターフェース

#### 2-2-1.基本型のためのFunctionインターフェース

  |インターフェース|抽象メソッド|
  |:--|:--|
  |IntFunction`<R>`|`R apply(int value)`|
  |LongFunction`<R>`|`R apply(long value)`|
  |DoubleFunction`<R>`|`R apply(double value)`|
  |IntToLongFunction|`long applyAsLong(int value)`|
  |IntToDoubleFunction|`double applyAsDouble(int value)`|
  |LongToIntFunction|`int applyAsInt(long value)`|
  |LongToDoubleFunction|`double applyAsDouble(long value)`|
  |DoubleToIntFunction|`int applyAsInt(double value)`|
  |DoubleToLongFunction|`long applyAsLong(double value)`|
  |ToIntFunction`<T>`|`int applyAsInt(T value)`|
  |ToLongFunction`<T>`|`long applyAsLong(T value)`|
  |ToDoubleFunction`<T>`|`double applyAsDouble(T value)`|

#### 2-2-2.基本型のためのPredicateインターフェース

  |インターフェース|抽象メソッド|
  |:--|:--|
  |IntPredicate|`boolean test(int value)`|
  |LongPredicate|`boolean test(long value)`|
  |DoublePredicate|`boolean test(double value)`|

#### 2-2-3.基本型のためのConsumerインターフェース

  |インターフェース|抽象メソッド|
  |:--|:--|
  |IntConsumer|`void accept(int value)`|
  |LongConsumer|`void accept(long value)`|
  |DoubleConsumer|`void accept(double value)`|

#### 2-2-4.基本型のためのSupplierインターフェース

  |インターフェース|抽象メソッド|
  |:--|:--|
  |BooleanSupplier|`boolean getAsBoolean()`|
  |IntSupplier|`void getAsInt()`|
  |LongSupplier|`void getAsLong()`|
  |DoubleSupplier|`void getAsDouble()`|

## 2-3.演算的な標準関数インターフェース

  演算的なという表現は、抽象メソッドの入力と出力が一致している関係を示す。
  |インターフェース|抽象メソッド|
  |:--|:--|
  |UnaryOperator`<T>`|`T apply(T t)`|
  |BinaryOperator`<T>`|`T apply(T t1, T t2)`|
  |IntUnaryOperator|`int applyAsInt(int operand)`|
  |IntBinaryOperator|`int applyAsInt(int left, int right)`|
  |LongUnaryOperator|`long applyAsLong(long operand)`|
  |LongBinaryOperator|`long applyAsLong(long left, long right)`|
  |DoubleUnaryOperator|`double applyAsDouble(double operand)`|
  |DoubleBinaryOperator|`double applyAsDouble(double left, double right)`|

## 2-4.２引数の標準関数インターフェース

  |インターフェース|抽象メソッド|
  |:--|:--|
  |BiFunction`<T,U,R>`|`R apply(T t, U u)`|
  |BiPredicate`<T,U>`|`boolean test(T t, U u)`|
  |BiConsumer`<T,U>`|`void accept(T t, U u)`|
  |ObjIntConsumer`<T>`|`void accept(T t, int value)`|
  |ObjLongConsumer`<T>`|`void accept(T t, long value)`|
  |ObjDoubleConsumer`<T>`|`void accept(T t, double value)`|
  |ToIntBiFunction`<T,U>`|`int applyAsInt(T t, U u)`|
  |ToLongBiFunction`<T,U>`|`long applyAsLong(T t, U u)`|
  |ToDoubleBiFunction`<T,U>`|`double applyAsDouble(T t, U u)`|