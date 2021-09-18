package chapter_18_reflection;

import java.lang.reflect.InvocationTargetException;

public class ReflectionObjectCreate {
    // オブジェクトの生成
    public static void main(String[] args) {
        try {
            var clazz = StringBuilder.class;
            var constructor = clazz.getConstructor(String.class);
            var sb = constructor.newInstance("abc");

            System.out.println(sb);
        } catch (NoSuchMethodException | InvocationTargetException | InstantiationException | IllegalAccessException e) {
            e.printStackTrace();
        }
    }
}
