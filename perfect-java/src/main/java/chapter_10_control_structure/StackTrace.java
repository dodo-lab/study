package chapter_10_control_structure;

public class StackTrace {
    static void printStackTrace() {
        System.out.println("-- printStackTrace --");

        var frames = Thread.currentThread().getStackTrace();
        for (var frame : frames) {
            System.out.println(frame.getClassName() + "#" +
                    frame.getMethodName() +
                    ":" + frame.getLineNumber());
        }
    }

    public static void main(String[] args) {
        // 自作スタックトレース表示処理の呼び出し
        printStackTrace();

        // 下記でも表示可能
        Thread.dumpStack();
        (new Throwable()).printStackTrace();
    }
}
