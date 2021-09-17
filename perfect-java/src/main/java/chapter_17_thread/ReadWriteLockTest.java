package chapter_17_thread;

import util.Exec;
import util.ExecWorker;
import util.UtilFunctions;

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
    
    public static void main(String[] args) {
        var executor = Executors.newFixedThreadPool(8);
        var counter = new MyCounter();

        System.out.println("read / read / write");
        executor.submit(new ExecWorker(counter::read, 1, 10));
        executor.submit(new ExecWorker(counter::read, 1, 10));
        executor.submit(new ExecWorker(counter::write, 1, 10));

        UtilFunctions.sleep(1000);

        System.out.println("\nread / write / read");
        executor.submit(new ExecWorker(counter::read, 1, 10));
        executor.submit(new ExecWorker(counter::write, 1, 10));
        executor.submit(new ExecWorker(counter::read, 1, 10));

        UtilFunctions.sleep(1000);

        System.out.println("\nwrite / read / write");
        executor.submit(new ExecWorker(counter::write, 1, 10));
        executor.submit(new ExecWorker(counter::read, 1, 10));
        executor.submit(new ExecWorker(counter::write, 1, 10));

        UtilFunctions.executorFinishAwait(executor);

        counter.show("finish");
    }
}
