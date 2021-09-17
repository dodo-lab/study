package chapter_17_thread;

import util.ExecWorker;
import util.UtilFunctions;

import java.util.concurrent.Executors;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class LockTest {
    private static class MyCounter {
        private final Lock lock = new ReentrantLock();
        private int count;

        public void increment() {
            lock.lock();
            try {
                count++;
            } finally {
                lock.unlock();
            }
        }

        public void show() {
            System.out.println(count);
        }
    }

    public static void main(String[] args) {
        var executor = Executors.newFixedThreadPool(8);
        var counter = new MyCounter();

        executor.submit(new ExecWorker(counter::increment, 1000000));
        executor.submit(new ExecWorker(counter::increment, 1000000));

        UtilFunctions.executorFinishAwait(executor);

        counter.show();
    }
}