package chapter_08_ramda_stream;

public class MethodReference {
    // メソッド参照を受け取る側
    static void execPrinter(Printer printer, String str) {
        printer.print(str);
    }

    // メソッド参照されるメソッド
    static void printMessage(String message) {
        System.out.println(message);
    }

    // 関数型インターフェース
    // インターフェースはメソッドを１つだけ持つ
    // インターフェースが持つメソッドとメソッド参照されるメソッドの２つは、型が一致している
    @FunctionalInterface    // 別になくてもOK。関数型インターフェースとあえて明記しているだけ。
    interface Printer {
        void print(String msg);
    }

    public static void main(String[] args) {
        execPrinter(MethodReference::printMessage, "foo");
    }
}
