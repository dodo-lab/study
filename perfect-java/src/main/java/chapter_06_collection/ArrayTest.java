package chapter_06_collection;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class ArrayTest {
    public static void main(String[] args) {
        // 配列からListオブジェクトに変換
        StringBuilder[] array1 = {new StringBuilder("123"), new StringBuilder("456")};
        var list1 = Arrays.asList(array1);
        list1.forEach(System.out::println);

        // asListは配列要素をコピーする訳ではなく、変換先のListが変換元の配列を参照するため、
        // 生成されたListに対して要素の追加や削除は禁止されている。
        // 追加や削除を実行した場合、UnsupportedOperationExceptionの例外が発生する。
        try {
            list1.add(new StringBuilder("789"));
        } catch (UnsupportedOperationException e) {
            System.out.println("UnsupportedOperationException 補足");
            e.printStackTrace();
        }

        // 配列からListへ変換後に要素の追加や削除をする場合は、CollectionsクラスのaddAllメソッドを使う。
        var list2 = new ArrayList<StringBuilder>();
        Collections.addAll(list2, array1);
        list2.add(new StringBuilder("789"));
        list2.forEach(System.out::println);

        // Collectionオブジェクトから配列に変換
        StringBuilder[] array2 = list2.toArray(new StringBuilder[0]);
        for (var s : array2) {
            System.out.println(s);
        }
    }
}
