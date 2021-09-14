package chapter_17_thread;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executors;

// スレッドの実行結果を返したい場合はRunnableインターフェースではなく、Callableインターフェースで実現可能
public class CallableTest {
    private static class Worker implements Callable<Integer> {
        private final String name;
        private final int loopCnt;

        private Worker(String name, int loopCnt) {
            this.name = name;
            this.loopCnt = loopCnt;
        }

        @Override
        public Integer call() throws Exception {
            return Common.numberOutput(name, loopCnt, 10);
        }
    }

    public static void main(String[] args) {
        var executor = Executors.newFixedThreadPool(8);

        var ret1 = executor.submit(new Worker("one", 10));
        var ret2 = executor.submit(new Worker("two", 15));

        Common.numberOutput("main", 10, 5);

        // Futureオブジェクトのgetメソッドでサブスレッドの返り値を取得可能
        // サブスレッド実行中、getメソッドは待機する（タイムアウトの指定が可能）
        try {
            System.out.println("ret1 = " + ret1.get());
            System.out.println("ret2 = " + ret2.get());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        executor.shutdown();
    }
}
