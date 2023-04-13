package com.telegrambot.telegram;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Chat;
import com.pengrad.telegrambot.model.Message;
import com.pengrad.telegrambot.model.request.ParseMode;
import com.pengrad.telegrambot.request.SendMessage;

import java.io.IOException;

public class HelpController {

    private Message message;
    private Chat chat;

    public HelpController(Message message, Chat chat) {
        this.message = message;
        this.chat = chat;
    }

    public void sendHelp(TelegramBot bot) throws IOException {
        String msg = "_/start_ - Welcome Message." + "\n" +
                "_/help_ - Get some help." + "\n" +
                "_/recent_ - Get recent internships." + "\n" +
                "_/search_ <role> - Search by role." + "\n" +
                "_/uptime_ - Check Bot's uptime.";
        bot.execute(
                new SendMessage(chat.id(), msg).parseMode(ParseMode.Markdown).replyToMessageId(message.messageId()));
    }
}
