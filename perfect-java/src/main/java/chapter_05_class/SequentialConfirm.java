package chapter_05_class;

class SequentialConfirm {
    private static class Base {
        private int fieldVariable = fieldVariableInit("基底クラス");
        private static int classVariable = classVariableInit("基底クラス");

        {
            System.out.println("基底クラス：初期化ブロック");
        }

        static {
            System.out.println("基底クラス：static初期化ブロック");
        }

        Base() {
            System.out.println("基底クラス：コンストラクタ");
        }

        static int fieldVariableInit(String classType) {
            System.out.println(classType + "：フィールド変数初期化");
            return 0;
        }

        static int classVariableInit(String classType) {
            System.out.println(classType + "：クラス変数初期化");
            return 0;
        }
    }

    private static class Derived extends Base {

        private int fieldVariable = fieldVariableInit("派生クラス");
        private static int classVariable = classVariableInit("派生クラス");

        {
            System.out.println("派生クラス：初期化ブロック");
        }

        static {
            System.out.println("派生クラス：static初期化ブロック");
        }

        Derived() {
            System.out.println("派生クラス：コンストラクタ");
        }
    }

    public static void main(String[] args) {
        System.out.println("Derived 1つ目を生成");
        Base seq1 = new Derived();
        System.out.println("Derived 2つ目を生成");
        Base seq2 = new Derived();
    }
}
