package chapter_07_interface;

public class NestInterfaceTest {
    interface MyInterface {
        // インターフェース内のネストしたクラスは常に public 且つ static
        class Baz {
            private final String message;

            public Baz(String message) {
                this.message = message;
            }

            public String getMessage() {
                return message;
            }
        }

        Baz getBaz();
    }

    static class MyImpl implements MyInterface {
        @Override
        public Baz getBaz() {
            return new MyInterface.Baz("abc");
        }
    }

    public static void main(String[] args) {
        MyInterface m = new MyImpl();
        MyInterface.Baz baz = m.getBaz();
        System.out.println(baz.getMessage());
    }
}
