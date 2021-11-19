# Animations | React Native Docs

React Native には２つの補完的なアニメーションシステムがある。

- Animated

  特定の値を細かくインタラクティブに制御する

- LayoutAnimation

  グローバルなレイアウトトランザクションをアニメーション化する

## [Animated](https://reactnative.dev/docs/animations#animated-api)

様々なアニメーションやインタラクションのパターンを、簡潔に表現できるように設計されている。Animated は入力と出力の間の関係に焦点を当てている。入力／出力間の変移における設定や、時間ベースのアニメーション実行を制御するための開始／停止メソッドを備えている。

Animated は、以下 6 つのアニメーション可能なコンポーネントを提供している。

- Animated.View
- Animated.Text
- Animated.Image
- Animated.ScrollView
- Animated.FlatList
- Animated.SectionList

`Animated.createAnimatedComponent()`を使って、独自のアニメーションコンポーネントを作成することも可能。

### アニメーションの設定

アニメーションは細かく設定できる。カスタムおよび定義済みのイージング関数、遅延、持続時間、減衰係数、バネ定数など、アニメーションの種類に応じて調整可能。

Animated が提供しているアニメーションタイプのうち、最もよく使われるのは`Animated.timing()`。これは、様々な定義済みのイージング関数のうちの１つを利用して、時間経過によるアニメーションをサポートしている。また、独自のイージング関数を使用することも可能。

デフォルトのイージング関数は、ピークまで徐々に加速し、最後は徐々に減速して停止する `easeinOut` カーブが使用されている。以下のように、`easing`パラメータを指定することで、別のイージング関数を指定できる。

```js
const xPosition = useRef(new Animated.Value(0)).current;

Animated.timing(this.state.xPosition, {
  toValue: 100,
  easing: Easing.bounce,
  duration: 1000,
  useNativeDriver: true,
}).start();
```

### アニメーションの使い方

フェードインのアニメーションを例に、使い方を説明。

まず、Opacity(透明度)のアニメーション値を管理するインスタンスを生成する。
フェードインのため、初期値は 0 とする。

```js
const fadeAnim = useRef(new Animated.Value(0)).current;
```

次に`Animated`の API を使って、アニメーションの設定と開始をする。
設定時には、先ほど生成したインスタンスを引数として渡す。

```js
// 設定
const animation = Animated.timing(fadeAnim, {
  toValue: 1, // アニメーションのゴール地点（目標値）
  duration: 1000, // アニメーションさせる時間
  useNativeDriver: true, // ネイティブドライバを使用（詳細は後述）
});

// 開始
animation.start();
```

最後に、レンダーする要素にアニメーションを適用させる。

```js
<Animated.View style={{ opacity: fadeAnim }}>
  <Text>FadeIn</Text>
</Animated.View>
```

### アニメーション値の補間

`Animated.Value`で生成したアニメーション値は、`interpolate`メソッドを使うことで表現したい範囲に補間することが可能。補間には入力範囲と出力範囲を指定する。

- `0 ～ 1`を`0 ～ 100`に補間

  ```js
  const animValue = useRef(new Animated.Value(0)).current;
  const outputValue = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  ```

  | Input | Output |
  | ----: | -----: |
  |     0 |      0 |
  |   0.5 |     50 |
  |     1 |    100 |

- `0 ～ 1`を`100 ～ 0`に補間

  ```js
  const outputValue = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });
  ```

  | Input | Output |
  | ----: | -----: |
  |     0 |    100 |
  |   0.5 |     50 |
  |     1 |      0 |

- `0 ～ 1`を`0deg ～ 360deg`に補間

  ```js
  const animValue = useRef(new Animated.Value(0)).current;
  const outputValue = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  ```

  | Input |  Output |
  | ----: | ------: |
  |     0 |   0 deg |
  |   0.5 | 180 deg |
  |     1 | 360 deg |

- 複数範囲指定で補間

  ```js
  const outputValue = animValue.interpolate({
    inputRange: [-300, -100, 0, 100, 101],
    outputRange: [300, 0, 1, 0, 0],
  });
  ```

  | Input | Output |
  | ----: | -----: |
  |  -400 |    450 |
  |  -300 |    300 |
  |  -200 |    150 |
  |  -100 |      0 |
  |   -50 |    0.5 |
  |     0 |      1 |
  |    50 |    0.5 |
  |   100 |      0 |
  |   101 |      0 |
  |   200 |      0 |

### ネイティブドライバの使用

ネイティブドライバを使用すると、アニメーション開始前にすべてのアニメーション情報をネイティブ側へ送信する。それにより、ブリッジを経由することなくネイティブの UI スレッドでアニメーションを動かせるため、パフォーマンスが向上する。

使い方は以下のように、アニメーションの設定に `useNativeDriver: true` を追加するだけで OK。

```js
Animated.timing(animValue, {
  toValue: 1,
  duration: 500,
  useNativeDriver: true,
}).start();
```

ただし、`Animated`で提供しているすべてのアニメーションでネイティブドライバを使用できるわけではない。詳細は[こちら](https://reactnative.dev/docs/animations#caveats)を参照。

## [LayoutAnimation](https://reactnative.dev/docs/animations#layoutanimation-api)

LayoutAnimation を使用すると、次のレンダリング／レイアウトのサイクルですべてのビューに使用されるアニメーションの作成と更新をグローバルに設定可能。

Android で動作させるためには、UIManager で以下のようにフラグを設定する必要がある。

```js
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
```
