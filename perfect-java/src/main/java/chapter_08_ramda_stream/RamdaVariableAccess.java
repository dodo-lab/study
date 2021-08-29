package chapter_08_ramda_stream;

import java.util.function.Consumer;

public class RamdaVariableAccess {
    Consumer<String> createProc(String paramValue /* 実質finalのパラメータ変数 */) {
        String changeValue = "change";  // 後述で再代入しているため、実質finalではない
        String localValue = "local";    // 実質final
        final String finalLocalValue = "final local";   // final

        // ラムダ式からは実質finalの変数を参照可能
        Consumer<String> proc = s -> System.out.println(s + " : " + paramValue + ", " + localValue + ", " + finalLocalValue);
        changeValue = "changed";
        return proc;
    }

    public static void main(String[] args) {
        var ramda = new RamdaVariableAccess();
        var proc = ramda.createProc("param");
        proc.accept("showing");
    }
}
