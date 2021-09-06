package chapter_13_enum_constant;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ImmutableCollection {
    private final List<String> immutableList;
    private final List<String> normalList;

    public ImmutableCollection() {
        // List.ofで生成したリストは不変リストになる
        immutableList = List.of("abc", "def", "ghi");
        // new ArrayListで生成したリストは不変リストではない
        normalList = new ArrayList<>(immutableList);
    }

    // このメソッドで取得したオブジェクトからは変更可能
    public List<String> getNormalList() {
        return normalList;
    }

    // 同じnormalListでも、Collections.unmodifiableListメソッドを利用することで、読み取り専用のリストにすることが可能
    public List<String> getReadonlyNormalList() {
        return Collections.unmodifiableList(normalList);
    }

    // immutableListはList.ofで生成しているため、最初から変更不可能
    public List<String> getImmutableList() {
        return immutableList;
    }

    public static void main(String[] args) {
        var collection = new ImmutableCollection();

        // getNormalListは変更可能
        var normalList = collection.getNormalList();
        normalList.add("123");

        // getReadonlyNormalListは変更不可能
        var readonlyNormalList = collection.getReadonlyNormalList();
        try {
            readonlyNormalList.add("123");
        } catch (UnsupportedOperationException exception) {
            System.out.println("readonlyNormalListの例外検知");
            exception.printStackTrace();
        }

        // getImmutableListは変更不可能
        var immutableList = collection.getImmutableList();
        try {
            immutableList.add("123");
        } catch (UnsupportedOperationException exception) {
            System.out.println("immutableListの例外検知");
            exception.printStackTrace();
        }
    }
}
