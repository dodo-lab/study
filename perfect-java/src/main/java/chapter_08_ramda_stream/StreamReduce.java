package chapter_08_ramda_stream;

import java.util.Arrays;
import java.util.IntSummaryStatistics;
import java.util.stream.IntStream;

public class StreamReduce {
    private static void intStreamReduce() {
        var stat = IntStream.range(0, 20).collect(
                IntSummaryStatistics::new,
                IntSummaryStatistics::accept,
                IntSummaryStatistics::combine);

        System.out.printf("%d,%d,%d,%d,%f\n", stat.getCount(), stat.getSum(), stat.getMin(), stat.getMax(), stat.getAverage());
    }

    private static void stringStreamReduce() {
        var list = Arrays.asList("zzz", "aa", "bbb", "x");

        // reduceメソッドで文字列長の最小値を求める
        int min1 = list.parallelStream().reduce(
                Integer.MAX_VALUE,
                (n1, s) -> {
                    int n2 = s.length();
                    return Integer.min(n1, n2);
                },
                Integer::min);
        System.out.println(min1);

        // 上記は次のようにも書ける
        int min2 = list.parallelStream().mapToInt(String::length).min().orElse(0);
        System.out.println(min2);
    }

    public static void main(String[] args) {
        intStreamReduce();
        stringStreamReduce();
    }
}
