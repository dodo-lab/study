package chapter_05_class;

public class TemplateMethodPattern {
    private static abstract class Base {
        // 継承クラスがオーバーライドすべき抽象メソッド
        protected abstract void doTask();

        void exec() {
            System.out.println("基底クラスの共通処理");

            // 継承クラス固有の処理を実行
            doTask();
        }
    }

    private static class Derived1 extends Base {
        @Override
        protected void doTask() {
            System.out.println("Derived1#doTask");
        }
    }

    private static class Derived2 extends Base {
        @Override
        protected void doTask() {
            System.out.println("Derived2#doTask");
        }
    }

    public static void main(String[] args) {
        Base t1 = new Derived1();
        t1.exec();

        Base t2 = new Derived2();
        t2.exec();
    }
}
