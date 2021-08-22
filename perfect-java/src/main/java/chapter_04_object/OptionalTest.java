package chapter_04_object;

import java.util.Optional;

public class OptionalTest {
    public static void optionalOk() {
        StringBuilder sb = new StringBuilder();
        Optional<StringBuilder> osb1 = Optional.of(sb);
        Optional<StringBuilder> osb2 = Optional.ofNullable(sb);     // Optional.ofNullableはnullを許容
        System.out.println(osb1);
    }

    public static void optionalNg() {
        try {
            StringBuilder sb = null;
            Optional<StringBuilder> osb = Optional.of(sb);  // NullPointerException が発生
        } catch (NullPointerException e) {
            e.printStackTrace();
        }
    }

    public static void optionalGet() {
        Optional<StringBuilder> osb = Optional.of(new StringBuilder());

        // 単純な取得
        StringBuilder sb1 = osb.get();
        // nullでなければ単純な取得。nullならorElseに渡したオブジェクトを返す
        StringBuilder sb2 = osb.orElse(new StringBuilder("none"));
        // nullでなければ単純な取得。nullならorElseGetに渡した関数の結果を返す
        StringBuilder sb3 = osb.orElseGet(() -> new StringBuilder("none"));
        // nullでなければisPresentに渡した関数を実行
        osb.ifPresent(sb -> {
            sb.insert(0, "[");
            sb.append("]");
        });
        // nullでなければmapに渡した関数の実行結果を返す
        Optional<String> os = osb.map(sb -> {
            sb.insert(0, "<");
            sb.append(">");
            return sb.toString();
        });
    }

    public static void optionalNullCheck() {
        Optional<String> str = Optional.of("hoge");
        Optional<Name> name = Optional.of(new Name(str));
        Optional<Person> person = Optional.of(new Person(name));
        showPersonFirstName(person);
    }

    static class Name {
        private final Optional<String> first;

        Name(Optional<String> first) {
            this.first = first;
        }

        Optional<String> getFirst() {
            return first;
        }
    }

    static class Person {
        private final Optional<Name> name;

        Person(Optional<Name> name) {
            this.name = name;
        }

        public Optional<Name> getName() {
            return name;
        }
    }

    public static void showPersonFirstName(Optional<Person> person) {
        person.flatMap(Person::getName)
                .flatMap(Name::getFirst)
                .ifPresent(System.out::println);
    }
}
