package chapter_17_thread;

final class Common {
    private Common() {
    }

    static int numberOutput(String name, int loopCnt, int sleepMSec) {
        int sum = 0;

        for (var i = 0; i < loopCnt; ++i) {
            System.out.println(name + " " + i);
            try {
                Thread.sleep(sleepMSec);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            sum += i;
        }

        System.out.println(name + " complete");
        return sum;
    }
}
