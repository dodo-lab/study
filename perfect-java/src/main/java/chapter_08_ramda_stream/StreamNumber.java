package chapter_08_ramda_stream;

import java.security.SecureRandom;
import java.util.List;
import java.util.Random;
import java.util.SplittableRandom;
import java.util.stream.*;

public class StreamNumber {
    // 指定の数値範囲を要素とする数値ストリーム
    private static void numberRange() {
        // 0～9の要素を持つ配列を生成
        int[] arr1 = IntStream.range(0, 10).toArray();
        for (var i : arr1) {
            System.out.print(i + " ");
        }
        System.out.println();

        // 0～10の要素を持つ配列を生成
        int[] arr2 = IntStream.rangeClosed(0, 10).toArray();
        for (var i : arr2) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    // 乱数ストリーム
    private static void randStream() {
        // すべて無限ストリーム
        IntStream intStream1 = new Random().ints();
        IntStream intStream2 = new SplittableRandom().ints();
        IntStream intStream3 = new SecureRandom().ints();

        intStream1.limit(3).forEach(i -> System.out.print(i + " "));
        System.out.println();
        intStream2.limit(4).forEach(i -> System.out.print(i + " "));
        System.out.println();
        intStream3.limit(5).forEach(i -> System.out.print(i + " "));
        System.out.println();
    }

    // 数値ストリームと非数値ストリームとの相互変換
    private static void convert() {
        // 数値ストリーム
        IntStream intStream = IntStream.range(0, 10);

        // IntStreamから別の数値ストリームへの変換
        LongStream longStream = intStream.asLongStream();
        DoubleStream doubleStream = intStream.asDoubleStream();

        // IntStreamからラッパーオブジェクト型ストリームへの変換
        Stream<Integer> integerStream1 = intStream.boxed();
        Stream<Integer> integerStream2 = intStream.mapToObj(Integer::valueOf);
        Stream<Integer> integerStream3 = intStream.mapToObj(n -> n);

        // ラッパーオブジェクト型ストリームからIntStreamへの変換
        IntStream intStream2 = integerStream1.mapToInt(n -> n);

        // 数値ストリームからListオブジェクトへの変換
        List<Integer> list = intStream.boxed().collect(Collectors.toList());
    }

    public static void main(String[] args) {
        numberRange();
        randStream();
    }
}
