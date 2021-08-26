package util;

import java.util.function.Consumer;

public final class UtilFunctions {
    private UtilFunctions() {
    }

    public static void printObjects(Object... objects) {
        int no = 0;
        for (var object : objects) {
            System.out.println(no + " : " + object);
            ++no;
        }
    }

    public static <T> void safeApply(T value, Consumer<T> func) {
        if (value != null) {
            func.accept(value);
        }
    }
}
