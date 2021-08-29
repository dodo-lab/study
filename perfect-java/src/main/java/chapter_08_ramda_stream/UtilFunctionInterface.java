package chapter_08_ramda_stream;

import java.util.Objects;
import java.util.function.*;

public class UtilFunctionInterface {
    private void Basic() {
        // Functionは入力Tを受け取り、出力Rを返す
        Function<String, StringBuilder> strToStrBldr = s -> new StringBuilder(s);

        // Predicateは入力Tを受け取り、真偽値を返す
        Predicate<String> isValidString = s -> Objects.nonNull(s) && !s.isEmpty();

        // Consumerは入力Tを受け取り、処理を実行する(出力はなし)
        Consumer<String> proc = s -> System.out.println(s);

        // Supplierは入力なしで出力Tを返す
        Supplier<StringBuilder> factory = () -> new StringBuilder();
    }

    public static void main(String[] args) {
        // StringBuilder::newはコンストラクタのメソッド参照
        IntFunction<StringBuilder> creator = StringBuilder::new;
        StringBuilder sb = creator.apply(8);

        // sb::appendはインスタンスメソッドのメソッド参照
        Function<String, StringBuilder> appender = sb::append;
        appender.apply("abc");

        // StringBuilder::appendはインスタンスメソッドのメソッド参照
        BiConsumer<StringBuilder, String> appender2 = StringBuilder::append;
        appender2.accept(sb, "def");

        System.out.println(sb);
    }
}
