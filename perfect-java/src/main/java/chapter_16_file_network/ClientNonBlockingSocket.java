package chapter_16_file_network;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.SocketChannel;
import java.nio.charset.StandardCharsets;

public class ClientNonBlockingSocket {
    // selectメソッドのタイムアウト値
    private static final long POLL_TIMEOUT = 5000L;

    private enum HttpState {
        SEND_REQUEST,
        RECV_RESPONSE,
    }

    private final String serverHost;
    private final int serverPort;

    public ClientNonBlockingSocket(String serverHost, int serverPort) {
        this.serverHost = serverHost;
        this.serverPort = serverPort;
    }

    public void execHttpClient() {
        try (var selector = Selector.open();
             var channel = SocketChannel.open()) {
            connect(channel);

            // ノンブロッキングモード
            channel.configureBlocking(false);

            var httpState = HttpState.SEND_REQUEST;

            loop:
            while (true) {
                switch (httpState) {
                    case SEND_REQUEST:
                        channel.register(selector, SelectionKey.OP_WRITE);
                        break;
                    case RECV_RESPONSE:
                        channel.register(selector, SelectionKey.OP_READ);
                        break;
                    default:
                        assert (false);
                }

                if (selector.select(POLL_TIMEOUT) > 0) {
                    for (var key : selector.selectedKeys()) {
                        if (httpState == HttpState.SEND_REQUEST && key.isWritable()) {
                            sendRequest(channel);
                            httpState = HttpState.RECV_RESPONSE;
                        } else if (httpState == HttpState.RECV_RESPONSE && key.isReadable()) {
                            recvResponse(channel);
                            break loop;
                        } else {
                            assert (false);
                        }
                    }
                } else {
                    if (askContinue()) {
                        httpState = HttpState.SEND_REQUEST;
                    } else {
                        break loop;
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // 能動的ソケットの接続処理
    private void connect(SocketChannel channel) throws IOException {
        var address = new InetSocketAddress(serverHost, serverPort);
        channel.connect(address);
    }

    // ソケットデータの送信処理
    private void sendRequest(SocketChannel channel) throws IOException {
        var buffer = ByteBuffer.allocate(4096);
        buffer.put("GET / HTTP/1.1\r\n".getBytes());
        buffer.put("Host: localhost\r\n".getBytes());
        buffer.put("\r\n".getBytes());
        buffer.flip();

        channel.write(buffer);
    }

    // ソケットデータの受信処理
    private void recvResponse(SocketChannel channel) throws IOException {
        var buffer = ByteBuffer.allocate(4096);
        channel.read(buffer);
        System.out.println(StandardCharsets.UTF_8.decode(buffer));
    }

    private boolean askContinue() {
        System.out.println("contunue? [y/n]");
        var input = System.console().readLine();
        return input.charAt(0) == 'y';
    }

    public static void main(String[] args) {
        var client = new ClientNonBlockingSocket(Common.SERVER_HOST, Common.SERVER_PORT);
        client.execHttpClient();
    }
}
