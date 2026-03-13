import { Context } from "grammy";
import { Command } from "./commandClass";
import { PcService } from "../../services/pc";

export class PlayCommand extends Command {
    commandName = 'play';


    constructor(private _pcService: PcService) {
        // передаем аргументы в конструктор родительского класса
        super();
    };

    execute(ctx: Context): void | Promise<void> {
        // ответ на команду
        ctx.reply('Запускаю процесс на твоем ПК!');

        // вызов метода запуска
        this._pcService.launchGame();
    }
};