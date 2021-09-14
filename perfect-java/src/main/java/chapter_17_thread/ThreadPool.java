package chapter_17_thread;

import java.util.concurrent.Executors;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.TimeUnit;

public class ThreadPool {
    private static class Worker implements Runnable {
        private final String name;

        private Worker(String name) {
            this.name = name;
        }

        @Override
        public void run() {
            Common.numberOutput(name, 10, 10);
        }

        public static void main(String[] args) {
            var executor = Executors.newFixedThreadPool(8);

            executor.execute(new Worker("one"));
            executor.execute(new Worker("two"));

            Common.numberOutput("main", 10, 5);

            // shutdownメソッド実行後は新規タスクを受け付けない
            System.out.println("shutdown");
            executor.shutdown();
            try {
                executor.execute(new Worker("three"));
            } catch (RejectedExecutionException e) {
                System.out.println("RejectedExecutionException");
            }

            // タイムアウトつきで、実行中のタスクの終了を待つ。
            try {
                System.out.println("awaitTermination start");
                boolean result = executor.awaitTermination(10, TimeUnit.SECONDS);
                if (result) {
                    System.out.println("awaitTermination end");
                } else {
                    System.out.println("awaitTermination timeout");
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
