package chapter_07_interface;

public class ExtendsInterfaceTest {
    interface Father {
        void print();

        // 同名デフォルトメソッドの多重継承はエラーになる
        // default void defaultMethod() {}

        // 同名定数の多重継承もエラー
        // int VALUE = 1;
    }

    interface Mother {
        void print();

        void print(String s);

        // 同名デフォルトメソッドの多重継承はエラーになる
        // default void defaultMethod() {}

        // 同名定数の多重継承もエラー
        // int VALUE = 1;
    }

    // インターフェース自身が多重継承可能
    interface Child extends Father, Mother {
        // print()とprint(String)を継承済
    }

    static class ChildImpl implements Child {
        @Override
        public void print() {
            System.out.println("ChildImpl#print");
        }

        @Override
        public void print(String s) {
            System.out.println("ChildImpl#print : " + s);
        }
    }

    public static void main(String[] args) {
        Child c = new ChildImpl();
        c.print();
        c.print("123");
    }
}
