package chapter_17_thread;

import util.Exec;
import util.ExecWorker;
import util.UtilFunctions;

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

    public static void main(String[] args) {
        var executor = Executors.newFixedThreadPool(8);
        var counter = new MyCounter();

        executor.submit(new ExecWorker(counter::safeIncrement, 10000000));
        executor.submit(new ExecWorker(counter::safeIncrement, 10000000));
        executor.submit(new ExecWorker(counter::safeIncrement2, 10000000));
        executor.submit(new ExecWorker(counter::safeIncrement2, 10000000));
        executor.submit(new ExecWorker(counter::unsafeIncrement, 10000000));
        executor.submit(new ExecWorker(counter::unsafeIncrement, 10000000));

        UtilFunctions.executorFinishAwait(executor);

        counter.show();
    }
}
