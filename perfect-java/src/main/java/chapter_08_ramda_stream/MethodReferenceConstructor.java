package chapter_08_ramda_stream;

public class MethodReferenceConstructor {
    // コンストラクタのメソッド参照のための関数型インターフェース
    @FunctionalInterface
    interface Creator<E> {
        E createInSAM(int capacity);
    }

    // インスタンスメソッドのメソッド参照のための関数型インターフェース
    @FunctionalInterface
    interface Appender {
        StringBuilder appendInSAM(String str);
    }

    // インスタンスメソッドのメソッド参照のための関数型インターフェース
    @FunctionalInterface
    interface Appender2 {
        void appendInSAM2(StringBuilder sb, String s);
    }

    public static void main(String[] args) {
        // コンストラクタ呼び出し
        Creator<StringBuilder> creator = StringBuilder::new;
        StringBuilder sb = creator.createInSAM(8);

        Appender appender = sb::append;
        appender.appendInSAM("abc");

        Appender2 appender2 = StringBuilder::append;
        appender2.appendInSAM2(sb, "def");

        System.out.println(sb);
    }
}
