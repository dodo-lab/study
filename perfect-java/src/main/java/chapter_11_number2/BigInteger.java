package chapter_11_number2;

public class BigInteger {
    public static void main(String[] args) {
        // BigIntegerクラスは long型より広い範囲の整数を扱える
        // ただし、演算は算術演算用メソッドを利用する必要あり
        var n1 = java.math.BigInteger.valueOf(7);
        var n2 = java.math.BigInteger.valueOf(10);

        // 加算
        var add = n1.add(n2);
        System.out.println(add);
        // 除算
        var divide = n2.divide(java.math.BigInteger.valueOf(3));
        System.out.println(divide);
        // 除算と剰余
        var results = n2.divideAndRemainder(java.math.BigInteger.valueOf(3));
        for (var result : results) {
            System.out.println(result);
        }
    }
}
