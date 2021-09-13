package chapter_16_file_network;

import java.io.*;
import java.net.Socket;

public class ClientSocket {
    private static void sendAndReceive(String text) {
        try (var socket = new Socket(Common.SERVER_HOST, Common.SERVER_PORT);
             var in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             var out = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()))) {

            out.write(text);
            out.write(Common.END_MARK);     // 終端文字列(サーバー側との取り決め)
            out.flush();

            int length;
            var buf = new char[4096];
            while ((length = in.read(buf)) != -1) {
                System.out.println(String.valueOf(buf, 0, length));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        sendAndReceive("socket-test");
    }
}
