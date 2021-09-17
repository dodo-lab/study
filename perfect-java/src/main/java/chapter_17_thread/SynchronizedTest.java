package chapter_17_thread;

import util.Exec;

import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class SynchronizedTest {
    private static class MyCounter {
        private int safeCount = 0;
        private int safeCount2 = 0;
        private int unsafeCount = 0;

        public void unsafeIncrement() {
            unsafeCount++;
        }

        public synchronized void safeIncrement() {
            safeCount++;
        }

        public void safeIncrement2() {
            synchronized (this) { // MyCounter.class でもOKだが、モニタロックの共有範囲が広がるため注意
                safeCount2++;
            }
        }

        public void show() {
            System.out.println(safeCount);
            System.out.println(safeCount2);
            System.out.println(unsafeCount);
        }
    }

    private static class Worker implements Runnable {
        private static final int NUM_LOOP = 10000000;
        private final Exec exec;

        private Worker(Exec exec) {
            this.exec = exec;
        }

        @Override
        public void run() {
            for (var i = 0; i < NUM_LOOP; ++i) {
                exec.exec();
            }
        }
    }

    public static void main(String[] args) {
        var executor = Executors.newFixedThreadPool(8);
        var counter = new MyCounter();

        executor.submit(new Worker(counter::safeIncrement));
        executor.submit(new Worker(counter::safeIncrement));
        executor.submit(new Worker(counter::safeIncrement2));
        executor.submit(new Worker(counter::safeIncrement2));
        executor.submit(new Worker(counter::unsafeIncrement));
        executor.submit(new Worker(counter::unsafeIncrement));

        executor.shutdown();
        try {
            executor.awaitTermination(10, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        counter.show();
    }
}
