package emplacementbackendapi.emplacementbackendapi.site;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class Naukri {

    private static final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54";

    public String getResultsByRole(String role, String page) {
        try {
            role = URLEncoder.encode(role, StandardCharsets.UTF_8.toString());
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        String url = "https://www.naukri.com/jobapi/v3/search?noOfResults=20&urlType=search_by_keyword&searchType=adv&keyword="
                + role + "&pageNo=" + page + "&experience=0&experience=0&src=jobsearchDesk";
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(
                        url))
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .setHeader("user-agent", USER_AGENT)
                .setHeader("appid", "109")
                .setHeader("systemid", "109")
                .build();
        HttpResponse<String> response;
        try {
            response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return null;
        }
        if (response.statusCode() != 200) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Data Not Found");
        }
        assert response != null;
        return response.body();
    }

}
