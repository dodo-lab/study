package chapter_05_class;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;

public class AnonymousClass {
    public static void main(String[] args) {
        var list = Arrays.asList("xyz", "defghi", "abc");

        // 匿名クラスから匿名オブジェクトを生成
        var stringLengthComparator = new Comparator<String>() {
            @Override
            public int compare(String s, String t1) {
                return s.length() - t1.length();
            }
        };

        list.sort(stringLengthComparator);
        System.out.println(list);
    }
}
