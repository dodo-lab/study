package chapter_08_ramda_stream;

public class MethodReferenceInterface {
    @FunctionalInterface
    interface F {
        void f();
    }

    interface BaseI {
        default void method() {
            System.out.println("method in BaseI: " + getValue());
        }

        String getValue();

        static void staticMethod() {
            System.out.println("static method in BaseI");
        }
    }

    static class Impl implements BaseI {
        @Override
        public String getValue() {
            return "value in Impl";
        }
    }

    public static void main(String[] args) {
        BaseI bi = new Impl();
        F methodRef = bi::method;
        
        methodRef.f();

        methodRef = BaseI::staticMethod;
        methodRef.f();
    }
}
