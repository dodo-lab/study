package chapter_03_number;

import static util.UtilFunctions.printObjects;

public class NumberTest {
    /**
     * 有効な整数リテラルの例
     */
    public static void enableNumberLiterals() {
        printObjects(255);   // 10進数
        printObjects(0xff);  // 16進数
        printObjects(-0xff); // 16進数の負数
        printObjects(0377);  // 8進数
        printObjects(0b11111111);    // 2進数
    }

    /**
     * 文字から数値への変換
     */
    public static void CharacterToNumber() {
        int n1 = Character.digit('1', 10);  // 10進数
        int n2 = Character.digit('f', 16);  // 16進数
        int n3 = Character.digit('f', 10);  // 変換できない場合は-1となる
        printObjects(n1, n2, n3);
    }

    /**
     * 数値から文字への変換
     */
    public static void NumberToCharacter() {
        char c1 = Character.forDigit(1, 10);    // 10進数(0)
        char c2 = Character.forDigit(10, 16);   // 16進数(a)
        char c3 = Character.forDigit(10, 10);   // 変換できない場合は0x00となる
        printObjects(c1, c2, c3);
    }
}
