import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
//        study_01();
//        study_02();
//        study_03();
        practice_01();
    }

    public static void practice_01() {
        Func1 f1 = FuncList::isOdd;
        Func2 f2 = FuncList::passCheck;
        System.out.println(f1.call(15));
        System.out.println(f2.call(66, "Smith"));

        f1 = x -> (x % 2 == 1);
        f2 = (point, name) -> name + "さんは" + (point > 65 ? "合格" : "不合格");
        System.out.println(f1.call(10));
        System.out.println(f2.call(51, "Gold"));

        IntPredicate f3 = x -> (x % 2 == 1);
        BiFunction<Integer, String, String> f4 = (point, name) -> name + "さんは" + (point > 65 ? "合格" : "不合格");
        System.out.println(f3.test(101));
        System.out.println(f4.apply(99, "Silver"));

        List<String> actors = List.of("大江岳人", "菅原拓真", "奏祐輔", "朝香あゆみ");
        List<String> filterActors = actors.stream()
                .filter(s -> s.length() <= 4)
                .map(s -> s + "さん")
                .collect(Collectors.toList());
        filterActors.forEach(System.out::println);
    }

    public static void study_03() {
        List<Hero> heros = new ArrayList<>();
        heros.add(new Hero("wataru", 1024, 128));
        heros.add(new Hero("hiroshi", 988, 99));
        heros.add(new Hero("teri", 0, 0));

        long all = heros.stream().count();
        System.out.println("勇者の人数：" + all);

        long knockOutNum = heros.stream().filter(h -> h.getHp() == 0).count();
        System.out.println("戦闘不能の人数：" + knockOutNum);

        // 戦闘不能な勇者を最大3人取得する
        List<String> knockOutNames = heros.stream()
                .filter(h -> h.getHp() == 0)
                .limit(3)
                .map(h -> h.getName())
                .collect(Collectors.toList());
        knockOutNames.forEach(name -> {
            System.out.println(name);
        });
    }

    public static void study_02() {
        List<Hero> heros = new ArrayList<>();
        heros.add(new Hero("wataru", 1024, 128));
        heros.add(new Hero("arusu", 988, 99));
        heros.add(new Hero("teri", 10, 0));

        boolean anyoneKnockedOut = heros.stream().anyMatch(h -> h.getHp() == 0);
        System.out.println("戦闘不能：" + anyoneKnockedOut);

        heros.stream().forEach(h -> {
            System.out.println("勇者：" + h.getName());
        });

        Optional<Hero> hopt = heros.stream().max((x, y) -> x.getHp() - y.getHp());
        if (hopt.isPresent()) {
            System.out.println("最大HPの勇者は" + hopt.get().getName());
        }
    }

    public static void study_01() {
        // 引数と戻り値を持つ関数
        Function<String, Integer> func1 = Main::len;
        int a = func1.apply("Java");
        System.out.println("文字列「Java」は" + a + "文字です");

        // 戻り値が無い関数
        Consumer<String> func2 = System.out::println;
        func2.accept("Hello world");

        // 引数が無い関数
        Supplier<String> func3 = System::lineSeparator;
        System.out.println("改行します" + func3.get());

        // 複数の引数を受け取る関数
        BiFunction<String, String, String> func4 = System::getProperty;
        System.out.println(func4.apply("java.version", "不明"));

        // ラムダ式
        Function<String, Integer> func5 = (String s) -> {
            return s.length();
        };
        int n = func1.apply("Python");
        System.out.println("文字列「Python」は" + n + "文字です");

        // ラムダ式(省略1)
        IntToDoubleFunction func6 = (x) -> {
            return x * x + 3.14;
        };

        // ラムダ式(省略2)
        IntToDoubleFunction func7 = x -> {
            return x * x + 3.14;
        };

        // ラムダ式(省略3)
        IntToDoubleFunction func8 = x -> x * x + 3.14;
    }

    public static Integer len(String s) {
        return s.length();
    }
}
