package chapter_11_number2;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class BigDecimalTest {
    public static void main(String[] args) {
        // BigDecimalは誤差のない小数点を扱える
        // BigInteger同様に、算術演算用メソッドを利用する必要あり
        var n1 = new BigDecimal("1.024");
        var n2 = new BigDecimal("10.24");

        var add = n1.add(n2);
        System.out.println(add);

        // 1 割る 3 のように計算結果が無限小数になる場合、実行時例外(ArithmeticException)が起きる
        try {
            var divide = new BigDecimal("1").divide(new BigDecimal("3"));
        } catch (ArithmeticException e) {
            e.printStackTrace();
        }
        // 例外を回避するには計算の打ち切り規則を指定する必要がある
        var divide1 = new BigDecimal("1").divide(new BigDecimal("3"), RoundingMode.HALF_UP);
        var divide2 = new BigDecimal("1.000").divide(new BigDecimal("3"), RoundingMode.HALF_UP);
        var divide3 = new BigDecimal("1").divide(new BigDecimal("3"), 5, RoundingMode.HALF_UP);
        System.out.println(divide1);
        System.out.println(divide2);
        System.out.println(divide3);

        // 比較 ("1.0"と"1.00"は不一致になる)
        var equals = new BigDecimal("1.0").equals(new BigDecimal("1.00"));
        System.out.println(equals);

        // 大小比較
        var compareTo = n1.compareTo(n2);
        System.out.println(compareTo);
    }
}
