public class RefSample {
    public int times = 0;

    public RefSample(int t) {
        times = t;
    }

    public void hello(String msg) {
        this.hello(msg, times);
    }

    public void hello(String msg, int t) {
        System.out.println("Hello, " + msg + " x" + t);
    }
}
