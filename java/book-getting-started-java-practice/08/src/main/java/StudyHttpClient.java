import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class StudyHttpClient {
    public static void get() {
        HttpClient client = createHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("http://example.com/movies"))
                .GET()
                .build();

        sendRequest(client, request);
    }

    public static void post() {
        HttpClient client = createHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("http://example.com/movies"))
                .header("Content-Type", "application/json")
                .header("Accept", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString("{\"name\": \"ゲロッパ\","
                        + "\"director\": \"minato\"}"))
                .build();

        sendRequest(client, request);
    }

    private static void sendRequest(HttpClient client, HttpRequest request) {
        try {
            // 同期方式でリクエスト
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            String body = response.body();
            int status = response.statusCode();

            System.out.println(status + " : " + body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    private static HttpClient createHttpClient() {
        return HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_1_1)
                .followRedirects(HttpClient.Redirect.NORMAL)
                .build();
    }
}
