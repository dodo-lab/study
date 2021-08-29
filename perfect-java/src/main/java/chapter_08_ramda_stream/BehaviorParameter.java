package chapter_08_ramda_stream;

import java.util.HashMap;
import java.util.Map;

public class BehaviorParameter {
    // 挙動パラメータとして渡すメソッド
    static int twice(int n) {
        System.out.println("twice : " + n);
        return n * 2;
    }

    public static void main(String[] args) {
        var map = new HashMap<Integer, Integer>();

        System.out.println("- put -");
        for (int i = 0; i < 10; ++i) {
            map.put(i, twice(i));
        }

        // putIfAbsentだとキーが存在していても twice が呼び出される
        System.out.println("- putIfAbsent -");
        for (int i = 0; i < 10; ++i) {
            map.putIfAbsent(i, twice(i));
        }

        // computeIfAbsentだとキーが存在する場合、twice が呼ばれない
        System.out.println("- computeIfAbsent -");
        for (int i = 0; i < 10; ++i) {
            map.computeIfAbsent(i, BehaviorParameter::twice);
        }
    }
}
