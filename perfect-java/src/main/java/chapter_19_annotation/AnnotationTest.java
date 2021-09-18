package chapter_19_annotation;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

public class AnnotationTest {
    // MyFilterアノテーションの定義
    @Target(ElementType.METHOD)
    @Retention(RetentionPolicy.RUNTIME)
    @interface MyFilter {
    }

    private static class CapitalizeFilter {
        @MyFilter
        public String doJob(String input) {
            return input.toUpperCase();
        }
    }

    private static class Filter {
        final Object obj;
        final Method method;

        Filter(Object obj, Method method) {
            this.obj = obj;
            this.method = method;
        }
    }

    private final List<Filter> filters = new ArrayList<>();

    public AnnotationTest(String... classNames) throws ReflectiveOperationException {
        // プラグインのロード
        for (var className : classNames) {
            // クラス名で探索
            var clazz = Class.forName(className);
            for (var method : clazz.getMethods()) {
                // 指定のアノテーションを含むメソッドか判断
                if (method.isAnnotationPresent(MyFilter.class)) {
                    filters.add(new Filter(clazz.newInstance(), method));
                }
            }
        }
    }

    public void exec() {
        try (var stdin = new BufferedReader(new InputStreamReader(System.in))) {
            while (true) {
                System.out.println("input any text");

                var output = stdin.readLine();
                for (var filter : filters) {
                    output = (String) filter.method.invoke(filter.obj, output);
                }
                System.out.println("You said, " + output);
            }
        } catch (IOException | InvocationTargetException | IllegalAccessException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        try {
            var annotationTest = new AnnotationTest("chapter_19_annotation.AnnotationTest$CapitalizeFilter");
            annotationTest.exec();
        } catch (ReflectiveOperationException e) {
            e.printStackTrace();
        }

    }
}
