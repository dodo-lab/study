package chapter_16_file_network;

final public class Common {
    static String FILE_DUMMY_TEXT = "tmp/dummy.txt";

    static final String SERVER_HOST = "localhost";
    static final int SERVER_PORT = 9000;
    static final char END_MARK = '.';
    static final int CONNECT_TIMEOUT = 5000;
    static final int READ_TIMEOUT = 5000;

    private Common() {
    }
}
