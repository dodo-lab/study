package chapter_17_thread;

import java.util.List;

public class ThreadCreate extends Thread {
    private final String name;

    public ThreadCreate(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        Common.numberOutput(name, 10, 10);
    }

    public static void main(String[] args) {
        var threads = List.of(
                new ThreadCreate("one"),
                new ThreadCreate("two"));

        // サブスレッドの開始
        threads.forEach(Thread::start);

        Common.numberOutput("main", 10, 5);

        // サブスレッドの終了待ち
        threads.forEach(thread -> {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
    }
}
