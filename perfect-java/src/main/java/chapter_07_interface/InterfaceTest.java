package chapter_07_interface;

public class InterfaceTest {
    interface MyInterface {
        // インターフェースのフィールドは暗黙的に public static final が付与され、定数となる
        int FOO = 1;
        String BAR = "bar";

        // メソッドは暗黙的に public abstract が付与される
        void method();

        // デフォルトメソッドはオーバーライドしなくてもよい
        default void defaultMethod() {
            System.out.println("MyInterface#defaultMethod");
        }

        default void defaultMethod2() {
            System.out.println("MyInterface#defaultMethod2");
        }
    }

    static class MyImple implements MyInterface {
        @Override
        public void method() {
            System.out.println("MyImple#method");
        }

        @Override
        public void defaultMethod2() {
            MyInterface.super.defaultMethod2();     // 継承元のデフォルトメソッド呼び出し
            System.out.println("MyImple#defaultMethod2");
        }
    }

    public static void main(String[] args) {
        MyInterface m = new MyImple();
        m.method();
        m.defaultMethod();
        m.defaultMethod2();
    }
}
