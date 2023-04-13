package com.telegrambot.telegram;

import com.pengrad.telegrambot.model.Chat;
import com.pengrad.telegrambot.model.Message;
import com.pengrad.telegrambot.model.request.ParseMode;
import com.pengrad.telegrambot.request.BaseRequest;
import com.pengrad.telegrambot.request.SendMessage;

import java.io.IOException;

public class WelcomeController {

    private Message message;
    private Chat chat;

    public WelcomeController(Message message, Chat chat) {
        this.message = message;
        this.chat = chat;
    }

    public BaseRequest welcomeUser() throws IOException {
        return new SendMessage(chat.id(),
                "Ohayoo !, " + message.from().firstName() + "!" + "\nWelcome to <b>emplacement</b> Bot")
                .parseMode(ParseMode.HTML).replyToMessageId(message.messageId());
    }

}
