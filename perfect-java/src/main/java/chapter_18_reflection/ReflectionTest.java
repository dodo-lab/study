package chapter_18_reflection;

import util.UtilFunctions;

import java.util.ArrayList;

public class ReflectionTest {
    private static void refObject() {
        try {
            var sb = new StringBuilder();

            // Class型の変数名には伝統的に clazz をよく使う（classが予約語のため）
            // 以下３つの手段で取得する Class<StringBuilder> オブジェクトの参照先はすべて同じ
            Class<StringBuilder> clazz1 = StringBuilder.class;
            Class<? extends StringBuilder> clazz2 = sb.getClass();
            Class<?> clazz3 = Class.forName("java.lang.StringBuilder");

            UtilFunctions.printObjects(clazz1, clazz2, clazz3);
            if (clazz1 == clazz2 && clazz1 == clazz3) {
                System.out.println("same reference");
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        refObject();
    }
}
