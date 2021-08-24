package chapter_05_class;

public class InnerClass {
    // 内部クラス
    private class MyHelper {
        private final String nestedInstanceField = "nested private instance field";
        private final String sameNameField = "inner";

        private void method() {
            // 内部オブジェクトからエンクロージングオブジェクトのprivateフィールドが可視
            System.out.println(hostInstanceField);

            System.out.println(sameNameField);      // => "inner"
            System.out.println(this.sameNameField); // => "inner"
            System.out.println(InnerClass.this.sameNameField);  // => "outer"
        }
    }

    private final String hostInstanceField = "private instance field";
    private final String sameNameField = "outer";

    private void exec() {
        // 内部クラスのオブジェクトを生成
        MyHelper myHelper = new MyHelper();
        // エンクロージングオブジェクトから内部オブジェクトのprivateフィールドが可視
        System.out.println(myHelper.nestedInstanceField);
        myHelper.method();
    }

    public static void main(String[] args) {
        // エンクロージングクラスのオブジェクトを生成
        InnerClass innerClass = new InnerClass();
        innerClass.exec();
    }
}
