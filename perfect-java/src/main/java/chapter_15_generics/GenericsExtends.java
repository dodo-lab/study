package chapter_15_generics;

public class GenericsExtends {
    /*
     境界のあるジェネリック型クラス
     境界を明示していない型パラメータは "<T extends Object>" と等価

     [複数境界のある型パラメータの指定方法]
     class ClassName<T extends クラス名 & インターフェース名>
     class ClassName<T extends クラス名 & インターフェース名 & インターフェース名>
     class ClassName<T extends インターフェース名 & インターフェース名>
     */
    static class Extends<T extends CharSequence> {
        private T value;

        T get() {
            return value;
        }

        void put(T value) {
            this.value = value;
        }

        int getLength() {
            // lengthメソッドはCharSequenceインターフェースのメソッドのため、実行可能
            return value.length();
        }
    }

    public static void main(String[] args) {
        var ex = new Extends<String>();
        ex.put("abcdefg");
        System.out.println(ex.get());
        System.out.println(ex.getLength());
    }
}
