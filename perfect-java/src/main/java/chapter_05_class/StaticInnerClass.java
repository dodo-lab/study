package chapter_05_class;

public class StaticInnerClass {
    // ネストしたstaticクラス
    private static class MyHelper {
        private static final String nestedClassField = "nested private class field";
        private final String nestedInstanceField = "nested private instance field";

        private static void classMethod() {
            // エンクロージングオブジェクトのprivateクラスフィールドが可視
            System.out.println(StaticInnerClass.hostClassField);
        }

        private void method(StaticInnerClass staticInnerClass) {
            // エンクロージングオブジェクトのprivateフィールドが可視
            System.out.println(staticInnerClass.hostInstanceField);
        }
    }

    private static final String hostClassField = "private class field";
    private final String hostInstanceField = "private instance field";

    private void exec() {
        // ネストクラスのオブジェクト生成
        MyHelper myHelper = new MyHelper();

        // ネストクラスとお互いのprivateインスタンスフィールドが可視
        System.out.println(myHelper.nestedInstanceField);
        myHelper.method(this);
    }

    public static void main(String[] args) {
        // ネストクラスとお互いのprivateクラスフィールドが可視
        System.out.println(MyHelper.nestedClassField);
        MyHelper.classMethod();

        var staticInnerClass = new StaticInnerClass();
        staticInnerClass.exec();
    }
}
