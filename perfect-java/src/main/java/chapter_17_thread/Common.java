package chapter_17_thread;

final class Common {
    private Common() {
    }

    static void numberOutput(String name, int loopCnt, int sleepMSec) {
        for (var i = 0; i < loopCnt; ++i) {
            System.out.println(name + " " + i);
            try {
                Thread.sleep(sleepMSec);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println(name + " complete");
    }
}
