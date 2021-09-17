package chapter_17_thread;

import util.ExecWorker;
import util.UtilFunctions;

import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;

public class AtomicTest {
    private static class MyCounter {
        private final AtomicInteger count = new AtomicInteger();

        public void increment() {
            count.getAndIncrement();
        }

        public void decrement() {
            count.getAndDecrement();
        }

        public void show() {
            System.out.println(count.get());
        }
    }

    public static void main(String[] args) {
        var executor = Executors.newFixedThreadPool(8);
        var counter = new MyCounter();

        executor.submit(new ExecWorker(counter::increment, 1000000));
        executor.submit(new ExecWorker(counter::decrement, 500000));
        executor.submit(new ExecWorker(counter::increment, 1000000));

        UtilFunctions.executorFinishAwait(executor);
        counter.show();
    }
}
