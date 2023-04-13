package com.telegrambot;

import java.io.IOException;
import java.lang.management.ManagementFactory;
import java.lang.management.RuntimeMXBean;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.github.kshashov.telegram.api.MessageType;
import com.github.kshashov.telegram.api.TelegramMvcController;
import com.github.kshashov.telegram.api.bind.annotation.BotController;
import com.github.kshashov.telegram.api.bind.annotation.BotPathVariable;
import com.github.kshashov.telegram.api.bind.annotation.BotRequest;
import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Chat;
import com.pengrad.telegrambot.model.Message;
import com.telegrambot.telegram.HelpController;
import com.telegrambot.telegram.SearchController;
import com.telegrambot.telegram.UptimeController;
import com.telegrambot.telegram.WelcomeController;

@SpringBootApplication
@BotController
public class App implements TelegramMvcController {

    private String token = System.getenv("BOT_TOKEN");
    private RuntimeMXBean rb = ManagementFactory.getRuntimeMXBean();

    @Override
    public String getToken() {
        return token;
    }

    @BotRequest(value = "/start", type = { MessageType.CALLBACK_QUERY, MessageType.MESSAGE })
    public void start(Chat chat, Message message, TelegramBot bot) throws IOException {
        WelcomeController wel = new WelcomeController(message, chat);
        wel.welcomeUser(bot);
    }

    @BotRequest("/search {role}")
    public void searchForRole(@BotPathVariable("role") String role, Chat chat, Message message, TelegramBot bot)
            throws IOException {
        SearchController search = new SearchController(message, chat);
        search.sendSearchResult(role, bot, false);
    }

    @BotRequest("/recent")
    public void searchHomeInternships(Chat chat, Message message, TelegramBot bot)
            throws IOException {
        SearchController search = new SearchController(message, chat);
        search.sendSearchResult(null, bot, true);
    }

    @BotRequest("/help")
    public void help(Chat chat, Message message,
            TelegramBot bot)
            throws IOException {
        HelpController helpControl = new HelpController(message, chat);
        helpControl.sendHelp(bot);
    }

    @BotRequest("/uptime")
    public void uptime(Chat chat, Message message,
            TelegramBot bot)
            throws IOException {
        UptimeController uptime = new UptimeController(message, chat);
        uptime.sendUptime(bot, rb);
    }

    public static void main(String[] args) {
        SpringApplication.run(App.class);
    }
}
