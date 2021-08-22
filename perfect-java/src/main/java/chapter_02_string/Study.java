package chapter_02_string;

public class Study {
    public static void exec() {
        // コードを見やすくするために複数行に分割（文字列リテラル同士の結合はコンパイル時に行われるため、実行速度に影響は無い）
        String multiStr = "012"
                + "345"
                + "6789";
        System.out.println(multiStr);

        StringBuilder stringBuilder = new StringBuilder("wataru shindo");
        StringBuilderTest.toUpperCase(stringBuilder);
        System.out.println(stringBuilder);

        StringTest.NumberToString();
        StringTest.utf8ToString();
        StringTest.stringToUtf8();

        Book book = new Book("Peopleware", "DeMarco");
        System.out.println(book);
    }
}
