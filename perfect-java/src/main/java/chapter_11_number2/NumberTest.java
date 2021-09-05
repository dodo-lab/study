package chapter_11_number2;

import java.math.BigInteger;

public class NumberTest {
    // strictfp を付与すると、プラットフォームに依存しない浮動小数点演算を行う
    // strictfp が付与されてなければ、高速化のためプラットフォーム依存の浮動小数点演算を行う可能性がある
    private static strictfp void calc() {
        double d = 1.0 / 3.0 * 0.012345;
    }

    private static void numberObject() {
        Integer i0 = 1;
        Integer i1 = 1;

        // 絶対値が小さい値の場合、同じ値の数値に同じ数値オブジェクトを使いまわす実装になっている
        // そのため、数値オブジェクトの==演算子でも、たまたま同値性判定をする場合もある
        // ※本来はequalsメソッドを使用すべき
        if (i0 == i1) {
            System.out.println("equal");
        }
    }

    public static void main(String[] args) {
        numberObject();
    }
}
