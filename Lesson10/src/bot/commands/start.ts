import { Context } from "grammy";
import { Command } from "./commandClass";

export class StartCommand extends Command {
    commandName = 'start';

    execute(ctx: Context): void | Promise<void> {
        // ответ на команду (обращаемся к контексту и возвращаем ответ)
        ctx.reply('Привет! Я твой ПК-ассистент. Нажми /play, чтобы запустить приложение.');
    }
};