package chapter_17_thread;

import util.UtilFunctions;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executors;

public class NotifyTest {
    private static class Producer implements Runnable {
        private final Queue<String> queue;

        private Producer(Queue<String> queue) {
            this.queue = queue;
        }

        @Override
        public void run() {
            var scanner = new Scanner(System.in);

            while (true) {
                System.out.println("input any string");
                var s = scanner.next();
                synchronized (queue) {
                    queue.add(s);
                    queue.notifyAll();
                }
            }
        }
    }

    private static class Consumer implements Runnable {
        private final Queue<String> queue;

        private Consumer(Queue<String> queue) {
            this.queue = queue;
        }

        @Override
        public void run() {
            try {
                while (true) {
                    synchronized (queue) {
                        while (queue.isEmpty()) {
                            System.out.println("waiting...");
                            queue.wait();
                        }

                        var s = queue.remove();
                        System.out.println(s + " is consumed");
                    }
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) throws InterruptedException {
        var queue = new LinkedList<String>();

        var executor = Executors.newFixedThreadPool(8);

        executor.submit(new Producer(queue));
        executor.submit(new Consumer(queue));

        UtilFunctions.executorFinishAwait(executor);
    }
}
