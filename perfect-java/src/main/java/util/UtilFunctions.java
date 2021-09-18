package util;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.TimeUnit;
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

    public static <T> void printArray(T[] array) {
        for (var value : array) {
            System.out.println(value);
        }
    }

    public static <T> void safeApply(T value, Consumer<T> func) {
        if (value != null) {
            func.accept(value);
        }
    }

    public static void executorFinishAwait(ExecutorService executorService) {
        executorService.shutdown();
        try {
            executorService.awaitTermination(Long.MAX_VALUE, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void sleep(long msec) {
        try {
            Thread.sleep(msec);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
