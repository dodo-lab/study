package util;

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
}
