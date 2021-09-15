package chapter_17_thread;

import java.util.concurrent.CompletableFuture;

public class CompletableFutureThen {
    private static class Worker {
        public String exec() {
            System.out.println("exec");
            emulateLongTask();
            return "RESULT";
        }

        public Integer aggregate(String input) {
            System.out.println("aggregate");
            return input.length();
        }

        public void showResult(Integer result, Throwable error) {
            if (error != null) {
                System.out.println("error");
                return;
            }

            System.out.println("ret = " + result);
        }

        private void emulateLongTask() {
            // ネットワークアクセス等の重い処理を想定
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        var worker = new Worker();
        var future = CompletableFuture.supplyAsync(worker::exec)
                .thenComposeAsync(s -> CompletableFuture.supplyAsync(worker::exec))
                .thenApplyAsync(worker::aggregate)
                .whenCompleteAsync(worker::showResult);

        future.join();
    }
}
