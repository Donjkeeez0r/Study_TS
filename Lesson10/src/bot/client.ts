// импорт бота из библиотеки grammy
import { Bot } from 'grammy';
import { ConfigService } from '../services/config';
import { Command } from './commands/commandClass';

export class BotApp {
    private _bot: Bot;

    // передаем экземпляры класса, но внутри бота их не создаем
    public constructor(
        private _configService: ConfigService,
        private _commands: Command[]
    ) {
        const token = this._configService.get('TOKEN');

        // инициализация бота
        this._bot = new Bot(token);

        this.registerCommands();
    }

    // метод для регистрации команд
    private registerCommands() {
        // регистрируем команды в нашем боте
        console.log('Регистрирую команды бота');

        for (const command of this._commands) {
            
            // сопоставление команд по имени (вызывает execute)
            // внутрь бота commandName засовывается внутрь Map и вызовет метод execute для команды
            this._bot.command(command.commandName, (ctx) => command.execute(ctx));

            console.log(`Команда /${command.commandName} зарегистрирована`)
        }
    }

    // запуск бота чтобы он вошел в сеть
    public start() {
        console.log('Бот запущен и готов к работе');
        
        this._bot.start();
    }
}