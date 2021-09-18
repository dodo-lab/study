package chapter_18_reflection;

import java.lang.reflect.InvocationTargetException;

public class ReflectionObjectHandle {
    public static void main(String[] args) {
        try {
            var clazz = StringBuilder.class;
            var appendMethod = clazz.getMethod("append", String.class);
            var lengthMethod = clazz.getMethod("length");

            var sb = clazz.newInstance();

            appendMethod.invoke(sb, "abc");
            appendMethod.invoke(sb, "def");
            int length = (int) lengthMethod.invoke(sb);

            System.out.println(sb);
            System.out.println("length = " + length);
        } catch (NoSuchMethodException | InstantiationException | IllegalAccessException | InvocationTargetException e) {
            e.printStackTrace();
        }
    }
}
