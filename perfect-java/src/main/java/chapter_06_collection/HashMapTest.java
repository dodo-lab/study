package chapter_06_collection;

import java.util.HashMap;

public class HashMapTest {
    public static void main(String[] args) {
        // コンフリクトによる速度低下を防ぐため、HashMapは自動的にハッシュ表のサイズを拡張する。
        // ハッシュ表の拡張処理は全ての既存要素のハッシュ計算が必要になるため、軽い処理ではない。
        // そのため、無駄な拡張処理を防ぐために最初に適切なハッシュ表のサイズをコンストラクタで指定する。
        var map = new HashMap<String, String>(3);
        map.put("0", "zero");
        map.put("1", "one");
        map.put("2", "two");

        map.forEach((key, value) -> System.out.println(key + " : " + value));
    }
}
