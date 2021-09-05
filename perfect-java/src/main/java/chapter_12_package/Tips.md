# package

## 暗黙のインポート

- 言語仕様上、`java.lang`パッケージは暗黙にインポートしている
- 同様に自身と同じパッケージも暗黙にインポートしている

## インポートと名前の衝突

インポートで単純名の名前が衝突する３例

```java
// 1 : 同じ単純名を単一型インポートするとコンパイルエラー

import java.util.List;
import java.awt.List;
```

```java
// 2 : オンデマンドインポートで同じ単純名になる型名を使うとコンパイルエラー

import java.util.*;
import java.awt.*;
// この時点ではコンパイルエラーにはならず、次のようにList型を宣言するとコンパイルエラー
List list;
```

```java
// 3 : 単一型インポートした単純名のクラスと同名クラスを宣言するとコンパイルエラー

import java.util.List;

class List {
    // 省略
}
```

## パッケージ可視とアクセス制御

クラスやインターフェースのデフォルトアクセス修飾子はパッケージ可視。パッケージ可視とは他のパッケージから見えないアクセス制御。

ただし、型として見えない点と、その型のインスタンスを参照できるかどうかは別。 具体例は以下の通り。

```java
package my;

// パブリック可視のMyインターフェース
interface my {
    void exec();
}

// ★パッケージ可視のMyImplクラス★
class MyImpl implements My {
    public void exec() {
        System.out.println("MyImpl#exec");
    }
}

// パブリック可視のMyFactoryクラス
public class MyFactory {
    public static My createMy() {
        return new MyImpl();
    }
}
```

```java
package you;

import my.*;

public class You {
    public static void main(String[] args) {
        // MyImplクラスはパッケージ可視のため、直接オブジェクトを生成することはできないが、
        // パブリック可視のMyインターフェースを戻り値とした MyFactory.createMy()メソッドを
        // 軽油することでMyImplオブジェクトを参照することができる。
        My my = MyFactory.createMy();
        my.exec();
    }
}
```