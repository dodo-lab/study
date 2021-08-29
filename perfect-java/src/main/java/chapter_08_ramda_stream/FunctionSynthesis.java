package chapter_08_ramda_stream;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

public class FunctionSynthesis {
    // Functionの関数合成
    private static void functionSynthesis() {
        System.out.println("- functionSynthesis -");

        // 関数単体の定義
        Function<String, Integer> strLength = String::length;   // 文字列長を返す関数
        Function<Integer, String> itoHex = i -> Integer.toString(i, 16);    // 数値を16進数文字列にする関数
        Function<Integer, Integer> inc = n -> n + 1;    // インクリメントする関数

        // 2つの関数を合成
        Function<String, String> newFunc = strLength.andThen(itoHex);
        System.out.println(newFunc.apply("0123456789"));    // "0123456789"の文字列長10を16進数文字列にする("a"を出力)

        // 3つ以上の関数合成も可能
        Function<Integer, Integer> inc3 = inc.andThen(inc).andThen(inc);
        System.out.println(inc3.apply(10)); // インクリメント3回実行 ("13"を出力)
    }

    // Consumerの関数合成
    private static void consumerSynthesis() {
        System.out.println("- consumerSynthesis -");

        // 処理単体の定義
        Consumer<String> proc1 = msg -> System.out.println("showing1: " + msg);
        Consumer<String> proc2 = msg -> System.out.println("showing2: " + msg);

        // 2つの処理を合成した処理
        Consumer<String> proc1then2 = proc1.andThen(proc2);
        proc1then2.accept("foobar");
    }

    // Predicateの関数合成
    private static void predicateSynthesis() {
        System.out.println("- predicateSynthesis -");

        // 関数単体の定義
        Predicate<Integer> isPositive = n -> n > 0;
        Predicate<Integer> isEven = n -> n % 2 == 0;

        // negateで論理反転
        Predicate<Integer> isNegative = isPositive.negate();
        System.out.println(isNegative.test(-1));

        // 整数且つ偶数を判定
        Predicate<Integer> isPositiveEven = isPositive.and(isEven);
        System.out.println(isPositiveEven.test(10));
    }

    public static void main(String[] args) {
        FunctionSynthesis.functionSynthesis();
        FunctionSynthesis.consumerSynthesis();
        FunctionSynthesis.predicateSynthesis();
    }
}
