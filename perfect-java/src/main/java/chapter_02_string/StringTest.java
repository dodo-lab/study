package chapter_02_string;

import java.nio.charset.StandardCharsets;

public class StringTest {
    public static void NumberToString() {
        // 整数を文字列に変換
        String str = Integer.toString(255);
        System.out.println(str);

        // 整数を16進数形式で文字列に変換
        String str16 = Integer.toString(255, 16);
        System.out.println(str16);

        // 数値-1の内部ビット表現を文字列で表す
        String str16Bit = Integer.toHexString(-1);
        String strBinary = Integer.toBinaryString(-1);
        System.out.println(str16Bit);
        System.out.println(strBinary);
    }

    public static void StringToNumber() {
        int i = Integer.parseInt("255");

        // 基数を指定
        int ib = Integer.parseInt("ff", 16);
    }

    public static void format() {
        String s = String.format("%s -> %d", "one", 1);
        System.out.println(s);
    }

    public static void utf8ToString() {
        byte[] bytes = new byte[]{(byte) 0xe3, (byte) 0x81, (byte) 0x82, (byte) 0xe3, (byte) 0x81, (byte) 0x84};
        String s = new String(bytes, StandardCharsets.UTF_8);
        System.out.println(s);
    }

    public static void stringToUtf8() {
        String s = "あい";
        byte[] bytes = s.getBytes(StandardCharsets.UTF_8);
        System.out.println(bytes);
    }
}
