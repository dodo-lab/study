package chapter_17_thread;

import java.util.List;

// Threadクラスのrunメソッドのデフォルト実装は、Threadクラスのコンストラクタに渡された
// Runnableオブジェクトのrunメソッドを実行するようになっているため、ThreadCreateは
// 以下でも置き換え可能
public class RunnableTest {
    private static class Worker implements Runnable {
        private final String name;

        private Worker(String name) {
            this.name = name;
        }

        @Override
        public void run() {
            Common.numberOutput(name, 10, 10);
        }
    }

    public static void main(String[] args) {
        var threads = List.of(
                new Thread(new Worker("one")),
                new Thread(new Worker("two")));

        threads.forEach(Thread::start);

        Common.numberOutput("main", 10, 5);

        threads.forEach(thread -> {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
    }
}
