package com.telegrambot.telegram;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.pengrad.telegrambot.model.Chat;
import com.pengrad.telegrambot.model.Message;
import com.pengrad.telegrambot.request.EditMessageText;
import com.pengrad.telegrambot.request.SendMessage;
import com.pengrad.telegrambot.response.SendResponse;
import com.telegrambot.helper.Cuvette_helper;
import com.pengrad.telegrambot.TelegramBot;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class SearchController {

    private Message message;
    private Chat chat;

    public SearchController(Message message, Chat chat) {
        this.message = message;
        this.chat = chat;
    }

    public void sendSearchResult(String role, TelegramBot bot, Boolean isHomePage) throws IOException {

        SendResponse sentMesg = bot
                .execute(new SendMessage(chat.id(), "Fetching Results Please wait.")
                        .replyToMessageId(message.messageId()));
        String res = null;
        if (!isHomePage) {
            res = fetchInternships(role);
        } else {
            res = fetchInternshipsHomePage();
        }
        if (res == null) {
            EditMessageText editMessageText = new EditMessageText(chat.id(), sentMesg.message().messageId(),
                    "Failed to fetch\nPlease make sure you have entered correct domain.").disableWebPagePreview(true);
            bot.execute(editMessageText);
            return;
        }
        JsonElement jsonElement = JsonParser.parseString(res).getAsJsonObject();
        JsonObject jsonObject = jsonElement.getAsJsonObject();
        JsonArray arr = jsonObject.getAsJsonArray("data");
        String msg = "";
        for (JsonElement jsonElement2 : arr) {
            String skills = "";
            JsonObject obj = jsonElement2.getAsJsonObject();
            for (JsonElement sk : obj.get("refSkills").getAsJsonArray()) {
                JsonObject o = sk.getAsJsonObject();
                skills += o.get("name").toString().replace("\"", "") + " ";
            }
            msg += "Company: " + obj.get("refUser").getAsJsonObject().get("refCompanyProfile").getAsJsonObject()
                    .get("companyName").toString().replace("\"", "") + "\n"
                    + "Role: " + (obj.get("refInternshipTitle").getAsJsonObject().get("name").toString()
                            .replace("\"", "").replace("\"",
                                    "")
                            + " (" + obj.get("duration") + " months)")
                    + "\n"
                    + "Salary: "
                    + (obj.get("stipendRange").getAsJsonArray().toString().replace("\"", "").replace("\"", "")) + "\n"
                    + "Location: "
                    + obj.get("refUser").getAsJsonObject().get("refCompanyProfile").getAsJsonObject().get("refLocation")
                            .getAsJsonObject().get("state").toString().replace("\"", "")
                    + "\n"
                    + "Skills: " + skills
                    + "\n"
                    + "https://cuvette.tech/app/student/internship/" + obj.get("_id").toString()
                            .replace("\"", "")
                    + "\n"
                    + "\n";
            EditMessageText editMessageText = new EditMessageText(chat.id(), sentMesg.message().messageId(),
                    msg).disableWebPagePreview(true);
            bot.execute(editMessageText);
        }
    }

    private String fetchInternships(String role) throws IOException {
        String role_id = Cuvette_helper.findRoleId(role.trim().toLowerCase());
        if (role_id == null) {
            return null;
        }
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(
                        "https://backend-decoder-17.cloud.okteto.net/api/v1/site/cuvette/search?role_id=" + role_id))
                .method("GET", HttpRequest.BodyPublishers.noBody())
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

    private String fetchInternshipsHomePage() throws IOException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(
                        "https://backend-decoder-17.cloud.okteto.net/api/v1/site/cuvette/internships"))
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response;
        try {
            response = HttpClient.newHttpClient().send(request,
                    HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return null;
        }
        assert response != null;
        return response.body();
    }
}
