package chapter_13_enum_constant;

public class ConstantTest {
    // 定数定義のみを目的としたクラス
    // final修飾子をつけて、継承させる意思がないことを示す
    static final class Constant {
        // コンストラクタをprivateにして、インスタンス化させる意思がないことを示す
        private Constant() {
        }

        // 定数はクラスフィールド且つ、finalにする
        public static String EXEC_MODE = "Debug";
        public static int SLEEP_MSEC = 1000;
    }

    public static void main(String[] args) {
        System.out.println(Constant.EXEC_MODE);
        System.out.println(Constant.SLEEP_MSEC);
    }
}
