package com.telegrambot.telegram;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Chat;
import com.pengrad.telegrambot.model.Message;
import com.pengrad.telegrambot.model.request.ParseMode;
import com.pengrad.telegrambot.request.SendMessage;

import java.io.IOException;
import java.lang.management.RuntimeMXBean;

public class UptimeController {
    private Message message;
    private Chat chat;

    public UptimeController(Message message, Chat chat) {
        this.message = message;
        this.chat = chat;
    }

    public void sendUptime(TelegramBot bot, RuntimeMXBean rb) throws IOException {
        long ms = rb.getUptime();
        int seconds = (int) (ms / 1000) % 60;
        int minutes = (int) ((ms / (1000 * 60)) % 60);
        int hours = (int) ((ms / (1000 * 60 * 60)) % 24);
        String msg = "*Bot is up for* - _" + (hours >= 0 && hours < 10 ? "0" + hours : hours) + ":"
                + (minutes >= 0 && minutes < 10 ? "0" + minutes : minutes) + ":"
                + (seconds >= 0 && seconds < 10 ? "0" + seconds : seconds) + "_";
        bot.execute(
                new SendMessage(chat.id(), msg).parseMode(ParseMode.Markdown).replyToMessageId(message.messageId()));
    }
}
