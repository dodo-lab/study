import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.Socket;
import java.net.UnknownHostException;

public class StudySocket {
    public static void exec() {
        try (Socket socket = new Socket("dokojava.jp", 80)) {
            InputStream is = socket.getInputStream();
            OutputStream os = socket.getOutputStream();

            os.write("GET /index.html HTTP/1.0\r\n".getBytes());
            os.write("\r\n".getBytes());
            os.flush();

            InputStreamReader isr = new InputStreamReader(is);
            int i = isr.read();
            while (i != -1) {
                System.out.print((char) i);
                i = isr.read();
            }
        } catch (UnknownHostException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
