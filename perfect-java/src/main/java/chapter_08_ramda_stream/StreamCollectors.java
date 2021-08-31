package chapter_08_ramda_stream;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class StreamCollectors {
    private static void basic() {
        var list = List.of("ab", "c", "def");

        // 文字列連結
        var s = list.stream().collect(Collectors.joining(",", "[", "]"));
        System.out.println(s);

        // カウント処理
        var count = list.stream().collect(Collectors.counting());
        System.out.println(count);

        // 最小値の検索
        list.stream().collect(Collectors.minBy(String::compareTo)).ifPresent(System.out::println);

        // マップ中間処理とcollect処理
        var result = list.stream().collect(Collectors.mapping(String::length, Collectors.toList()));
        result.forEach(n -> System.out.print(n + " "));
        System.out.println();

        // collect処理の後処理
        var frozenList = list.stream().collect(Collectors.collectingAndThen(Collectors.toList(), Collections::unmodifiableList));
        frozenList.forEach(System.out::println);
        int joinLength = list.stream().collect(Collectors.collectingAndThen(Collectors.joining(",", "[", "]"), String::length));
        System.out.println(joinLength);
    }

    enum EvenOdd {
        Even, Odd
    }

    private static void groupingBy() {
        var list = IntStream.rangeClosed(0, 9).boxed().collect(Collectors.toList());

        // 偶数(Even)と基数(Odd)でグルーピング
        var result1 = list.stream().collect(Collectors.groupingBy(n -> n % 2 == 0 ? EvenOdd.Even : EvenOdd.Odd));
        System.out.println(result1);

        // 更にグループごとに要素の総数を出す
        var result2 = list.stream().collect(Collectors.groupingBy(
                n -> n % 2 == 0 ? EvenOdd.Even : EvenOdd.Odd,
                Collectors.counting()));
        System.out.println(result2);
    }

    private static void partitioningBy() {
        var list = IntStream.rangeClosed(0, 9).boxed().collect(Collectors.toList());

        // groupingByは任意数のグループに分割できるが、partitioningByは２分割に限定した処理
        // 偶数と基数の分割であれば、partitioningByでも可能
        var result = list.stream().collect(Collectors.partitioningBy(n -> n % 2 == 0));
        System.out.println(result);
    }

    public static void main(String[] args) {
        basic();
        groupingBy();
        partitioningBy();
    }
}
