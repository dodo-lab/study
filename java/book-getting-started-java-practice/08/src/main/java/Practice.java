import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.*;
import java.net.*;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Practice {
    public static void exec() {
        p03();
    }

    private static void p03() {
        HttpClient client = HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_1_1)
                .followRedirects(HttpClient.Redirect.NORMAL)
                .build();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.github.com/users/miyabilink"))
                .header("Accept", "application/vnd.github.v3+json")
                .GET()
                .build();

        try {
            // 同期方式でリクエスト
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            String body = response.body();
            int status = response.statusCode();

            if (status == 200) {
                ObjectMapper mapper = new ObjectMapper();
                JsonNode root = mapper.readTree(body);
                String blog = root.get("blog").textValue();
                System.out.println(blog);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    private static void p02() {
        try (Socket socket = new Socket("smtp.example.com", 60025)) {
            OutputStream os = socket.getOutputStream();

            String[] sendBodies = {
                    "HELO smtp.example.com",
                    "MAIL FROM: asaka@example.com",
                    "RCPT TO: minato@example.com",
                    "DATA",
                    "FROM: asaka@example.com",
                    "Subject: Please send me your RPG",
                    "Hello minato. I would you like to play your RPG.",
                    "Could you please send to me ?",
                    ".",
                    "QUIT"
            };
            for (int i = 0; i < sendBodies.length; ++i) {
                String body = (i != sendBodies.length - 1) ? sendBodies[i] + "\r\n" : sendBodies[i];
                os.write(body.getBytes());
            }

            os.flush();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void p01() {
        try {
            URL url = new URL("https://dokojava.jp/favicon.ico");
            InputStream is = url.openStream();
            OutputStream os = new FileOutputStream("dj.ico");

            int i = is.read();
            while (i != -1) {
                os.write((byte) i);
                i = is.read();
            }

            is.close();
            os.flush();
            os.close();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
