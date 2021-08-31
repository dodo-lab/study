package chapter_08_ramda_stream;

import java.util.*;
import java.util.stream.Collectors;

public class StreamCollect {
    private static void collect() {
        var list = List.of("abc", "1234", "def");
        var result = list.stream().collect(
                // ArrayList<Integer>型の初期リストを生成（並列処理ごとに生成）
                ArrayList<Integer>::new,
                // 部分リストに要素（文字列長）を追加
                (partialList, s) -> partialList.add(s.length()),
                // 部分リストのマージ処理
                ArrayList::addAll);
        result.forEach(n -> System.out.print(n + " "));
        System.out.println();

        // 上記を更に簡潔に記述
        var result2 = list.stream().map(String::length).collect(Collectors.toList());
        result2.forEach(n -> System.out.print(n + " "));
        System.out.println();
    }

    private static <S, T> Map<S, T> multiCollect(Collection<S> c1, Collection<T> c2) {
        // 要素型Sと要素型Tのコレクションを入力として、それぞれの要素をキーと値にしたMap<S,T>を生成
        // ※parallelStreamにすると動かない
        Iterator<T> it = c2.iterator();
        return c1.stream()
                .filter(x -> it.hasNext())
                .collect(
                        HashMap<S, T>::new,
                        (map, s) -> map.put(s, it.next()),
                        HashMap::putAll
                );
    }

    public static void main(String[] args) {
        collect();

        var list1 = List.of("one", "two", "three");
        var list2 = List.of(1, 2, 3);
        var map = multiCollect(list1, list2);
        map.forEach((k, v) -> System.out.println(k + " : " + v));
    }
}
