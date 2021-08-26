package chapter_06_collection;

import java.util.List;

public class IteratorTest {
    public static void main(String[] args) {
        var list = List.of(10, 25, 5, 100, 55);

        for (var it = list.iterator(); it.hasNext(); ) {
            Integer n = it.next();
            System.out.print(n + " ");
        }
        System.out.println();

        for (var it = list.listIterator(list.size()); it.hasPrevious(); ) {
            Integer n = it.previous();
            System.out.print(n + " ");
        }
        System.out.println();
    }
}
