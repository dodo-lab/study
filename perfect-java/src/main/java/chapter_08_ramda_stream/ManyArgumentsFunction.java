package chapter_08_ramda_stream;

import java.util.function.Function;

public class ManyArgumentsFunction {
    private static void argumentsTwo() {
        // (a, b) -> a + b
        Function<Integer, Function<Integer, Integer>> func = a -> b -> a + b;
        System.out.println(func.apply(1).apply(2));
    }

    private static void argumentsThree() {
        //(a, b, c) -> (a + b) * c
        Function<Integer, Function<Integer, Function<Integer, Integer>>> func = a -> b -> c -> (a + b) * c;
        System.out.println(func.apply(3).apply(2).apply(100));
    }

    public static void main(String[] args) {
        ManyArgumentsFunction.argumentsTwo();
        ManyArgumentsFunction.argumentsThree();
    }
}
