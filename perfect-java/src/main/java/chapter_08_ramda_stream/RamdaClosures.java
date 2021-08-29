package chapter_08_ramda_stream;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.IntSupplier;

// ラムダ式でクロージャのように状態を持つことは非推奨だが、以下の２パターンで制御可能。
//   1.インスタンスフィールドに状態を持つ
//   2.ローカル変数の参照先オブジェクトに状態を持つ
public class RamdaClosures {
    private int count;

    // パターン1：インスタンスフィールドに状態を持つ
    IntSupplier makeCounter(int start) {
        count = start;
        return () -> count++;
    }

    // パターン2：ローカル変数の参照先オブジェクトに状態を持つ
    static IntSupplier makeCounterStatic(int start) {
        var atomicInteger = new AtomicInteger(start);
        return () -> atomicInteger.getAndIncrement();
    }

    public static void main(String[] args) {
        var ramda = new RamdaClosures();

        var counter = ramda.makeCounter(10);
        var counterStatic = RamdaClosures.makeCounterStatic(20);

        System.out.println(counter.getAsInt());
        System.out.println(counter.getAsInt());
        System.out.println(counterStatic.getAsInt());
        System.out.println(counterStatic.getAsInt());
    }
}
