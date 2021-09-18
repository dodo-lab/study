package chapter_18_reflection;

import util.UtilFunctions;

public class ReflectionTypeInfo {
    private static class MyCounter {
        private int count;

        public void increment() {
            count++;
        }

        public void show() {
            System.out.println(count);
        }
    }

    private static void fieldAndMethod() {
        System.out.println("fieldAndMethod");
        var clazz = MyCounter.class;

        System.out.println(clazz.getName());

        UtilFunctions.printArray(clazz.getFields());
        UtilFunctions.printArray(clazz.getDeclaredFields());
        UtilFunctions.printArray(clazz.getDeclaredMethods());
    }

    private static void objectTree() {
        System.out.println("objectTree");
        var clazz = StringBuilder.class;

        System.out.println("- class tree");
        Class<? super StringBuilder> parent;
        Class<? super StringBuilder> current = clazz;
        while ((parent = current.getSuperclass()) != null) {
            System.out.println(parent);
            current = parent;
        }

        System.out.println("- interfaces");
        Class<?>[] interfaces = clazz.getInterfaces();
        for (var inf : interfaces) {
            System.out.println(inf);
        }
    }

    public static void main(String[] args) {
        fieldAndMethod();
        objectTree();
    }
}
