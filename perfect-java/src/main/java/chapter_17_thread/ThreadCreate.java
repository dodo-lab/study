package chapter_17_thread;

import java.util.List;

public class ThreadCreate extends Thread {
    private final String name;

    public ThreadCreate(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        for (var i = 0; i < 10; ++i) {
            System.out.println(name + " " + i);
            try {
                sleep(10L);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println(name + " 完了");
    }

    public static void main(String[] args) {
        var threads = List.of(new ThreadCreate("one"), new ThreadCreate("two"));

        // サブスレッドの開始
        threads.forEach(Thread::start);

        for (var i = 0; i < 10; ++i) {
            System.out.println("main " + i);
            try {
                sleep(5L);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("main 完了");

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
