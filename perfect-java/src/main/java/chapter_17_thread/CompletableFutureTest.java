package chapter_17_thread;

import util.UtilFunctions;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

// CallableとFutureのパターンだとサブスレッドが終了するまで待たされてしまう
// そのため、CompletableFutureを利用したコールバックパターンが有用
public class CompletableFutureTest {
    private static class Worker implements Runnable {
        private final CompletableFuture<String> future;

        private Worker(CompletableFuture<String> future) {
            this.future = future;
        }

        @Override
        public void run() {
            UtilFunctions.sleep(1000);

            // スレッドから結果を返す
            future.complete("RETVAL");
        }
    }

    public static void main(String[] args) {
        var executor = Executors.newFixedThreadPool(8);
        var future = new CompletableFuture<String>();

        // スレッドの実行結果で呼ばれるコールバック処理（エラーケースは省略）
        future.whenCompleteAsync((result, error) -> System.out.println("ret = " + result));

        executor.execute(new Worker(future));
        executor.shutdown();

        UtilFunctions.sleep(2000);
    }
}
