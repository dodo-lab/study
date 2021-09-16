package chapter_17_thread;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

// スレッドプールで実現した並行処理サーバ
public class ConcurrentServer {
    private static final int LISTEN_PORT = 9000;
    private static final char END_MARK = '.';
    private final ExecutorService executorService;

    public ConcurrentServer() {
        this.executorService = Executors.newFixedThreadPool(8);
    }

    private static class Worker implements Runnable {
        private final Socket socket;

        private Worker(Socket socket) {
            this.socket = socket;
        }

        @Override
        public void run() {
            try (var socket = this.socket;      // close処理をtry-with-resourcesに任せる
                 var in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                 var out = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()))) {
                var sb = new StringBuilder(4096);

                int c;
                while ((c = in.read()) != -1) {
                    System.out.print((char) c);
                    if (c == END_MARK) {
                        break;
                    }
                    sb.append((char) c);
                }

                out.write(sb.toString());
                out.flush();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public void runLoop() {
        try (var serverSocket = new ServerSocket(LISTEN_PORT)) {
            while (true) {
                // クライアントからの接続待ち
                var socket = serverSocket.accept();
                // 受け入れソケットをWorkerに渡してスレッド生成
                executorService.execute(new Worker(socket));
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            executorService.shutdown();
        }
    }

    public static void main(String[] args) {
        var server = new ConcurrentServer();
        server.runLoop();
    }
}
