package chapter_06_collection;

import java.util.ArrayList;

public class ArrayListTest {
    public static void main(String[] args) {
        // ArrayListは連続メモリ領域が必要になるため、要素数の上限が分かっている場合は
        // あらかじめ初期サイズをコンストラクタに指定することで再確保の無駄を省ける
        var list = new ArrayList<String>(3);

        list.add("one");
        list.add("two");
        list.add("three");

        for (var s : list) {
            System.out.println(s);
        }
    }
}
