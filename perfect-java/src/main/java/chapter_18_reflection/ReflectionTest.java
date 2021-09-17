package chapter_18_reflection;

import util.UtilFunctions;

import java.util.ArrayList;

public class ReflectionTest {
    // オブジェクトのリフレクション
    private static void refObject() {
        System.out.println("refObject");

        try {
            var sb = new StringBuilder();

            // Class型の変数名には伝統的に clazz をよく使う（classが予約語のため）
            // 以下３つの手段で取得する Class<StringBuilder> オブジェクトの参照先はすべて同じ
            Class<StringBuilder> clazz1 = StringBuilder.class;
            Class<? extends StringBuilder> clazz2 = sb.getClass();
            Class<?> clazz3 = Class.forName("java.lang.StringBuilder");

            UtilFunctions.printObjects(clazz1.hashCode(), clazz2.hashCode(), clazz3.hashCode());
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    // 基本型のリフレクション
    private static void refBasic() {
        System.out.println("refBasic");

        // int型に対応するClassオブジェクト
        Class<Integer> clazz1 = int.class;
        Class<Integer> clazz2 = Integer.TYPE;

        // Integer型に対応するClassオブジェクト
        Class<Integer> clazz3 = Integer.class;

        UtilFunctions.printObjects(clazz1.hashCode(), clazz2.hashCode(), clazz3.hashCode());
    }

    // 配列のリフレクション
    private static void refArray() {
        System.out.println("refArray");

        try {
            // clazz1～3は同一オブジェクトを参照
            String[] strings = {};
            Class<String[]> clazz1 = String[].class;
            Class<? extends String[]> clazz2 = strings.getClass();
            Class<?> clazz3 = Class.forName("[Ljava.lang.String;");
            UtilFunctions.printObjects(clazz1.hashCode(), clazz2.hashCode(), clazz3.hashCode());

            // clazz4～6は同一オブジェクトを参照
            Integer[] integers = {};
            Class<Integer[]> clazz4 = Integer[].class;
            Class<? extends Integer[]> clazz5 = integers.getClass();
            Class<?> clazz6 = Class.forName("[Ljava.lang.Integer;");
            UtilFunctions.printObjects(clazz4.hashCode(), clazz5.hashCode(), clazz6.hashCode());

            // clazz7～9は同一オブジェクトを参照
            int[] ints = {};
            Class<int[]> clazz7 = int[].class;
            Class<? extends int[]> clazz8 = ints.getClass();
            Class<?> clazz9 = Class.forName("[I");
            UtilFunctions.printObjects(clazz7.hashCode(), clazz8.hashCode(), clazz9.hashCode());
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        refObject();
        refBasic();
        refArray();
    }
}
