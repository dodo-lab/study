package chapter_17_thread;

import util.UtilFunctions;

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
            UtilFunctions.sleep(1000);
        }
    }

    public static void main(String[] args) {
        var worker = new Worker();
        var future1 = CompletableFuture.supplyAsync(worker::exec);
        var future2 = future1.thenComposeAsync(s -> CompletableFuture.supplyAsync(worker::exec));
        var future3 = future2.thenApplyAsync(worker::aggregate);
        var future4 = future3.whenCompleteAsync(worker::showResult);

        future4.join();
    }
}
