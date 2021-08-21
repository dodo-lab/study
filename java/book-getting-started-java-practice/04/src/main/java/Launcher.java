import java.lang.reflect.Method;
import java.util.Arrays;

public class Launcher {
    private String launchClass;
    private String launchType;

    public Launcher(String[] args) {
        if (args.length != 2) {
            return;
        }

        launchClass = args[0];
        launchType = args[1];
    }

    public void outputMemory() {
        Runtime runtime = Runtime.getRuntime();
        long useMemory = runtime.totalMemory() - runtime.freeMemory();
        System.out.println("現在のメモリ使用料は " + useMemory + " Byteです");
    }

    public void outputClassMethods() {
        try {
            Class<?> ref = Class.forName(launchClass);
            Method[] methods = ref.getDeclaredMethods();
            for (Method method : methods) {
                System.out.println(method.getName());
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
