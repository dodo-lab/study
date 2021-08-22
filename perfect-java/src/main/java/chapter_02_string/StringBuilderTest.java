package chapter_02_string;

public class StringBuilderTest {
    /**
     * 小文字を大文字に変換
     *
     * @param stringBuilder 変換する文字列
     * @apiNote StringクラスのtoUpperCaseメソッドを使うコードの方が良い
     */
    public static void toUpperCase(StringBuilder stringBuilder) {
        for (int i = 0; i < stringBuilder.length(); ++i) {
            char c = stringBuilder.charAt(i);
            char uc = Character.toUpperCase(c);
            stringBuilder.setCharAt(i, uc);
        }
    }

    /**
     * StringクラスからStringBuilderクラスへの変換
     *
     * @param str String
     * @return StringBuilder
     */
    public static StringBuilder toStringBuilder(String str) {
        return new StringBuilder(str);
    }

    /**
     * StringBuilderクラスからStringクラスへの変換
     *
     * @param stringBuilder StringBuilder
     * @return String
     */
    public static String toString(StringBuilder stringBuilder) {
        return stringBuilder.toString();
    }

    /**
     * 文字列の結合
     *
     * @param strings 結合する文字列の配列
     * @return 結合後の文字列
     */
    public static String concat(String[] strings) {
        StringBuilder stringBuilder = new StringBuilder();
        for (var string : strings) {
            stringBuilder.append(string);
        }

        return stringBuilder.toString();
    }
}
