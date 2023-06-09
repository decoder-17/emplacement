package emplacementbackendapi.emplacementbackendapi.site;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Cuvette {

    private String CUVETTE_TOKEN = System.getenv("CUVETTE_TOKEN");
    private static final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54";

    public String getHomeInterShipDetails(String page) {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.cuvette.tech/api/v1/student/internship-post/active?pageNumber=" + page
                        + "&sortByDate=true&stipendRange=[5000]"))
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .setHeader("authorization", CUVETTE_TOKEN)
                .setHeader("user-agent", USER_AGENT)
                .build();
        HttpResponse<String> response;
        try {
            response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return null;
        }
        assert response != null;
        return response.body();
    }

    public String getInternshipTitles() {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(
                        "https://api.cuvette.tech/api/v1/admin/internship-title?filter=[object%20Object]&pageSize=&pageNumber="))
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .setHeader("authorization", CUVETTE_TOKEN)
                .setHeader("user-agent", USER_AGENT)
                .build();
        HttpResponse<String> response;
        try {
            response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return null;
        }
        assert response != null;
        return response.body();
    }

    public String getResultsByRole(String role_id, String page) {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.cuvette.tech/api/v1/student/internship-post/active?pageNumber=" + page
                        + "&refInternshipTitle=[%22" + role_id + "%22]&sortByDate=true&stipendRange=[5000]"))
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .setHeader("authorization", CUVETTE_TOKEN)
                .setHeader("user-agent", USER_AGENT)
                .build();
        HttpResponse<String> response;
        try {
            response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return null;
        }
        assert response != null;
        return response.body();
    }
}
