package chapter_08_ramda_stream;

import java.util.function.Consumer;

public class RamdaThisReference {
    private final String value;

    public RamdaThisReference(String value) {
        this.value = value;
    }

    void exec() {
        // 下記２つのラムダ式はインスタンスメソッド相当のため、this参照が可能
        Consumer<String> proc = s -> System.out.println(s + ": " + this.value);
        Consumer<String> proc2 = s -> System.out.println(s + ": " + value);     // this自体も省略可能

        // ラムダ式の実行
        proc.accept("abc");
        proc2.accept("def");
    }

    public static void main(String[] args) {
        // 下記ラムダ式はクラスメソッド相当のため、this参照は不可
        Consumer<String> proc = s -> System.out.println(s);
        proc.accept("123");

        var ramda = new RamdaThisReference("my-value");
        ramda.exec();
    }
}
