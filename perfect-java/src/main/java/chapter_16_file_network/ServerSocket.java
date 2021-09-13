package chapter_16_file_network;

import java.io.*;

public class ServerSocket {
    private static void receiveAndSend() {
        try (var serverSocket = new java.net.ServerSocket(Common.SERVER_PORT);    // 待ち受けソケット
             var socket = serverSocket.accept(); // 受け入れソケット
             var in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             var out = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()))) {
            var sb = new StringBuilder(4096);

            int c;
            while ((c = in.read()) != -1) {
                if (c == Common.END_MARK) {
                    break;
                }
                sb.append((char) c);
            }

            // 受信文字を大文字にして送信
            out.write(sb.toString().toUpperCase());
            out.flush();

            System.out.println(sb);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        receiveAndSend();
    }
}
