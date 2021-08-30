package chapter_08_ramda_stream;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamBasic {
    private static void listStream() {
        var list = Arrays.asList("abc", "xyz", "defghi", "a");

        list.stream()
                // ストリームの中間フィルター処理（"a"を含む文字列だけを抽出）
                .filter(s -> s.contains("a"))
                // ストリームの中間マップ処理（大文字に変換）
                .map(String::toUpperCase)
                // ストリームの終端処理（文字列を出力）
                .forEach(System.out::println);
    }

    private static void mapStream() {
        var map = Map.of(
                "one", 1,
                "tow", 2,
                "three", 3
        );

        // キーと値を表示
        map.entrySet().stream().forEach(e -> System.out.println(e.getKey() + ", " + e.getValue()));
        map.entrySet().forEach(e -> System.out.println(e.getKey() + ", " + e.getValue()));

        // 値だけを表示
        map.entrySet().stream().map(Map.Entry::getValue).forEach(System.out::println);
        map.values().stream().forEach(System.out::println);
    }

    private static void factory() {
        // 可変長引数のofメソッド
        var stream1 = Stream.of("abc", "xyz", "defghi", "a");

        // 無限に文字列を生成するストリーム
        var stream2 = Stream.generate(() -> "foo");

        // "0"から始まり、数値をインクリメントした文字列を要素とする無限ストリーム
        var stream3 = Stream.iterate("0", s -> {
            int n = Integer.parseInt(s);
            ++n;
            return String.valueOf(n);
        });

        stream1.forEach(System.out::println);
        // 無限ストリームはlimitのように、途中で打ち切る中間処理が必須
        stream2.limit(3).forEach(System.out::println);
        stream3.limit(5).forEach(System.out::println);
    }

    private static void builder() {
        // Stream.Builderオブジェクトを生成
        Stream.Builder<String> builder = Stream.builder();

        // ストリーム処理の対象要素を追加
        builder.add("foo");
        builder.add("bar").add("baz");  // メソッドチェインも可能

        var stream = builder.build();
        stream.forEach(System.out::println);
    }

    private static void streamToCollection() {
        var stream = Stream.of("abc", "xyz", "defghi", "a");

        // StreamからListオブジェクトを生成
        var list1 = stream.collect(Collectors.toList());
        var list2 = list1.stream().collect(Collectors.toCollection(ArrayList::new));
        list1.forEach(System.out::println);
        list2.forEach(System.out::println);

        // StreamからSetオブジェクトを生成
        var set = list1.stream().collect(Collectors.toSet());
        set.forEach(System.out::println);

        // StreamからMapオブジェクトを生成
        var map = list1.stream().collect(Collectors.toMap(Function.identity(), Function.identity()));
        map.forEach((k, v) -> System.out.println(k + " : " + v));

        // Streamから配列を生成
        var array = list1.stream().toArray(String[]::new);
        for (var s : array) {
            System.out.println(s);
        }
    }

    public static void main(String[] args) {
        listStream();
        mapStream();
        factory();
        builder();
        streamToCollection();
    }
}
