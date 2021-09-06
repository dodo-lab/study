package chapter_15_generics;

public class GenericsBasic {
    // ジェネリック型の基本形
    static class Basic<T> {
        private T value;

        // ジェネリック型クラス内では、型変数Tをnewできない(コンパイルエラー)
        Basic() {
            // value = new T();
        }

        T get() {
            return value;
        }

        void put(T value) {
            this.value = value;
        }
    }

    public static void main(String[] args) {
        var basic = new Basic<String>();
        basic.put("abc");
        System.out.println(basic.get());
    }
}
