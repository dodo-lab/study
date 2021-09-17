package util;

public class ExecWorker implements Runnable {
    private final Exec exec;
    private final int loopCnt;

    public ExecWorker(Exec exec, int loopCnt) {
        this.exec = exec;
        this.loopCnt = loopCnt;
    }

    public ExecWorker(Exec exec, int loopCnt, int delay) {
        this(exec, loopCnt);

        if (delay > 0) {
            UtilFunctions.sleep(delay);
        }
    }

    @Override
    public void run() {
        for (var i = 0; i < loopCnt; ++i) {
            exec.exec();
        }
    }
}
