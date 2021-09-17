package chapter_17_thread;

import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class LockTest {
    private static class MyCounter {
        private Lock lock = new ReentrantLock();
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

    private static class Worker implements Runnable {
        private final MyCounter counter;

        private Worker(MyCounter counter) {
            this.counter = counter;
        }

        @Override
        public void run() {
            for (var i = 0; i < 1000000; ++i) {
                counter.increment();
            }
        }
    }

    public static void main(String[] args) {
        var executor = Executors.newFixedThreadPool(8);
        var counter = new MyCounter();

        executor.submit(new Worker(counter));
        executor.submit(new Worker(counter));

        executor.shutdown();
        try {
            executor.awaitTermination(Long.MAX_VALUE, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        counter.show();
    }
}