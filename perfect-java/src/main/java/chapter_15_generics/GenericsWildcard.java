package chapter_15_generics;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class GenericsWildcard {
    private void read(List<? extends CharSequence> list) {
        if (list.size() > 0) {
            for (var value : list) {
                System.out.println(value);
            }
        }

        // 以下の4行はすべてコンパイルエラー
        // list.add(new String("123"));
        // list.add(new StringBuilder("456"));
        // String s = list.get(0);
        // StringBuilder sb = list.get(0);
    }

    private void write(List<? super CharSequence> list) {
        list.add(new String("123"));
        list.add(new StringBuilder("456"));
    }

    public static void main(String[] args) {
        var genericsWildcard = new GenericsWildcard();

        var list = new ArrayList<String>(List.of("abc", "def"));
        genericsWildcard.read(list);

        List<CharSequence> list2 = new ArrayList<>();
        genericsWildcard.write(list2);
        genericsWildcard.read(list2);
    }
}
