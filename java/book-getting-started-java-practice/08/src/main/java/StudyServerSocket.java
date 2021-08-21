import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class StudyServerSocket {
    public static void exec() {
        System.out.println("起動完了");
        try (ServerSocket serverSocket = new ServerSocket(39648)) {
            Socket socket = serverSocket.accept();
            System.out.println(socket.getInetAddress() + "からの接続");

            socket.getOutputStream().write("WELCOME".getBytes());
            socket.getOutputStream().flush();
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
