package com.telegrambot.telegram;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Chat;
import com.pengrad.telegrambot.model.Message;
import com.pengrad.telegrambot.model.request.ParseMode;
import com.pengrad.telegrambot.request.SendMessage;

import java.io.IOException;

public class WelcomeController {

    private Message message;
    private Chat chat;

    public WelcomeController(Message message, Chat chat) {
        this.message = message;
        this.chat = chat;
    }

    public void welcomeUser(TelegramBot bot) throws IOException {
        bot.execute(new SendMessage(chat.id(),
                "Hola <b>" + message.from().firstName() + "</b>!"
                        + "\nWelcome to <b>emplacement</b> Bot\nUse command <i>/help</i> - to see available commands")
                .parseMode(ParseMode.HTML).replyToMessageId(message.messageId()));
    }

}
