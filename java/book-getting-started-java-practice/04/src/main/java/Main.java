import java.io.IOException;
import java.lang.reflect.*;
import java.text.SimpleDateFormat;
import java.util.*;

public class Main {
    public static void main(String[] args) {
//        study_01();
//        study_02();
//        study_03();
//        study_04();
//        study_05();
//        study_06(args);
        study_07();
    }

    public static void study_07() {
        Class<?> ref = RefSample.class;

        // 引数１つのコンストラクタを取得し、インスタンスを生成する
        try {
            Constructor<?> constructor = ref.getConstructor(int.class);
            RefSample rs = (RefSample) constructor.newInstance(256);

            // timesフィールドに関するFieldを取得して読み書き
            Field f = ref.getField("times");
            f.set(rs, 2);
            System.out.println(f.get(rs));

            // 引数２つのhelloメソッドを取得して呼び出す
            Method m = ref.getMethod("hello", String.class, int.class);
            m.invoke(rs, "reflection!", 128);

            // クラスやメソッドへの修飾(publicやfinalの有無)を調べる
            boolean pubc = Modifier.isPublic(ref.getModifiers());
            boolean finm = Modifier.isFinal(m.getModifiers());
            System.out.println("public : " + pubc);
            System.out.println("final : " + finm);
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (NoSuchFieldException e) {
            e.printStackTrace();
        }

    }

    public static void study_06(String[] args) {
        // Stringに関する情報を取得して表示する
        Class<?> infoString = String.class;
        System.out.println(infoString.getSimpleName());
        System.out.println(infoString.getName());
        System.out.println(infoString.getPackage().getName());
        System.out.println(infoString.isArray());

        // Stringの親クラスの情報を取得する
        Class<?> infoStringParent = infoString.getSuperclass();
        System.out.println(infoStringParent.getName());

        // argsは文字列配列として判定される
        Class<?> infoArgs = args.getClass();
        System.out.println(infoArgs.isArray());
    }

    public static void study_05() {
        Runtime runtime = Runtime.getRuntime();

        final long MB = 1024 * 1024;
        long freeMemory = runtime.freeMemory() / MB;
        long totalMemory = runtime.totalMemory() / MB;
        long maxMemory = runtime.maxMemory() / MB;

        System.out.println("freeMemory : " + freeMemory + " MB");
        System.out.println("totalMemory : " + totalMemory + " MB");
        System.out.println("maxMemory : " + maxMemory + " MB");
    }

    public static void study_04() {
        TimeZone tz = TimeZone.getDefault();
        System.out.print("現在のタイムゾーン：");
        System.out.println(tz.getDisplayName());
        if (tz.useDaylightTime()) {
            System.out.println("夏時間を採用しています");
        } else {
            System.out.println("夏時間を採用していません");
        }

        System.out.print("世界標準時との差は");
        System.out.println(tz.getRawOffset() / 3600000 + "時間");
    }

    public static void study_03() {
        Locale locale = Locale.getDefault();
        System.out.println(locale.getCountry() + "-" + locale.getLanguage());
        String now = (new SimpleDateFormat()).format(new Date());
        if (locale.getLanguage().equals("ja")) {
            System.out.println("現在の時刻は " + now);
        } else {
            System.out.println("Current time is " + now);
        }
    }

    public static void study_02() {
        System.out.println("利用中のJavaバージョン");
        System.out.println(System.getProperty("java.version"));

        Properties p = System.getProperties();
        Iterator<String> i = p.stringPropertyNames().iterator();
        System.out.println("システムプロパティ一覧");
        while (i.hasNext()) {
            String key = i.next();
            System.out.print(key + " = ");
            System.out.println(System.getProperty(key));
        }
    }

    public static void study_01() {
        try {
            ProcessBuilder pb = new ProcessBuilder("c:\\windows\\system32\\notepad.exe", "test.txt");
            pb.start();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
