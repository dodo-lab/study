package chapter_13_enum_constant;

import java.util.Collections;
import java.util.List;

public class ImmutableCollection {
    private final List<String> list;

    public ImmutableCollection() {
        list = List.of("abc", "def", "ghi");
    }

    public List<String> getList() {
        // Collections.unmodifiableListメソッドを利用することで、読み取り専用のリストにすることができる
        return Collections.unmodifiableList(list);
    }

    public static void main(String[] args) {
        var collection = new ImmutableCollection();
        var list = collection.getList();

        // リストに要素を追加しようとすると、UnsupportedOperationException例外が起きる
        try {
            list.add("123");
        } catch (UnsupportedOperationException e) {
            System.out.println("UnsupportedOperationException 例外検知");
            e.printStackTrace();
        }
    }
}
