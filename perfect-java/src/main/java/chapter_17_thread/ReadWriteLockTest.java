package chapter_17_thread;

import util.Exec;

import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class ReadWriteLockTest {
    private static class MyCounter {
        private final ReadWriteLock readWriteLock = new ReentrantReadWriteLock();
        private final Lock writeLock = readWriteLock.writeLock();
        private final Lock readLock = readWriteLock.readLock();
        private int readCount;
        private int writeCount;

        public void read() {
            show("read start");

            readLock.lock();
            show("read locked");

            try {
                readCount++;
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                show("read unlock");
                readLock.unlock();
            }
        }

        public void write() {
            show("write start");

            writeLock.lock();
            show("write locked");

            try {
                writeCount++;
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                show("write unlock");
                writeLock.unlock();
            }
        }

        public void show(String text) {
            System.out.printf("%s : readCount[%d] writeCount[%d]\n", text, readCount, writeCount);
        }
    }

    private static class Worker implements Runnable {
        private final Exec exec;

        private Worker(Exec exec) {
            this.exec = exec;

            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void run() {
            exec.exec();
        }
    }

    public static void main(String[] args) {
        var executor = Executors.newFixedThreadPool(8);
        var counter = new MyCounter();

        System.out.println("read / read / write");
        executor.submit(new Worker(counter::read));
        executor.submit(new Worker(counter::read));
        executor.submit(new Worker(counter::write));

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("\nread / write / read");
        executor.submit(new Worker(counter::read));
        executor.submit(new Worker(counter::write));
        executor.submit(new Worker(counter::read));

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("\nwrite / read / write");
        executor.submit(new Worker(counter::write));
        executor.submit(new Worker(counter::read));
        executor.submit(new Worker(counter::write));

        executor.shutdown();
        try {
            executor.awaitTermination(Long.MAX_VALUE, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        counter.show("finish");
    }
}
